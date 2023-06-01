import Head from "next/head";
import Image from "next/image";
import classes from "./styles.module.css";
import { useState } from "react";
import data from "../../../public/assets/data.json";

function Crew() {
  const [crewIndex, setCrewIndex] = useState(0);
  //state needed to render CrewContent with props passed in and nav functionality
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.content}>
        <article className={classes.textContainer}>
          <h2 className={classes.intro}>
            <span className={classes.dirIndex}>02</span>MEET YOUR CREW
          </h2>
          <div>
            <div className={classes.imageContainer}>
              <Image
                className={classes.image}
                src={data.crew[crewIndex].images.png.substring(1)}
                alt="logo"
                fill
              />
            </div>
            <hr className={classes.hRule} />
          </div>

          <div className={classes.navbarDestination}>
            {data.crew.map((entry, index) => (
              <button
                className={`${
                  index == crewIndex
                    ? classes.navbarDotsActive
                    : classes.navbarDots
                }`}
                key={index}
                onClick={() => setCrewIndex(index)}
              ></button>
            ))}
          </div>
          <div>
            <p className={classes.text}>
              {data.crew[crewIndex].role.toUpperCase()}
            </p>
            <h1 className={classes.title}>
              {data.crew[crewIndex].name.toUpperCase()}
            </h1>
          </div>
          <p className={classes.bio}>{data.crew[crewIndex].bio}</p>
        </article>
      </main>
    </>
  );
}

export default Crew;
