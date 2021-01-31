import "./clock.css";
function Clock() {
  return (
    <section className="section">
      <p className="seconds"></p>
      <button onClick="startSession25()" type="button" className="button">
        25mins
      </button>
      <button onClick="startSession5()" type="button" className="button">
        5mins
      </button>
      <button onClick="startSession30()" type="button" className="button">
        30mins
      </button>
      <p className="inform"></p>
      <audio id="audio" src="audio1.mp3" preload="auto"></audio>
    </section>
  );
}

export default Clock;
