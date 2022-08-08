import styled from "styled-components";

export const StyledCard = styled.div`
  border: 3px solid #ad0202;
  border-radius: 16px;
  background-color: #dedfe0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  transition: 0.3s;

  &:hover, &:focus {
    -webkit-box-shadow: 0px 0px 5px 5px rgba(173, 2, 2, 0.59);
    -moz-box-shadow: 0px 0px 5px 5px rgba(173, 2, 2, 0.59);
    box-shadow: 0px 0px 5px 5px rgba(173, 2, 2, 0.59);
    cursor: pointer;
  }

  img {
    width: 86px;
    height: 86px;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0.2rem;
  }

  .types {
    display: flex;
    column-gap: 10px;
  }
`;
