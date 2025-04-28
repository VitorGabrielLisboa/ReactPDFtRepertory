import { Footer } from "../Footer/Footer";
import styles from "./style.module.scss";
export const About = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Página About</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};
