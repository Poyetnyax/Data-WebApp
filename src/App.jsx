import "./App.css";
import Action from "./Components/Molecules/Action";

import Nav from "./Components/Organisms/Nav";

function App() {
  return (
    <>
      <div>
        <section className="nav-section">
          <Nav />
        </section>

        <section className="action-section">
          <Action />
        </section>
      </div>
    </>
  );
}

export default App;
