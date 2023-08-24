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
            <a href="" target="_blank" rel="">
              Open-sourced on Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
