import { CartWidget } from "../components/cartwidget";
import tiendarLogo from "../assets/tiendar.svg";

export function NavBar() {
  return (
    <header>
      <div className="col logo">
        <img src={tiendarLogo} alt="TIEND.ar" />
      </div>
      <nav className="col navbar">
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </nav>
      <CartWidget />
    </header>
  );
}
