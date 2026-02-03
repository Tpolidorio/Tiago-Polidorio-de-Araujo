import React, { useState } from "react";
import { WavyBackground } from "./components/ui/wavy-background";
import { FadeIn } from "./components/ui/fade-in";
import { ImageAutoSlider } from "./components/ui/image-auto-slider";
import { Check, MessageCircle, ArrowRight, Sparkles, Star, Zap, Plus, Minus, Lock, CreditCard } from "lucide-react";
import { cn } from "./lib/utils";

// --- COMPONENTS ---

const WhatsAppButton = () => (
  <a
    href="https://api.whatsapp.com/send?phone=5511953071333&text=*Ol%C3%A1!%20Quero%20saber%20mais!*"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
    aria-label="Contato via WhatsApp"
  >
    <MessageCircle size={30} fill="currentColor" />
    <span className="absolute right-16 bg-white text-black text-sm font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
      Falar com Especialista
    </span>
  </a>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
        <WavyBackground 
          className="max-w-5xl mx-auto pb-20 px-4" 
          containerClassName="min-h-[90vh]"
          colors={["#4f46e5", "#9333ea", "#ec4899"]} 
        >
          <div className="text-center space-y-6">
            <FadeIn delay={0.1} direction="down">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md mb-4">
                <Sparkles size={16} className="text-purple-400" />
                <span>A Nova Era da Fotografia de Moda</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Sua Coleção no <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Mundo Inteiro</span> sem sair do lugar.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Transforme fotos de cabide em editoriais de luxo. Use nossa IA para vestir modelos reais em cenários paradisíacos em segundos.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#pricing"
                  className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Ver Pacotes de Imagens <ArrowRight size={18} />
                </a>
              </div>
            </FadeIn>
          </div>
        </WavyBackground>
      </section>
  );
};

