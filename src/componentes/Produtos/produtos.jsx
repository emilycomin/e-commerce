import { toHaveDescription } from "@testing-library/jest-dom/matchers";
import "../../componentes/Produtos/produtos.css";
import anel from "../../img/Produtos/Anéis/Anel ouro branco.jpg";
import { useState } from "react";

// Produtos = [
//   {
//     image:
//     description:
//     valorProduto:
//   }
// ]

function Produtos() {
  function ClickAddProduto(contar) {
    const [prevCount, setPrevCount] = useState({ contar });
    const [trend, setTrend] = useState(null);
    if (prevCount !== contar) {
      setPrevCount(contar);
      setTrend(
        contar > prevCount ? "Adicionar ao carrinho" : "Excluir do carrinho"
      );
    }

    return (
      <div className="showProduto" onClick={ClickAddProduto}>
        <img src={anel} className=""></img>
        <div className="contentDescription">
          <p className="description"> Descrição do produto</p>
          <p className="valorProduto">Valor do produto</p>
          <p>
            {contar} produtos no carrinho {trend}
          </p>
          <button className="addCarrinho">Adicionar ao carrinho</button>
          <button className="exclCarrinho">Excluir do carrinho</button>
        </div>
      </div>
    );
  }
}

export default Produtos;
