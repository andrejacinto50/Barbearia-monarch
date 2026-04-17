const services = [
  {
    title: 'Corte Premium',
    description:
      'Precisão, estilo e acabamento refinado para quem quer transmitir presença com um visual mais forte e atual.'
  },
  {
    title: 'Barba Premium',
    description:
      'Desenho estratégico, alinhamento impecável e finalização pensada para valorizar os traços com sofisticação.'
  },
  {
    title: 'Combo Premium',
    description:
      'Corte e barba em uma experiência completa para quem busca praticidade sem abrir mão de um padrão elevado.'
  },
  {
    title: 'Pigmentação e Acabamento',
    description:
      'Detalhes que reforçam definição, equilíbrio visual e elegância, elevando ainda mais o resultado final.'
  }
];

const benefits = [
  {
    title: 'Presença visual que valoriza o negócio',
    description:
      'Uma apresentação premium fortalece a imagem da barbearia, transmite autoridade e gera uma percepção muito mais profissional.'
  },
  {
    title: 'Mais confiança para novos clientes',
    description:
      'Quando a marca se apresenta com mais força, organização e acabamento, o cliente sente mais segurança para entrar em contato.'
  },
  {
    title: 'Agendamento direto pelo WhatsApp',
    description:
      'Contato rápido, simples e objetivo para facilitar a conversão e transformar interesse em agendamento com menos barreiras.'
  }
];

const experienceItems = [
  {
    number: '01',
    title: 'Imagem forte desde o primeiro contato',
    description:
      'Uma barbearia premium precisa ser percebida como premium antes mesmo do atendimento começar.'
  },
  {
    number: '02',
    title: 'Ambiente, atendimento e acabamento',
    description:
      'Cada etapa da experiência precisa reforçar cuidado, presença e alto padrão visual.'
  },
  {
    number: '03',
    title: 'Agendamento simples e direto',
    description:
      'Estrutura pensada para facilitar o contato e acelerar a decisão do cliente.'
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
            <span className="badge">Barbearia premium para quem valoriza presença</span>

            <h1>Seu visual merece mais do que um corte. Merece presença.</h1>

            <p className="hero-lead">
              A Barbearia Monarch foi pensada para entregar uma experiência de alto padrão, unindo
              técnica, estilo, ambiente sofisticado e um atendimento que valoriza sua imagem em cada
              detalhe.
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
                <strong>Imagem premium</strong>
                <span>Mais impacto para a marca e para a percepção do cliente</span>
              </div>
              <div className="hero-stat">
                <strong>Mais confiança</strong>
                <span>Estrutura profissional que transmite cuidado e padrão elevado</span>
              </div>
              <div className="hero-stat">
                <strong>Contato direto</strong>
                <span>Agendamento rápido pelo WhatsApp para facilitar a conversão</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <span className="section-tag">Site profissional criado para barbearias</span>
            <h3>Feito para atrair mais clientes e facilitar o agendamento.</h3>
            <p>
              Uma apresentação digital premium que valoriza a marca, reforça o posicionamento da
              barbearia e transforma interesse em contato real.
            </p>

            <div className="hero-card-list">
              <div>
                <span>01</span>
                <p>Presença visual forte para destacar o negócio logo no primeiro contato</p>
              </div>
              <div>
                <span>02</span>
                <p>Mais confiança para novos clientes através de uma estrutura profissional</p>
              </div>
              <div>
                <span>03</span>
                <p>WhatsApp em destaque para reduzir barreiras e gerar mais agendamentos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-heading center">
            <span className="section-tag">Destaque</span>
            <h2>
              Site profissional criado para barbearias que querem atrair mais clientes e facilitar o
              agendamento.
            </h2>
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
            <h2>Mais do que atendimento. Uma experiência pensada para impressionar.</h2>
            <p>
              Na Barbearia Monarch, cada detalhe foi pensado para entregar um padrão superior de
              experiência. Unimos técnica, presença visual e um ambiente sofisticado para valorizar
              a imagem de quem busca mais do que o básico.
            </p>
            <p>
              Do primeiro contato ao acabamento final, tudo foi construído para transmitir cuidado,
              confiança e uma percepção clara de qualidade em cada visita.
            </p>
          </div>

          <div className="highlight-card">
            <h3>O que define a experiência Monarch</h3>
            <ul>
              <li>Atendimento com horário agendado</li>
              <li>Ambiente elegante e confortável</li>
              <li>Equipe focada em excelência</li>
              <li>Visual alinhado com seu estilo e presença</li>
              <li>Experiência premium do início ao fim</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Padrão Monarch</span>
            <h2>Um padrão pensado para fortalecer imagem, confiança e percepção de valor.</h2>
          </div>

          <div className="grid cards-grid">
            {experienceItems.map((item) => (
              <article className="card" key={item.number}>
                <div className="card-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="servicos">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Serviços</span>
            <h2>Serviços premium para quem exige presença, estilo e acabamento.</h2>
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

      <section className="section alt">
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

      <section className="section" id="galeria">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Galeria</span>
            <h2>Um ambiente que combina estilo, conforto e sofisticação.</h2>
            <p>
              Um espaço pensado para reforçar a experiência, transmitir qualidade e valorizar cada
              detalhe da marca.
            </p>
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

      <section className="section alt">
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
          <h2>Agende seu horário e viva o padrão Monarch.</h2>
          <p>
            Eleve seu visual com um atendimento premium, ambiente sofisticado e acabamento de alto
            nível. Fale agora pelo WhatsApp e reserve seu horário com facilidade.
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