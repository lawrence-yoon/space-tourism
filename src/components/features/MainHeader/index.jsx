import Link from "next/link";
import classes from "./styles.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">HomeLogo</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/home">home</Link>
          </li>
          <li>
            <Link href="/destination">destination</Link>
          </li>
          <li>
            <Link href="/crew">crew</Link>
          </li>
          <li>
            <Link href="/technology">technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
