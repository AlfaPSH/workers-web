import { perfil, proyectos, enlaces } from "./data.js";

export default function App() {
  return (
    <div className="pagina">
      <header className="cabecera">
        <div className="presentacion">
          <h1>{perfil.titular}</h1>
          <p className="bio">{perfil.bio}</p>
        </div>
        <img className="foto" src={perfil.foto} alt={perfil.fotoAlt} width="240" height="300" />
      </header>

      <main>
        <section aria-labelledby="proyectos">
          <h2 id="proyectos">Proyectos</h2>
          <ul className="lista-proyectos">
            {proyectos.map((p) => (
              <li key={p.titulo}>
                <a href={p.enlace} target="_blank" rel="noreferrer noopener" className="proyecto">
                  <span className="proyecto-titulo">{p.titulo}</span>
                  <span className="proyecto-desc">{p.descripcion}</span>
                  <span className="etiquetas">{p.etiquetas.join(", ")}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="enlaces">
          <h2 id="enlaces">Dónde encontrarme</h2>
          <ul className="lista-enlaces">
            {enlaces.map((e) => (
              <li key={e.nombre}>
                <a href={e.url} target="_blank" rel="noreferrer noopener">
                  {e.nombre}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="pie">© {new Date().getFullYear()} {perfil.nombre}</footer>
    </div>
  );
}
