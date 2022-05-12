import { Link, Outlet } from "react-router-dom"

import { StyledDiv } from "../styles/Parent"
import "./../styles/Layout.css"

export const Layout = () => {
    
    return (
        <>
            <nav>
                <ul>
               <StyledDiv color="" background="">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/animals">Animals</Link></li>
                </StyledDiv>
                </ul>
            </nav>
        <Outlet></Outlet>
       
      
        </>
    )
}