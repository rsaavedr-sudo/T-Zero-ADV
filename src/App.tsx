import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  PhoneCall, 
  Scale, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-display font-bold tracking-tighter text-slate-900">
              T-ZERO<span className="text-emerald-600">.</span>ADVISORY
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Sobre</a>
            <a href="#contato" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all">
              Falar com um Especialista
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4">
          <a href="#servicos" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Serviços</a>
          <a href="#sobre" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Sobre</a>
          <a href="#contato" className="block w-full text-center bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-medium" onClick={() => setIsOpen(false)}>
            Falar com um Especialista
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-6 uppercase tracking-wider">
              Consultoria Estratégica Especializada
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
              Clareza Estratégica em Meio à <span className="text-emerald-600">Complexidade Tecnológica</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Navegamos pela avalanche de IA e regulações complexas para transformar sua operação de telecom e contact center em uma estrutura de alta performance e conformidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                Agendar Diagnóstico <ArrowRight size={18} />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all">
                Conhecer Nossos Serviços
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  const points = [
    "Perdidas diante da avalanche de soluções de IA",
    "Inseguras quanto às regras da ANATEL",
    "Confusas sobre STIR/SHAKEN",
    "Sem clareza sobre métricas operacionais",
    "Pressionadas por performance e redução de risco"
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Sua empresa se sente assim hoje?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              O cenário tecnológico atual é barulhento e volátil. Muitas organizações estão investindo em ferramentas sem uma base estratégica sólida.
            </p>
            <div className="space-y-4">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 bg-emerald-500/20 p-1 rounded">
                    <X size={16} className="text-emerald-400" />
                  </div>
                  <span className="text-slate-300 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl border border-white/10 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-6xl font-display font-bold text-emerald-400 mb-4">T-ZERO</div>
                <div className="text-xl text-slate-300">O ponto de partida para a sua transformação digital segura.</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Consultoria em Telecom",
      description: "Estratégia especializada em comunicação massiva e infraestrutura crítica de telecomunicações.",
      icon: <PhoneCall className="text-emerald-600" size={32} />,
    },
    {
      title: "Arquitetura de Contact Center",
      description: "Desenho operacional e tecnológico para centros de contato que buscam eficiência e escala.",
      icon: <BarChart3 className="text-emerald-600" size={32} />,
    },
    {
      title: "Guia Técnico de IA",
      description: "Curadoria e implementação de Inteligência Artificial que realmente gera valor, sem hype.",
      icon: <Cpu className="text-emerald-600" size={32} />,
    },
    {
      title: "Clareza Regulatória",
      description: "Adequação total às normas da ANATEL e implementação técnica de protocolos como STIR/SHAKEN.",
      icon: <Scale className="text-emerald-600" size={32} />,
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Nossa Expertise</h2>
          <p className="text-slate-600 text-lg">
            Combinamos profundo conhecimento técnico com visão de negócios para entregar soluções que resolvem problemas reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className="mb-6 p-3 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-emerald-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-bold text-emerald-600 hover:gap-2 transition-all">
                Saiba mais <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Escritório moderno" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <ShieldCheck className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-500">Conformidade Regulatória</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-4 block">Sobre a T-Zero Advisory</span>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">
              Transformando Complexidade em Vantagem Competitiva
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                A T-Zero Advisory nasceu da necessidade de preencher a lacuna entre as promessas tecnológicas e a realidade operacional e regulatória do mercado brasileiro.
              </p>
              <p>
                Não somos apenas consultores; somos arquitetos de soluções que entendem as nuances da ANATEL, os desafios do STIR/SHAKEN e o verdadeiro potencial da IA quando aplicada com critério.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Foco em resultados operacionais mensuráveis",
                  "Independência tecnológica absoluta",
                  "Expertise profunda em regulação telecom",
                  "Abordagem pragmática para inovação com IA"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-3xl -z-0" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Pronto para trazer clareza à sua operação?
            </h2>
            <p className="text-slate-400 text-xl mb-12">
              Agende uma conversa estratégica com nossos especialistas e descubra como podemos blindar sua empresa contra riscos e maximizar sua performance.
            </p>
            <form className="grid md:grid-cols-2 gap-4 mb-8">
              <input 
                type="text" 
                placeholder="Seu Nome" 
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input 
                type="email" 
                placeholder="E-mail Corporativo" 
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="md:col-span-2 bg-emerald-500 text-slate-900 font-bold py-5 rounded-2xl hover:bg-emerald-400 transition-all">
                Enviar Solicitação de Contato
              </button>
            </form>
            <p className="text-slate-500 text-sm">
              Ao enviar, você concorda com nossa política de privacidade e tratamento de dados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-display font-bold tracking-tighter text-slate-900">
              T-ZERO<span className="text-emerald-600">.</span>ADVISORY
            </span>
            <p className="text-slate-500 text-sm mt-2">© 2024 T-Zero Advisory. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Termos</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
