function NavDropdown() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
      <ul className="nav nav-tabs justify-content-evenly">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            A Unique
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Produtos
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Brincos
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Braceletes
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Anéis
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default NavDropdown;
