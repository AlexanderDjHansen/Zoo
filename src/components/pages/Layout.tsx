import { Link, Outlet } from "react-router-dom";

import { StyledUl } from "../styles/StyledUl";
import "./../styles/Layout.css";

export const Layout = () => {
  return (
    <>
      <nav>
        <StyledUl>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
        </StyledUl>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
