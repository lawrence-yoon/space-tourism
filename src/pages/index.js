import Head from "next/head";
import Link from "next/link";
import classes from "./styles.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Space Tourism - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main className={classes.content}>
        <div className={classes.textContainer}>
          <h2 className={classes.intro}>SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className={classes.title}>SPACE</h1>
          <p className={classes.text}>
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>

        <Link className={classes.button} href="/destination">
          EXPLORE
        </Link>
      </main>
    </>
  );
}
