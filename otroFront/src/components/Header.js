import "../assets/css/header.css"
import logo from "../assets/img/Logo_coffea_sinFondo.png"
function Header() {
    return(
        <header>
    <div id="logo">
        <img  src={logo} alt="Logo Coffea Shop"/>
    </div>
    <div className="nombre">
        <p id="coffea">Coffea</p>
        <p id="shop">SHOP</p>
    </div>
    
            
</header>
    )
    
}
export default Header