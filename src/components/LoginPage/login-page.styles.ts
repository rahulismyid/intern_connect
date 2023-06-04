import styled from "styled-components";

export const LoginContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginFormDiv = styled.form`
  width: 90%;
  max-width: 400px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  @media screen and (max-width: 480px) {
    padding: 15px;
  }
`;

export const LoginFormH2 = styled.div`
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const LoginFormGroupDiv = styled.div`
  margin-bottom: 15px;
  
  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  @media screen and (max-width: 480px) {
    input {
      padding: 6px;
    }
  }
`;

export const LoginButtonGroupDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    button {
      padding: 8px;
    }
  }

  button:hover {
    background-color: #45a049;
  }
`;
