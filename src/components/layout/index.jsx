import classes from "./styles.module.css";
import MainHeader from "../features/MainHeader";

function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <div className={classes.container}>{children}</div>
    </>
  );
}

export default Layout;
