import Logo from "./logo.png";
import "../navBar/index.css";
import iconeCarrinho from "../../img/iconeCarrinho.png";
import { ShoppingCartSimple } from "phosphor-react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {" "}
          <img src={Logo} width="150" height="90" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                A Unique
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Produtos
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Brincos
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Anéis
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Pulseiras
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <ShoppingCartSimple size={36} color="#C7AB94" />
    </nav>
  );
}

export default Nav;
