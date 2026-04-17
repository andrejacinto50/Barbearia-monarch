const services = [
  {
    title: 'Corte Premium',
    description:
      'Acabamento preciso, estilo moderno e atenção aos detalhes para um visual de alto nível.'
  },
  {
    title: 'Barba Premium',
    description:
      'Desenho, alinhamento e finalização impecável para valorizar sua presença.'
  },
  {
    title: 'Combo Premium',
    description:
      'Corte + barba para quem busca praticidade sem abrir mão de sofisticação.'
  },
  {
    title: 'Pigmentação e Acabamento',
    description:
      'Detalhes que reforçam o visual com naturalidade, definição e elegância.'
  }
];

const benefits = [
  {
    title: 'Presença visual que valoriza o negócio',
    description:
      'Um site premium transmite mais autoridade, reforça a imagem da barbearia e impressiona logo no primeiro contato.'
  },
  {
    title: 'Mais confiança para novos clientes',
    description:
      'Uma apresentação profissional aumenta a percepção de qualidade e faz o cliente se sentir mais seguro para agendar.'
  },
  {
    title: 'Agendamento direto pelo WhatsApp',
    description:
      'Contato rápido, simples e direto para facilitar a conversão e reduzir qualquer barreira na hora de marcar.'
  }
];

const differentials = [
  'Atendimento com hora marcada',
  'Ambiente sofisticado e confortável',
  'Profissionais qualificados',
  'Foco em estilo, presença e acabamento',
  'Experiência pensada nos mínimos detalhes',
  'Agendamento rápido pelo WhatsApp'
];

const gallery = [
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80'
];

const testimonials = [
  {
    name: 'Rafael M.',
    text: 'Ambiente top e atendimento diferenciado. O corte ficou impecável.'
  },
  {
    name: 'Lucas T.',
    text: 'Barbearia com padrão elevado. Dá para ver o cuidado em cada detalhe.'
  },
  {
    name: 'André P.',
    text: 'Experiência premium do início ao fim. Visual ficou em outro nível.'
  }
];

const whatsappLink =
  'https://wa.me/5548991087702?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Monarch.';

