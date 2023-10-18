import Logo from "./img/logo.png";
import "./App.css";
import NavDropdown from "./componentes/navBar";

function App() {
  return (
    <div className="App" class="d-flex row">
      <header className="App-header">
        <img src={Logo} className="app-logo" alt="logo"></img>
        <NavDropdown />
      </header>
    </div>
  );
}
export default App;
