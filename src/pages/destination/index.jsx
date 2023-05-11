import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import data from "../../../public/assets/data.json";
import classes from "./styles.module.css";

function Destination() {
  const [destinationIndex, setDestinationIndex] = useState(0);
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Explore Space - Destination" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.content}>
        <article className={classes.container}>
          <h2 className={classes.intro}>
            <span className={classes.dirIndex}>01</span>PICK YOUR DESTINATION
          </h2>
          <Image
            className={classes.imageContainer}
            src={data.destinations[destinationIndex].images.png.substring(1)}
            alt="logo"
            width={170}
            height={170}
          />
          <div className={classes.navbarDestination}>
            {data.destinations.map((entry, index) => (
              <button
                key={index}
                className={classes.btnNav}
                onClick={() => setDestinationIndex(index)}
              >
                {entry.name.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={classes.textContainer}>
            <h1 className={classes.title}>
              {data.destinations[destinationIndex].name.toUpperCase()}
            </h1>
            <p className={classes.text}>
              {data.destinations[destinationIndex].description}
            </p>
          </div>
          <hr className={classes.hRule} />
          <div className={classes.detailsContainer}>
            <div className={classes.detailsPair}>
              <p className={classes.detailLabel}>AVG. DISTANCE</p>
              <p className={classes.details}>
                {data.destinations[destinationIndex].distance.toUpperCase()}
              </p>
            </div>
            <div className={classes.detailsPair}>
              <p className={classes.detailLabel}>EST. TRAVEL TIME</p>
              <p className={classes.details}>
                {data.destinations[destinationIndex].travel.toUpperCase()}
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default Destination;
