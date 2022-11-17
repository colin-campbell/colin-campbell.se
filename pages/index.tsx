import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colin Campbell</title>
        <meta name="description" content="Colin Campbell's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Colin Campbell
        </h1>

        <p className={styles.description}>
          This is my personal website, In progress
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/colin-campbell/pass-go" className={styles.card}>
            <h2>Pass-Go &rarr;</h2>
            <p>Share passwords and other secrets securely!</p>
          </a>

          <a href="https://github.com/colin-campbell/firestudio-catalina" className={styles.card}>
            <h2>Firestudio Catalina &rarr;</h2>
            <p>Run unsupported PreSonus FireStudio* on Mac OS</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://mastodon.scot/@steenhive"
          target="_blank"
          rel="me"
        >
          <span className={styles.logo}>
            <Image src="/mastodon.svg" alt="Mastodon logo"  width={32} height={32} />
          </span>
          {' '}@steenhive
        </a>
      </footer>
    </div>
  )
}
