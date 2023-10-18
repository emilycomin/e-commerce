function NavDropdown() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <ul class="nav nav-tabs justify-content-evenly">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          HOME
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
          data-bs-toggle="dropdown"
          href="#"
          role="button"
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
              Braceletes
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Anéis
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default NavDropdown;
