import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>Gundla Gårdscafé</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
