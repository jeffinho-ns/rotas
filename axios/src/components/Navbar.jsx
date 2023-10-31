import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
<h2>
   <Link to={`/`}>Jefferson</Link>
</h2>
<ul>
    <li>
        <Link to={`/`}>Home</Link>
    </li>
    <li>
        <Link to={`/sobre`} className="newbtn">Sobre</Link>
    </li>
    <li>
        <Link to={`/new`} className="newbtn">Novo Post</Link>
    </li>
</ul>
    </div>
  )
}

export default Navbar