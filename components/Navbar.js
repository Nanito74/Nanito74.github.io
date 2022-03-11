import Link from "next/link";

//Creacion del componente de la barra de navegacion//

const Navbar = () => (

    <div id="navbar-container">
        <Link href="/">
        <a className ="btn-home" ><i className="fa fa-home home"></i></a>
        </Link>
        <a href="#aboutme" className="hide">About Me<i className="fa-solid fa-person"></i></a>
        <a href= "#repositories" className="hide"> Repositories<i className="fa-solid fa-code"></i></a>
        <a href="#contact" className="hide">Contact<i className="fa-solid fa-envelope"></i></a>
    </div>
    

);

export default Navbar;