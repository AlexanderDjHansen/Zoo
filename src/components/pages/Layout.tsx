import { Link, Outlet } from "react-router-dom"
import { Animal } from "./Animal"
import { Parent, StyledDiv } from "../styles/Parent"
import { IStyledDivProps } from "../styles/Parent"

export const Layout = () => {
    
    

    return (
        <>
        <StyledDiv color="" background="">
            <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/animals">Animals</Link></li>
        <li><Link to="/animal/:id">Animal</Link></li>
            </ul>
        </StyledDiv>
        <Outlet></Outlet>
        </>
    )
}