import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #d45d45d7;
  color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :active {
    transform: scale(0.98);
  }
  :hover {
    background-color: #f3c631fd;
  }
`;
