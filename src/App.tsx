import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Info, 
  ShieldCheck, 
  Truck, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle,
  ChevronRight,
  Mail,
  Instagram,
  CreditCard,
  QrCode,
  FileText,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---

interface CreditPackage {
  id: string;
  credits: number;
  price: number;
  label: string;
  popular?: boolean;
  color?: string;
}

const PACKAGES: CreditPackage[] = [
  { id: 'p1', credits: 5, price: 5, label: 'Início Rápido' },
  { id: 'p2', credits: 10, price: 10, label: 'Essencial' },
  { id: 'p3', credits: 15, price: 15, label: 'Padrão' },
  { id: 'p4', credits: 20, price: 20, label: 'Combo Amigo' },
  { id: 'p5', credits: 25, price: 25, label: 'Especial' },
  { id: 'p6', credits: 50, price: 50, label: 'Mais Popular', popular: true },
  { id: 'p7', credits: 100, price: 100, label: 'VIP Premium' },
];

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100 py-4">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 p-1.5 rounded-lg">
          <ShoppingBag className="w-5 h-5 text-black" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">Year 9 Credits</h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Class of 2026</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#inicio" className="hover:text-black transition-colors">Início</a>
        <a href="#como-funciona" className="hover:text-black transition-colors">Como Funciona</a>
        <a href="#pacotes" className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors">Comprar Créditos</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="inicio" className="relative py-12 md:py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full uppercase tracking-widest">
          Formatura 2026
        </span>
        <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900">
          Apoie a viagem de formatura do <span className="text-yellow-500">Year 9 2026</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-lg">
          Compre créditos virtuais e ajude nossa turma a arrecadar fundos para a viagem de formatura. 
          Seus créditos poderão ser usados em todas as nossas bake sales!
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#pacotes" className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/20 flex items-center gap-2">
            Comprar Créditos <ChevronRight className="w-4 h-4" />
          </a>
          <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all">
            Saiba Mais
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex items-center justify-center"
      >
        <div className="relative w-full max-w-[400px] aspect-square">
          <img 
            src="/images/logo.png" 
            className="w-full h-full object-contain drop-shadow-2xl" 
            alt="Year 9 2026 Logo"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/y9logo/800/800';
            }}
          />
        </div>
        
        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-bold">100% Seguro</p>
            <p className="text-xs text-gray-500">Transação via Stripe</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

import { STRIPE_PAYMENT_LINKS } from './Variables';

