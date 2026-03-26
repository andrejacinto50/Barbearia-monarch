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

const differentials = [
  'Atendimento com hora marcada',
  'Ambiente sofisticado e confortável',
  'Profissionais qualificados',
  'Foco em estilo, presença e acabamento',
  'Experiência pensada nos mínimos detalhes'
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

export default function Home() {
  return (
    <main>
      <a
        className="floating-whatsapp"
        href="https://wa.me/5548991087702?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Monarch."
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <header className="navbar">
        <div className="brand">Barbearia Monarch</div>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="badge">Experiência premium em barbearia</span>
          <h1>Seu visual merece padrão premium.</h1>
          <p>
            Cortes modernos, barba impecável e atendimento de alto nível em um ambiente pensado
            para quem valoriza estilo, presença e sofisticação.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-gold"
              href="https://wa.me/5548991087702?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Monarch."
              target="_blank"
              rel="noreferrer"
            >
              Agendar pelo WhatsApp
            </a>
            <a className="btn btn-outline" href="#servicos">
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="sobre">
        <div className="container two-columns">
          <div>
            <span className="section-tag">Sobre a Monarch</span>
            <h2>Mais do que um corte. Uma experiência.</h2>
            <p>
              Na Barbearia Monarch, cada detalhe foi pensado para entregar um atendimento
              diferenciado. Unimos técnica, estilo e um ambiente sofisticado para valorizar a sua
              imagem com confiança e personalidade.
            </p>
            <p>
              Do primeiro atendimento ao acabamento final, nossa proposta é oferecer um padrão de
              qualidade que o cliente percebe e sente em cada visita.
            </p>
          </div>
          <div className="highlight-card">
            <h3>O que você encontra aqui</h3>
            <ul>
              <li>Atendimento com horário agendado</li>
              <li>Ambiente elegante e confortável</li>
              <li>Equipe focada em excelência</li>
              <li>Visual alinhado com seu estilo</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt" id="servicos">
        <div className="container">
          <span className="section-tag">Serviços</span>
          <h2>Serviços premium para quem exige presença.</h2>
          <div className="grid cards-grid">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <div className="card-number">01</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section-tag">Diferenciais</span>
          <h2>Por que escolher a Monarch?</h2>
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
          <span className="section-tag">Galeria</span>
          <h2>Um ambiente que combina estilo e sofisticação.</h2>
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
          <span className="section-tag">Depoimentos</span>
          <h2>O que nossos clientes dizem</h2>
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
          <a
            className="btn btn-gold"
            href="https://wa.me/5548991087702?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Monarch."
            target="_blank"
            rel="noreferrer"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

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