const Pricing = () => {
  const packs = [
    {
      name: "Starter Pack",
      price: "R$ 97",
      description: "Ideal para pequenas coleções e dropshipping.",
      features: ["10 Fotos em Alta Resolução", "2 Modelos de IA Exclusivos", "5 Cenários Urbanos", "Entrega em 24h"],
      highlight: false,
      isPayment: true,
    },
    {
      name: "Pro Pack",
      price: "R$ 297",
      description: "O favorito das marcas em crescimento.",
      features: ["50 Fotos em Alta Resolução", "8 Modelos Diversificados", "Cenários Premium (Praia, Estúdio, Europa)", "Ajustes de Iluminação Realista", "Suporte Prioritário"],
      highlight: true,
      isPayment: true,
    },
    {
      name: "Enterprise",
      price: "Sob Consulta",
      description: "Solução completa para grandes e-commerces.",
      features: ["Fotos Ilimitadas", "Modelos Exclusivos com sua Identidade", "Cenários Customizados", "Integração via API", "Gerente de Conta"],
      highlight: false,
      isPayment: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Escolha o seu Pack</h2>
            <p className="text-zinc-500">Economize até 90% comparado a ensaios fotográficos tradicionais.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <React.Fragment key={index}>
                <FadeIn delay={index * 0.1} className="h-full">
                  <div 
                    className={cn(
                      "relative p-8 rounded-3xl border transition-all duration-300 hover:scale-105 flex flex-col h-full",
                      pack.highlight 
                        ? "bg-gradient-to-b from-zinc-900 to-black border-purple-500 shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)]" 
                        : "bg-zinc-950 border-white/10"
                    )}
                  >
                    {pack.highlight && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                        Mais Popular
                      </span>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{pack.price}</span>
                      {pack.price.includes("R$") && <span className="text-zinc-500 text-sm ml-2">/único</span>}
                    </div>
                    <p className="text-zinc-400 text-sm mb-6">{pack.description}</p>
                    
                    <ul className="space-y-4 mb-8 flex-grow">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                          <Check size={18} className="text-purple-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {pack.isPayment ? (
                        <>
                            <a
                              href={"https://api.whatsapp.com/send?phone=5511953071333&text=*Ol%C3%A1!%20Quero%20o%20link%20do%20Mercado%20Pago%20para%20o%20" + pack.name + "*"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-3 rounded-xl font-bold text-center transition-all bg-[#009EE3] hover:bg-[#0081b8] text-white flex items-center justify-center gap-2 mb-3"
                            >
                              <CreditCard size={18} />
                              Pagar com Mercado Pago
                            </a>
                            <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-500">
                                <Lock size={12} className="text-[#009EE3]" />
                                <span>Compra Garantida e Segura</span>
                            </div>
                        </>
                    ) : (
                        <a
                          href={"https://api.whatsapp.com/send?phone=5511953071333&text=*Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20Enterprise*"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 rounded-xl font-bold text-center transition-colors bg-white text-black hover:bg-zinc-200"
                        >
                          Falar com Consultor
                        </a>
                    )}
                  </div>
                </FadeIn>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Mariana Costa",
      role: "Dona de E-commerce",
      comment: "Eu gastava quase R$ 3.000 por ensaio com modelo e fotógrafo. Com os packs de IA, reduzi meu custo para menos de R$ 200 e as vendas continuam as mesmas. O realismo é assustador!",
      avatar: "MC"
    },
    {
      name: "Ricardo Silva",
      role: "Dropshipping de Moda Masculina",
      comment: "O que eu mais gostei foi a velocidade. Enviei a foto da peça no cabide e em 12 horas recebi as fotos do modelo em um cenário de Nova York. Sensacional.",
      avatar: "RS"
    },
    {
      name: "Juliana Lins",
      role: "Estilista Independente",
      comment: "Minhas clientes acharam que eu viajei para a Grécia para fotografar a nova coleção. Quando contei que era IA, ninguém acreditou. Qualidade impecável nos tecidos.",
      avatar: "JL"
    }
  ];

  return (
    <section className="py-20 bg-zinc-950/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Quem já <span className="text-purple-500">revolucionou</span> a vitrine
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <React.Fragment key={index}>
              <FadeIn delay={index * 0.15}>
                <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-900/20">
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{item.name}</h4>
                      <p className="text-zinc-500 text-xs uppercase tracking-wide">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 min-h-[80px]">
                    "{item.comment}"
                  </p>
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </FadeIn>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "As imagens realmente parecem reais?",
      answer: "Sim! Utilizamos os modelos mais avançados de difusão estável treinados especificamente para moda. A IA recria texturas de pele, fibras de tecido e iluminação de estúdio de forma 8K ultra-realista."
    },
    {
      question: "Posso usar as fotos em anúncios pagos (Facebook/Instagram)?",
      answer: "Com certeza. Ao adquirir um pack, você recebe os direitos comerciais totais das imagens. Elas são ideais para tráfego pago, pois têm alta taxa de cliques devido à qualidade visual."
    },
    {
      question: "Que tipo de foto eu preciso enviar do meu produto?",
      answer: "Basta uma foto simples da peça em um cabide ou manequim, com boa iluminação (pode ser do celular mesmo). Nossa IA faz o resto: veste o modelo, ajusta o caimento e cria o cenário."
    },
    {
      question: "Qual o prazo de entrega dos packs?",
      answer: "Para os planos Starter e Pro, a entrega é feita em até 24 horas úteis. No plano Enterprise, o prazo é combinado de acordo com o volume de peças."
    },
    {
      question: "E se eu não gostar do cenário ou da modelo?",
      answer: "No plano Pro e Enterprise, você tem direito a rodadas de ajustes para garantir que a estética da imagem esteja 100% alinhada com a identidade da sua marca."
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-950/30 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Dúvidas Frequentes</h2>
          <p className="text-zinc-500">Tudo o que você precisa saber para começar.</p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <FadeIn delay={index * 0.1}>
                <div 
                  className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/30 transition-all hover:border-purple-500/30"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold text-zinc-200">{faq.question}</span>
                    {openIndex === index ? <Minus size={20} className="text-purple-500" /> : <Plus size={20} className="text-purple-500" />}
                  </button>
                  
                  {openIndex === index && (
                    <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeIn>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
    <footer className="py-12 border-t border-white/10 text-center text-zinc-600 text-sm">
        <p>© 2026 AI Fashion Studio. Todos os direitos reservados.</p>
    </footer>
);

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-purple-500/30">
      <Hero />
      <ImageAutoSlider />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}