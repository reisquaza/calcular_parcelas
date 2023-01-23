import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input {
    border-radius: 5px;
    border: 1px solid #dde6e9;

    padding: 10px;
  }

  input:focus {
    border: 1px solid #66afe9;
  }
`;

export default StyledInput;
