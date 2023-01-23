import styled from "styled-components";

const StyledForm = styled.form`
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 15px;

  button {
    width: 50%;
    padding: 5px;

    align-self: center;

    border: 1px solid #dde6e9;
    border-radius: 5px;
  }

  button:hover {
    background-color: var(--color-gray-4);
    border: 1px solid #66afe9;
  }
`;

export default StyledForm;
