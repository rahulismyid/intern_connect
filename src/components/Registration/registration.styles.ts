import styled from "styled-components";

export const RegistrationContainerDiv = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export const RegistrationHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const RegistrationFormGroupDiv = styled.div`
  margin-bottom: 1.5rem;
  display: contents;
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const RegistrationFormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const RegistrationFormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
  
export const RegistrationPasswordInputDiv = styled.div`
  position: relative;
`;

export const RegistrationPasswordInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 95%;
`;

export const RegistrationPasswordToggle = styled.i`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;

  &__visible {
    color: #007bff;
  }
`;

export const RegistrationFormButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0.4rem 0.8rem;
  }
`;
