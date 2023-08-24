import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <h1>Scholar's Shadows</h1>
        </header>

        <Form />
        <br />
        <br />
        <footer>
          <p>
            {" "}
            Coded by Rusanne Visagie{" "}
            <a
              href="https://github.com/Roz18/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced on Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
