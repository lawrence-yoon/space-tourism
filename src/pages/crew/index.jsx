import CrewContent from "/src/components/features/CrewContent";

function Crew() {
  //state needed to render CrewContent with props passed in and nav functionality
  return (
    <div className="page">
      <nav>nav with crew active</nav>
      <h2>02 MEET YOUR CREW</h2>
      {/* pass in props to crewcontent */}
      <CrewContent />
    </div>
  );
}

export default Crew;
