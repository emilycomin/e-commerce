import "./App.css";
import Nav from "./componentes/navBar";
import Produtos from "./componentes/Produtos/produtos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="productsContent">
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
      </div>
    </div>
  );
}
export default App;
