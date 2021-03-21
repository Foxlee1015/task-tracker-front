import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/main">Main</Link>
      </header>
    );
  }
  
  export default Header;
  