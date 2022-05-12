import styled from "styled-components";

export interface IStyledDivProps {
    color:string;
    background:string;
}

export const StyledDiv = styled.div`
color: ${(props:IStyledDivProps) => props.color || "black"};
background-color: ${(props: IStyledDivProps) => props.background};
background-color: #0088ff42;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

list-style-type: none;
padding: 2rem;
gap: 4rem;
a:link {
    text-transform: uppercase;
}


a {
    text-decoration: none;
}

a:hover {
    color: #171e17;
}

`

export function Parent(){
    return (<>
       
        </>
    )
}