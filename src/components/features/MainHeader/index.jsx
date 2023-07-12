import Link from "next/link";
import Image from "next/image";
import classes from "./styles.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function MainHeader() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [linkIndex, setLinkIndex] = useState(0);
  const [linkIndexHover, setLinkIndexHover] = useState(null);

  function handleMenuOpen() {
    setIsMenuActive(true);
  }
  function handleMenuClose() {
    setIsMenuActive(false);
  }

  const pathName = usePathname();
  function pathIndex(path) {
    const pathString = path.replace("/", "");

    return pathString;
    // switch (pathString) {
    //   case "":
    //     return 0;
    //   case "destination":
    //     return 1;
    //   case "crew":
    //     return 2;
    //   case "technology":
    //     return 3;
    // }
  }
  // const pathIndex =

  useEffect(() => {
    // setLinkIndex(pathIndex)
    // console.log(pathIndex(pathName));
    switch (pathIndex(pathName)) {
      case "":
        setLinkIndex(0);
        // console.log("we are at ROOT");
        break;
      case "destination":
        setLinkIndex(1);
        // console.log("we are at DESTINATION");
        break;
      case "crew":
        setLinkIndex(2);
        // console.log("we are at CREW");
        break;
      case "technology":
        setLinkIndex(3);
        // console.log("we are at technology");
        break;
    }
  });

  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <Link href="/">
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            className={classes.logo}
            fill
          />
        </Link>
      </div>
      <hr className={classes.headerHR} />
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
                  {/* this is where the navbar bar will possibly go... of course this would apply to all 4 buttons on this nav. will need to have state of route is active...*/}
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
        <hr className={classes.navHR} />
        <ul className={classes.linksList}>
          <li>
            <Link
              key="0"
              className={classes.link}
              onMouseOver={() => setLinkIndexHover(0)}
              onMouseOut={() => setLinkIndexHover(null)}
              href="/"
            >
              <span className={classes.linkIndex}>00</span> HOME
              {0 == linkIndex ? (
                <div className={classes.linkIndexBar}></div>
              ) : null}
              {linkIndexHover == 0 ? (
                <div className={classes.linkIndexBarHover}></div>
              ) : null}
            </Link>
          </li>
          <li>
            <Link
              key="1"
              className={classes.link}
              onMouseOver={() => setLinkIndexHover(1)}
              onMouseOut={() => setLinkIndexHover(null)}
              href="/destination"
            >
              <span className={classes.linkIndex}>01</span> DESTINATION
              {1 == linkIndex ? (
                <div className={classes.linkIndexBar}></div>
              ) : null}
              {linkIndexHover == 1 ? (
                <div className={classes.linkIndexBarHover}></div>
              ) : null}
            </Link>
          </li>
          <li>
            <Link
              key="2"
              className={classes.link}
              onMouseOver={() => setLinkIndexHover(2)}
              onMouseOut={() => setLinkIndexHover(null)}
              href="/crew"
            >
              <span className={classes.linkIndex}>02</span> CREW{" "}
              {2 == linkIndex ? (
                <div className={classes.linkIndexBar}></div>
              ) : null}
              {linkIndexHover == 2 ? (
                <div className={classes.linkIndexBarHover}></div>
              ) : null}
            </Link>
          </li>
          <li>
            <Link
              key="3"
              className={classes.link}
              onMouseOver={() => setLinkIndexHover(3)}
              onMouseOut={() => setLinkIndexHover(null)}
              href="/technology"
            >
              <span className={classes.linkIndex}>03</span> TECHNOLOGY
              {3 == linkIndex ? (
                <div className={classes.linkIndexBar}></div>
              ) : null}
              {linkIndexHover == 3 ? (
                <div className={classes.linkIndexBarHover}></div>
              ) : null}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
