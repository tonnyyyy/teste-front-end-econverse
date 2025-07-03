import "./styles.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <section className="newsletter" aria-label="Newsletter signup">
        <div className="newsletter-text">
          <h2 className="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p className="newsletter-desc">
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <div id="newsletter-fields">
          <form className="newsletter-form">
            <input
              type="text"
              placeholder="Digite seu nome"
              className="newsletter-input"
              required
              aria-label="Digite seu nome"
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="newsletter-input"
              required
              aria-label="Digite seu e-mail"
            />
            <button
              type="submit"
              className="newsletter-button"
              aria-label="Inscrever"
            >
              INSCREVER
            </button>
          </form>
          <div className="newsletter-terms">
            <input
              type="checkbox"
              id="terms"
              className="newsletter-checkbox"
              aria-required="true"
            />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </div>
      </section>

      <footer className="footer" aria-label="Rodapé do site">
        <div className="footer-left">
          <a href="#" className="footer-logo-link" aria-label="Página inicial">
            <span className="footer-logo-text">Econverse</span>
          </a>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="footer-socials" role="list">
            <a href="#" aria-label="Instagram" role="listitem">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" aria-label="Facebook" role="listitem">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="#" aria-label="LinkedIn" role="listitem">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="footer-divider" aria-hidden="true"></div>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <div className="footer-nav-column">
            <h3 className="footer-nav-title">Institucional</h3>
            <a href="#" className="footer-nav-link">
              Sobre Nós
            </a>
            <a href="#" className="footer-nav-link">
              Movimento
            </a>
            <a href="#" className="footer-nav-link">
              Trabalhe conosco
            </a>
          </div>
          <div className="footer-nav-column">
            <h3 className="footer-nav-title">Ajuda</h3>
            <a href="#" className="footer-nav-link">
              Suporte
            </a>
            <a href="#" className="footer-nav-link">
              Fale Conosco
            </a>
            <a href="#" className="footer-nav-link">
              Perguntas Frequentes
            </a>
          </div>
          <div className="footer-nav-column">
            <h3 className="footer-nav-title">Termos</h3>
            <a href="#" className="footer-nav-link">
              Termos e Condições
            </a>
            <a href="#" className="footer-nav-link">
              Política de Privacidade
            </a>
            <a href="#" className="footer-nav-link">
              Troca e Devolução
            </a>
          </div>
        </nav>
      </footer>

      <div className="copyright-bar" aria-label="Direitos autorais">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

export default Footer;
