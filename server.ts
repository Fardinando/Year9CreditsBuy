import express from "express";
import { createServer as createViteServer } from "vite";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/create-checkout-session", async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ error: "Stripe is not configured" });
    }

    const { amount, credits, studentName, studentClass } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card", "pix"],
        payment_method_options: {
          pix: {
            expires_after_seconds: 3600, // 1 hour
          },
        },
        line_items: [
          {
            price_data: {
              currency: "brl",
              product_data: {
                name: `${credits} Créditos - Year 9 2026`,
                description: `Créditos físicos para uso nas vendinhas escolares. Aluno: ${studentName} (${studentClass})`,
                images: ["https://picsum.photos/seed/credits/400/400"],
              },
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.APP_URL}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.APP_URL}/?canceled=true`,
        metadata: {
          studentName,
          studentClass,
          credits: credits.toString(),
        },
      });

      res.json({ id: session.id, url: session.url });
    } catch (error: any) {
      console.error("Stripe Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
