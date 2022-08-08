import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-between;
  width: 90%;
  max-width: 100%;

  .descHidden {
    margin: 10px auto;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
