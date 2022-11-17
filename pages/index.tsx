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
        <link rel="me" href="https://mastodon.scot/@steenhive" />
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
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
