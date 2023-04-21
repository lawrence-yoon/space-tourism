import Link from "next/link";
import Image from "next/image";
import classes from "./styles.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.linksList}>
          <li>
            <Link className={classes.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/destination">
              Destination
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/crew">
              Crew
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/technology">
              Technology
            </Link>
          </li>
        </ul>
        <Image
          src="/assets/shared/icon-hamburger.svg"
          alt="menu-icon"
          width={24}
          height={21}
        />
      </nav>
    </header>
  );
}

export default MainHeader;
