/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  PlayCircle, 
  Users, 
  TrendingUp, 
  Clock, 
  Gift,
  Smartphone,
  Video,
  Mic2,
  Repeat,
  DollarSign,
  Calendar,
  ChevronDown,
  Star,
  Lock,
  CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:py-24 md:px-12 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, className = "", primary = true, onClick }: { children: React.ReactNode, className?: string, primary?: boolean, onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full md:w-auto px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
      primary 
        ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-200" 
        : "bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50"
    } ${className}`}
  >
    {children}
  </motion.button>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-center">
      {[
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Minutos', value: timeLeft.minutes },
        { label: 'Segundos', value: timeLeft.seconds }
      ].map((item, i) => (
        <div key={i} className="bg-slate-900 text-white p-3 rounded-xl min-w-[80px]">
          <div className="text-2xl font-black">{String(item.value).padStart(2, '0')}</div>
          <div className="text-[10px] uppercase tracking-widest opacity-50">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-lg text-slate-800 hover:text-emerald-600 transition-colors"
      >
        {question}
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const CHECKOUT_URL = "https://pay.kiwify.com.br/A804HYQ";

  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Header / Hero */}
      <header className="pt-12 pb-20 px-6 text-center bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-emerald-100 text-emerald-700 rounded-full">
              Método Exclusivo 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-slate-900">
              Crie Vídeos Virais com IA <span className="text-emerald-500 underline decoration-emerald-200 underline-offset-8">Sem Aparecer</span>, Sem Câmera e Sem Saber Editar
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
              Transforme objetos comuns em personagens que geram milhões de visualizações e aprenda a monetizar cada vídeo.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button onClick={scrollToOffer} className="bg-emerald-500">
                QUERO CRIAR MEU PRIMEIRO VÍDEO VIRAL AGORA <ArrowRight size={20} />
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck size={16} className="text-emerald-500" /> Acesso imediato após o pagamento
            </p>
          </motion.div>
        </div>
      </header>

      {/* Section 1: Belief Breaking */}
      <Section className="bg-slate-900 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Você não precisa de nada disso para ter sucesso:
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "Mostrar o rosto",
                "Ter seguidores",
                "Comprar equipamentos caros",
                "Saber editar profissionalmente"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-slate-300">
                  <XCircle className="text-red-500 shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <p className="text-xl leading-relaxed text-slate-300 italic mb-6">
              "Com Inteligência Artificial, qualquer objeto pode virar um personagem viral — exatamente como mostrado no método <span className="text-emerald-400 font-bold">Objetos que Falam</span>."
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-2xl shrink-0">🥕</div>
                <div>
                  <p className="text-slate-200 font-bold">Cenoura Reclamona</p>
                  <p className="text-slate-400 text-sm">"Por que você me deixou na geladeira?"</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl shrink-0">💳</div>
                <div>
                  <p className="text-slate-200 font-bold">Cartão Sincero</p>
                  <p className="text-slate-400 text-sm">"Sério que você vai comprar isso?"</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors">
                <div className="w-12 h-12 bg-slate-400 rounded-xl flex items-center justify-center text-2xl shrink-0">🧊</div>
                <div>
                  <p className="text-slate-200 font-bold">Geladeira Fofoqueira</p>
                  <p className="text-slate-400 text-sm">"Eu vi o que você comeu ontem à noite..."</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-center font-bold text-emerald-400 text-2xl">
              E isso está gerando milhões de views.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 2: Opportunity */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">A Maior Oportunidade da História</h2>
          <p className="text-xl text-slate-600">Enquanto a maioria ainda acha que precisa aparecer, criadores anônimos estão dominando.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <TrendingUp />, text: "Crescendo páginas dark" },
            { icon: <Users />, text: "Monetizando com afiliados" },
            { icon: <Zap />, text: "Vendendo produtos próprios" },
            { icon: <Smartphone />, text: "Criando canais infantis" },
            { icon: <DollarSign />, text: "Faturando com TikTok Shop" },
            { icon: <PlayCircle />, text: "Ganhando com AdSense" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                {item.icon}
              </div>
              <p className="font-bold text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 p-8 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
          <p className="text-xl md:text-2xl font-bold text-emerald-900">
            A janela ainda está aberta. Você vai aproveitar ou vai esperar o mercado saturar?
          </p>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Quem Já Está Aplicando</h2>
          <p className="text-xl text-slate-600">Veja os resultados de quem decidiu começar hoje.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Lucas M.", role: "Criador de Conteúdo", text: "Em 2 semanas meu canal dark de curiosidades explodiu. A técnica do loop é surreal!", stars: 5 },
            { name: "Ana Paula", role: "Afiliada", text: "Nunca imaginei que uma cafeteira falante me faria vender tanto como afiliada. O método é direto ao ponto.", stars: 5 },
            { name: "Ricardo S.", role: "Empreendedor", text: "O plano de 7 dias é perfeito. Segui cada passo e já tenho 3 vídeos com mais de 50k views.", stars: 5 }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(item.stars)].map((_, i) => <Star key={i} size={16} className="fill-emerald-500 text-emerald-500" />)}
              </div>
              <p className="text-slate-700 mb-6 italic">"{item.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 3: The Method */}
      <Section className="bg-white border-y border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">O Que Você Vai Aprender</h2>
          <p className="text-xl text-slate-600">Um método estruturado, direto ao ponto, sem enrolação.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            { 
              icon: <Video />, 
              title: "Estrutura do Vídeo Viral", 
              desc: "As 5 partes: Gancho forte, conflito, frase impactante e final que gera comentário." 
            },
            { 
              icon: <Smartphone />, 
              title: "Modelo de Roteiro Pronto", 
              desc: "Fórmula simples que funciona em qualquer nicho (fitness, financeiro, educação, casa)." 
            },
            { 
              icon: <Zap />, 
              title: "Prompt Profissional 3D", 
              desc: "Gere imagens estilo Pixar com iluminação cinematográfica em formato 9:16." 
            },
            { 
              icon: <PlayCircle />, 
              title: "Ferramentas de Animação", 
              desc: "Domine VEO, Pika, CapCut e Luma para dar vida aos seus personagens." 
            },
            { 
              icon: <Mic2 />, 
              title: "Vozes Realistas", 
              desc: "Criação de voz com ElevenLabs e outras ferramentas de ponta." 
            },
            { 
              icon: <Repeat />, 
              title: "Técnica do Loop Infinito", 
              desc: "O segredo que multiplica visualizações automaticamente." 
            },
            { 
              icon: <DollarSign />, 
              title: "6 Formas de Monetizar", 
              desc: "Estratégias reais para colocar dinheiro no bolso com seus vídeos." 
            },
            { 
              icon: <Calendar />, 
              title: "Plano Prático de 7 Dias", 
              desc: "Um roteiro dia após dia para você começar do absoluto zero." 
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="shrink-0 w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 4: Benefits */}
      <Section>
        <div className="bg-emerald-600 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">Ao aplicar o método você poderá:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Criar 1 vídeo por dia em menos de 30 minutos",
                "Construir audiência sem exposição",
                "Gerar tráfego orgânico todos os dias",
                "Criar ativos digitais que trabalham por você",
                "Monetizar com afiliados ou produtos próprios"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                  <CheckCircle2 className="text-emerald-300 shrink-0" size={24} />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-700 rounded-full blur-3xl opacity-50"></div>
        </div>
      </Section>

      {/* Section 5: Urgency */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <Clock className="mx-auto mb-6 text-emerald-500" size={48} />
          <h2 className="text-3xl md:text-5xl font-black mb-8">O Tempo Está Correndo</h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Quem dominar agora esse formato sai na frente. Quem esperar, vai entrar quando o mercado já estiver saturado. O algoritmo recompensa quem começa cedo.
          </p>
          <div className="p-6 bg-red-50 border border-red-100 rounded-2xl inline-block">
            <p className="text-red-600 font-bold">Aproveite o preço promocional de lançamento antes que suba!</p>
          </div>
        </div>
      </Section>

      {/* Section 6: Deliverables */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">O Que Você Recebe</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <Gift />, title: "Ebook Completo", desc: "Passo a passo do zero à monetização." },
            { icon: <Smartphone />, title: "Modelos de Roteiro", desc: "Scripts prontos para copiar e colar." },
            { icon: <Zap />, title: "Estrutura Viral", desc: "A lógica validada por trás dos milhões de views." },
            { icon: <Repeat />, title: "Técnicas de Retenção", desc: "Como manter as pessoas assistindo até o fim." },
            { icon: <DollarSign />, title: "Estratégias de Venda", desc: "Como transformar views em dinheiro real." },
            { icon: <Calendar />, title: "Plano de 7 Dias", desc: "O guia prático para agir agora." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Dúvidas Frequentes</h2>
          <p className="text-xl text-slate-600">Tire suas dúvidas antes de começar.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
          <FAQItem 
            question="Preciso saber editar vídeos?" 
            answer="Não! O método ensina como usar ferramentas de IA que fazem o trabalho pesado por você. Se você sabe arrastar e soltar, você consegue fazer." 
          />
          <FAQItem 
            question="Quanto tempo demora para ver resultados?" 
            answer="Seguindo o plano de 7 dias, você terá seu primeiro vídeo pronto e postado em uma semana. Os resultados variam, mas a consistência é a chave." 
          />
          <FAQItem 
            question="O acesso é vitalício?" 
            answer="Sim! Uma vez adquirido, o ebook e todos os modelos são seus para sempre, incluindo atualizações futuras." 
          />
          <FAQItem 
            question="Como recebo o material?" 
            answer="Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download e acesso à área de membros." 
          />
        </div>
      </Section>

      {/* Guarantee */}
      <Section>
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] border-2 border-slate-100 shadow-xl text-center">
          <ShieldCheck className="mx-auto mb-6 text-emerald-500" size={64} />
          <h2 className="text-3xl md:text-4xl font-black mb-6">Risco Zero: Garantia de 7 Dias</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Garantia incondicional de 7 dias. Se você ler e perceber que não é para você, devolvemos seu investimento. Sem perguntas, sem burocracia.
          </p>
          <div className="inline-block px-6 py-2 bg-slate-100 rounded-full font-bold text-slate-600">
            VOCÊ NÃO TEM NADA A PERDER
          </div>
        </div>
      </Section>

      {/* Final Offer */}
      <Section id="offer" className="bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6 uppercase tracking-widest">A oferta expira em:</h2>
            <CountdownTimer />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8">Oferta Especial</h2>
          <div className="mb-10">
            <p className="text-slate-400 text-xl line-through mb-2">De R$ 99,90</p>
            <p className="text-6xl md:text-8xl font-black text-emerald-400 mb-4">R$ 19,90</p>
            <p className="text-xl text-slate-300">Pagamento único. Acesso vitalício.</p>
          </div>
          <p className="text-lg text-slate-400 mb-10">
            Menos que uma pizza. E pode se tornar sua nova fonte de renda.
          </p>
          <Button onClick={handleCheckout} className="bg-emerald-500 text-2xl py-6 px-12 w-full">
            QUERO MEU ACESSO AGORA <ArrowRight size={24} />
          </Button>
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            <div className="flex items-center gap-2 font-bold text-xl italic">VISA</div>
            <div className="flex items-center gap-2 font-bold text-xl italic">Mastercard</div>
            <div className="flex items-center gap-2 font-bold text-xl italic">PIX</div>
            <div className="flex items-center gap-2 font-bold text-xl italic">PayPal</div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-slate-400 text-sm border-t border-slate-100 bg-white">
        <p className="mb-4">© 2026 Método Objetos que Falam. Todos os direitos reservados.</p>
        <p className="max-w-2xl mx-auto">
          Este site não é afiliado ao Facebook, Google ou TikTok. Os resultados podem variar de pessoa para pessoa e dependem da aplicação correta do método.
        </p>
      </footer>

    </div>
  );
}
