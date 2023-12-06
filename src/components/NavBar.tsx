import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <button>
          <p>About</p>
        </button>
      </Link>
      <Link to={"/experience"}>
        <button>
          <p>Experience</p>
        </button>
      </Link>
      <Link to={"/tech"}>
        <button>
          <p>Tech Stack</p>
        </button>
      </Link>
      <Link to={"/projects"}>
        <button>
          <p>Projects</p>
        </button>
      </Link>
    </div>
  );
};
export default NavBar;
