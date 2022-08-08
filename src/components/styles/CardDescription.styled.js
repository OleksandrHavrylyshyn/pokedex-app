import styled from "styled-components";

export const StyledCardDescription = styled.section`
  border: 5px solid #ad0202;
  background-color: #dedfe0;
  border-radius: 16px;
  margin-top: 10px;
  height: 90%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 70%;
  }

  img {
    width: 150px;
    height: 150px;
  }

  h2 {
    margin: 0.5rem auto;
  }

  table {
    width: 80%;
    border: 3px solid #f09792;
    margin-bottom: 20px;
    border-radius: 16px;
  }

  table tbody td {
    text-align: left;
    border-left: 1px solid #f09792;
    border-right: 1px solid #f09792;
    width: 50%;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
  }
  table tbody tr td:first-child {
    border-left: none;
  }
  table tbody tr td:last-child {
    border-right: none;
  }
  table tbody tr:nth-child(even) {
    background: #f3f3f3;
  }
`;
