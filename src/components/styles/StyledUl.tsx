import styled from "styled-components";

export const StyledUl = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  list-style-type: none;
  gap: 4rem;

  a:link {
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    color: #03ddff;
  }
`;
