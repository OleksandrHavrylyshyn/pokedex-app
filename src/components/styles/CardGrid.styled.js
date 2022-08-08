import styled from "styled-components";

export const CardGrid = styled.section`
  width: 50%;
  display: grid;
  margin-top: 10px;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  button {
    grid-column: 1 / -1;
    border-radius: 16px;
    font-size: 1.3rem;
    border: none;
    color: #fcfcfc;
    background-color: #ad0202;
    padding: 5px;
    transition: 0.3s;
    margin-bottom: 10px;
  }

  button:hover {
    -webkit-box-shadow: 0px 0px 5px 5px rgba(173, 2, 2, 0.59);
    -moz-box-shadow: 0px 0px 5px 5px rgba(173, 2, 2, 0.59);
    box-shadow: 0px 0px 5px 5px rgba(173, 2, 2, 0.59);
    cursor: pointer;
  }
`;