function PackageCard({ pkg }: { pkg: CreditPackage, key?: string | number }) {
  const handlePurchase = () => {
    const link = STRIPE_PAYMENT_LINKS[pkg.id];
    if (link) {
      window.location.href = link;
    } else {
      alert("Link de pagamento não configurado para este pacote.");
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "relative p-8 rounded-3xl border transition-all flex flex-col h-full",
        pkg.popular 
          ? "bg-slate-900 border-yellow-400 text-white shadow-2xl scale-105 z-10" 
          : "bg-white border-gray-100 text-gray-900 hover:border-yellow-200"
      )}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
          Popular
        </div>
      )}
      
      <div className="mb-6">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center mb-4",
          pkg.popular ? "bg-yellow-400/20" : "bg-yellow-100"
        )}>
          <ShoppingBag className={cn("w-6 h-6", pkg.popular ? "text-yellow-400" : "text-yellow-600")} />
        </div>
        <h3 className="text-xl font-bold">{pkg.credits} Créditos</h3>
        <p className={cn("text-sm", pkg.popular ? "text-gray-400" : "text-gray-500")}>{pkg.label}</p>
      </div>
      
      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-sm font-bold opacity-60">R$</span>
          <span className="text-4xl font-black">{pkg.price.toFixed(2).replace('.', ',')}</span>
        </div>
        
        <button 
          onClick={handlePurchase}
          className={cn(
            "w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2",
            pkg.popular 
              ? "bg-yellow-400 text-black hover:bg-yellow-500" 
              : "bg-gray-100 text-gray-900 hover:bg-yellow-400 hover:text-black"
          )}
        >
          Comprar Agora
        </button>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCanceled, setShowCanceled] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setShowSuccess(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
    if (query.get('canceled')) {
      setShowCanceled(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-yellow-200">
      <Navbar />
      
      <main className="pb-20">
        <AnimatePresence>
          {showSuccess && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-green-500 text-white py-4 px-4 text-center font-bold flex items-center justify-center gap-2 overflow-hidden"
            >
              <CheckCircle2 className="w-5 h-5" />
              Pagamento realizado com sucesso! Seus créditos serão entregues em breve.
              <button onClick={() => setShowSuccess(false)} className="ml-4 opacity-60 hover:opacity-100">✕</button>
            </motion.div>
          )}
          {showCanceled && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-red-500 text-white py-4 px-4 text-center font-bold flex items-center justify-center gap-2 overflow-hidden"
            >
              <AlertTriangle className="w-5 h-5" />
              O pagamento foi cancelado. Tente novamente quando desejar.
              <button onClick={() => setShowCanceled(false)} className="ml-4 opacity-60 hover:opacity-100">✕</button>
            </motion.div>
          )}
        </AnimatePresence>

        <Hero />

        {/* --- Packages Section --- */}
        <section id="pacotes" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-gray-900">Escolha seu Pacote de Créditos</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">
                <Info className="w-4 h-4" />
                <span>1 Crédito = R$ 1,00</span>
              </div>
              <p className="text-gray-500 max-w-xl mx-auto italic">
                Todos os créditos são físicos e serão entregues na escola.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map(pkg => (
                <PackageCard 
                  key={pkg.id} 
                  pkg={pkg} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- How it Works --- */}
        <section id="como-funciona" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center mb-16">Como funciona o pagamento?</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  icon: <ShoppingBag className="w-6 h-6" />, 
                  title: "1. Escolha", 
                  desc: "Selecione o pacote desejado e clique em comprar para ser redirecionado ao Stripe." 
                },
                { 
                  icon: <QrCode className="w-6 h-6" />, 
                  title: "2. Pagamento", 
                  desc: "Aceitamos Pix e Cartão de Crédito. Todo o processo é 100% seguro via Stripe." 
                },
                { 
                  icon: <User className="w-6 h-6" />, 
                  title: "3. Identificação", 
                  desc: "Importante: Informe o Nome Completo e Sala do Aluno no checkout." 
                }
              ].map((step, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto text-yellow-600">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Our Class Photo Section --- */}
        <section id="nossa-turma" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
              <img 
                src="/images/turma.png" 
                className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Nossa Turma Year 9 2026"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/class-2026/1200/600';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-2xl"
                >
                  <span className="inline-block px-4 py-1 bg-yellow-400 text-black text-xs font-black rounded-full uppercase tracking-widest mb-4">
                    Juntos pela Formatura
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    Nossa Turma, <br />Nosso Sonho.
                  </h2>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    Cada crédito comprado nos aproxima mais da nossa viagem de formatura. 
                    Obrigado por fazer parte dessa jornada com o Year 9 2026!
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Important Rules --- */}
        <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-4 mb-20">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black leading-tight">Regras e Políticas Importantes</h2>
              <div className="space-y-6">
                {[
                  { icon: <CheckCircle2 className="text-green-400" />, title: "Destino dos Fundos", desc: "100% do valor arrecadado será destinado exclusivamente ao fundo da viagem de formatura do Year 9 2026." },
                  { icon: <AlertTriangle className="text-yellow-400" />, title: "Política de Reembolso", desc: "Por se tratar de uma arrecadação beneficente escolar, não realizamos estornos após a confirmação do pagamento." },
                  { icon: <Truck className="text-blue-400" />, title: "Entrega", desc: "Os créditos físicos serão entregues diretamente na sala de aula informada em até 48h úteis após a confirmação." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img src="https://picsum.photos/seed/school/600/600" className="w-full h-full object-cover opacity-50" alt="School" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
                  <HelpCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Dúvidas?</h3>
                  <p className="text-gray-300 text-sm mb-6">Estamos à disposição para esclarecer qualquer dúvida sobre sua compra.</p>
                  <a href="mailto:year92026@gmail.com" className="text-yellow-400 font-bold hover:underline flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" /> year92026@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 p-1.5 rounded-lg">
              <ShoppingBag className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold">Year 9 Credits</span>
          </div>
          <p className="text-sm text-gray-500">© Year 9 2026 Credits Buy. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-yellow-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-yellow-400 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