export default function Home() {
  return (
    <main>
      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
        Agendar
      </a>

      <header className="navbar">
        <div className="container navbar-inner">
          <a className="brand" href="#topo">
            <span className="brand-mark" />
            <div>
              <strong>Barbearia Monarch</strong>
              <small>Premium Experience</small>
            </div>
          </a>

          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Galeria</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      <section className="hero" id="topo">
        <div className="hero-overlay" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="hero-content container">
          <div className="hero-copy">
            <span className="badge">Experiência premium em barbearia</span>

            <h1>Seu visual merece uma experiência à altura.</h1>

            <p className="hero-lead">
              Cortes modernos, barba impecável e atendimento de alto nível em um ambiente pensado
              para quem valoriza estilo, presença e sofisticação.
            </p>

            <div className="hero-actions">
              <a className="btn btn-gold" href={whatsappLink} target="_blank" rel="noreferrer">
                Agendar pelo WhatsApp
              </a>
              <a className="btn btn-outline" href="#servicos">
                Ver serviços
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>Visual premium</strong>
                <span>Mais impacto para a marca</span>
              </div>
              <div className="hero-stat">
                <strong>Mais confiança</strong>
                <span>Apresentação profissional</span>
              </div>
              <div className="hero-stat">
                <strong>Contato rápido</strong>
                <span>Agendamento direto no WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <span className="section-tag">Site profissional criado para barbearias</span>
            <h3>Feito para atrair mais clientes e facilitar o agendamento.</h3>
            <p>
              Uma apresentação digital premium para valorizar a barbearia, transmitir confiança e
              transformar visitas em contatos reais.
            </p>

            <div className="hero-card-list">
              <div>
                <span>01</span>
                <p>Presença visual forte para destacar o negócio</p>
              </div>
              <div>
                <span>02</span>
                <p>Estrutura profissional que gera mais confiança</p>
              </div>
              <div>
                <span>03</span>
                <p>WhatsApp em destaque para converter mais rápido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-heading center">
            <span className="section-tag">Destaque</span>
            <h2>Site profissional criado para barbearias que querem atrair mais clientes e facilitar o agendamento.</h2>
          </div>

          <div className="grid benefits-grid">
            {benefits.map((item) => (
              <article className="benefit-card" key={item.title}>
                <div className="benefit-icon" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="sobre">
        <div className="container two-columns">
          <div>
            <span className="section-tag">Sobre a Monarch</span>
            <h2>Mais do que um corte. Uma experiência pensada para impressionar.</h2>
            <p>
              Na Barbearia Monarch, cada detalhe foi pensado para entregar um atendimento
              diferenciado. Unimos técnica, estilo e um ambiente sofisticado para valorizar a sua
              imagem com confiança e personalidade.
            </p>
            <p>
              Do primeiro contato ao acabamento final, a proposta é oferecer um padrão de qualidade
              que o cliente percebe em cada etapa da experiência.
            </p>
          </div>

          <div className="highlight-card">
            <h3>O que você encontra aqui</h3>
            <ul>
              <li>Atendimento com horário agendado</li>
              <li>Ambiente elegante e confortável</li>
              <li>Equipe focada em excelência</li>
              <li>Visual alinhado com seu estilo</li>
              <li>Experiência premium do começo ao fim</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt" id="servicos">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Serviços</span>
            <h2>Serviços premium para quem exige presença.</h2>
          </div>

          <div className="grid cards-grid">
            {services.map((service, index) => (
              <article className="card" key={service.title}>
                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Diferenciais</span>
            <h2>Por que escolher a Monarch?</h2>
          </div>

          <div className="grid differentials-grid">
            {differentials.map((item) => (
              <div className="differential-item" key={item}>
                <span className="check">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="galeria">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Galeria</span>
            <h2>Um ambiente que combina estilo, conforto e sofisticação.</h2>
          </div>

          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div className="gallery-item" key={image}>
                <img src={image} alt={`Ambiente da Barbearia Monarch ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Depoimentos</span>
            <h2>O que nossos clientes dizem</h2>
          </div>

          <div className="grid testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p>“{testimonial.text}”</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contato">
        <div className="container cta-box">
          <span className="section-tag">Agendamento</span>
          <h2>Agende seu horário e viva a experiência Monarch.</h2>
          <p>
            Eleve seu visual com um atendimento premium. Fale agora pelo WhatsApp e reserve seu
            horário sem complicação.
          </p>

          <div className="cta-actions">
            <a className="btn btn-gold" href={whatsappLink} target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp
            </a>
            <a className="btn btn-outline" href="#topo">
              Voltar ao topo
            </a>
          </div>
        </div>
      </section>

      <nav className="mobile-bottom-nav">
  <a href="#topo" className="mobile-nav-item">
    <span className="mobile-nav-icon">⌂</span>
    <span className="mobile-nav-label">Início</span>
  </a>

  <a href="#sobre" className="mobile-nav-item">
    <span className="mobile-nav-icon">◦</span>
    <span className="mobile-nav-label">Sobre</span>
  </a>

  <a
    href={whatsappLink}
    target="_blank"
    rel="noreferrer"
    className="mobile-nav-item mobile-nav-whatsapp"
  >
    <span className="mobile-nav-icon">✆</span>
    <span className="mobile-nav-label">WhatsApp</span>
  </a>

  <a href="#servicos" className="mobile-nav-item">
    <span className="mobile-nav-icon">□</span>
    <span className="mobile-nav-label">Serviços</span>
  </a>

  <a href="#galeria" className="mobile-nav-item">
    <span className="mobile-nav-icon">◇</span>
    <span className="mobile-nav-label">Galeria</span>
  </a>
</nav>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <h3>Barbearia Monarch</h3>
            <p>Estilo, presença e acabamento de alto nível.</p>
          </div>

          <div>
            <p>Seg a Sáb • 09:00 às 20:00</p>
            <p>Rua Exemplo, 245 • Centro</p>
          </div>
        </div>
      </footer>
    </main>
  );
}