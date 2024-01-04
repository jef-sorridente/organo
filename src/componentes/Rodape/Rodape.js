import "./Rodape.css";

export const Rodape = () => {
  return (
    <footer className="rodape">
      <section className="redes">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <img src="\img\fb.png" alt="logo facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <img src="\img\tw.png" alt="logo twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src="\img\ig.png" alt="logo instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="\img\logo.png" alt="logo organo" className="logo" />
      </section>
      <section>
        <p>Desenvolvido por Alura</p>
      </section>
    </footer>
  );
};
