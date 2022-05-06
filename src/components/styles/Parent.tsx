import styled from "styled-components";

export interface IStyledDivProps {
    color:string;
    background:string;
}

export const StyledDiv = styled.div`
color: ${(props:IStyledDivProps) => props.color || "white"};
background-color: ${(props: IStyledDivProps) => props.background};

margin: 1.5px;
border-radius: 5px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;

a {
    text-decoration: none; 
}

a:hover {
    color: green;
}

`

export function Parent(){
    return (<>
        <StyledDiv color="" background="blue">Hej</StyledDiv>
        <StyledDiv color="" background="red">Då</StyledDiv>
        </>
    )
}