import classes from "./styles.module.css";

function CrewContent() {
  return (
    <div className="content">
      <div className="info">
        <h3>Role Captain</h3>
        <h1 className={classes.test}>Douglas Hurley</h1>
        <p>descriptions</p>
        <div>options selector</div>
      </div>
      <img src="" alt="crew photo" />
    </div>
  );
}

export default CrewContent;
