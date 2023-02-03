import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";
import style from "../../styles/about.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
        <>
        <Head>
            <title>AboutPage</title>
        </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        Get started by editing&nbsp;
                        <code className={styles.code}>pages/index.js</code>
                    </p>
                </div>

                <div>
                    <h1>
                        Ir a <Link href="/"><span className={style.tHome}>Home</span></Link>
                    </h1>
                    
                </div>

                <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Next JS <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            Tailwid CSS <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Comming Soon <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Nice <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              
            </p>
          </a>
        </div>
            </main>
        </>
    );
}
