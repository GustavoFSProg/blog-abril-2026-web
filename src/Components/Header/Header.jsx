import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "75px",
        alignItems: "center",
        justifyContent: "center",
        background: "green",
        color: "yellow",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "70%",
          height: "75px",
          alignItems: "center",
          justifyContent: "space-between",
          background: "green",
          color: "yellow",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "yellow" }}>
          <h3>Home</h3>
        </Link>
        <h3>Cadastro</h3>
        <h3>Cadastro</h3>
        <h3>Cadastro</h3>
        <h3>Login</h3>
      </div>
    </div>
  );
}

export default Header;
