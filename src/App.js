import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="topic"> Weather App </h1>
        <Weather defaultCity="Paris" />

        <footer>
          This project was coded by{" "}
          <a
            href="https:/www.minenhlekubheka.com"
            target="_blank"
            rel="noreferrer"
          >
            Minenhle S. Kubheka
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/enhleekay4590/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
