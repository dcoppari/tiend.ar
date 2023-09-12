import { Link } from "react-router-dom";
import { CartWidget } from "../components/cartwidget";
import tiendarLogo from "../assets/tiendar.svg";

export function NavBar() {
  return (
    <header className="header static-top clearfix">
      <div className="col logo">
        <img src={tiendarLogo} alt="TIEND.ar" />
      </div>
      <nav className="col navbar">
        <Link to="/">Todos</Link>
        <Link to="/category/men">Hombres</Link>
        <Link to="/category/women">Mujeres</Link>
        <Link to="/category/jewelery">Joyería</Link>
        <Link to="/category/electronics">Electrónica</Link>
      </nav>
      <CartWidget />
    </header>
  );
}
