import Link from "next/link";
import Image from "next/image";
import classes from "./styles.module.css";
import { useState } from "react";

function MainHeader() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function handleMenuOpen() {
    setIsMenuActive(true);
  }
  function handleMenuClose() {
    setIsMenuActive(false);
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <Image
          src="/assets/shared/logo.svg"
          alt="logo"
          width={40}
          height={40}
        />
      </Link>

      {isMenuActive ? (
        <div onClick={() => setIsMenuActive(false)} className={classes.overlay}>
          <nav className={classes.navigationMobile}>
            <button className={classes.button} onClick={handleMenuClose}>
              <Image
                src="/assets/shared/icon-close.svg"
                alt="close-icon"
                width={20}
                height={20}
              />
            </button>
            <ul className={classes.linksList}>
              <li>
                <Link className={classes.link} href="/">
                  <span className={classes.linkIndex}>00</span> HOME
                </Link>
              </li>
              <li>
                <Link className={classes.link} href="/destination">
                  <span className={classes.linkIndex}>01</span> DESTINATION
                </Link>
              </li>
              <li>
                <Link className={classes.link} href="/crew">
                  <span className={classes.linkIndex}>02</span> CREW
                </Link>
              </li>
              <li>
                <Link className={classes.link} href="/technology">
                  <span className={classes.linkIndex}>03</span> TECHNOLOGY
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <button
          className={`${classes.button} ${classes.menu}`}
          onClick={handleMenuOpen}
        >
          <Image
            src="/assets/shared/icon-hamburger.svg"
            alt="menu-icon"
            width={24}
            height={21}
          />
        </button>
      )}
      <nav className={classes.navigation}>
        <ul className={classes.linksList}>
          <li>
            <Link className={classes.link} href="/">
              00 HOME
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/destination">
              01 DESTINATION
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/crew">
              02 CREW
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/technology">
              03 TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
