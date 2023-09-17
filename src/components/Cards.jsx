import styles from "../css/page.module.css";
import { TituloClases } from "./Titulo";

export function Cards({ titulo, descripcion }) {
  return (
    <div className={styles.card}>
      <div className={styles.divTitleSection}>
        <TituloClases>{titulo}</TituloClases>
      </div>
      <div className={styles.description}>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
export function CardsImage({ titulo, url, footer }) {
  return (
    <div className={styles.containerCardImage}>
      <img
        src={"/assets/" + url}
        alt="Jeje"
        width={420}
        height={300}
        className={styles.cardImage}
      />
      <div className={styles.divTitleSection}>
        <TituloClases>{titulo}</TituloClases>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}
