import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>React Router Tutorial</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cocktails">Cocktails</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
