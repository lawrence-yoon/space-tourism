import classes from "./styles.module.css";
import MainHeader from "../features/MainHeader";

function Layout({ children }) {
  return (
    <div className={classes.container}>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
