import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContent = styled.div`
  margin: 0 auto;
  padding: 5px;

  border: 1px solid #d1dce3;
  border-radius: 5px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 70%;

  h3 {
    border-bottom: 1px solid var(--color-blue);
  }
`;

export const StyledAntecipation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
