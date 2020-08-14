import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4rem 1rem;
`;
export const InputContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--secondary-clr);
  label {
    margin-right: 1rem;
  }
  input {
    outline-color: var(--secondary-clr);
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 8px 12px;
    color: #6c6c80;
  }

  input::placeholder {
    color: #a0a0b2;
  }
`;

export const ButtonContainer = styled.button`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  color: var(--secondary-clr);
  border: 1px solid var(--secondary-clr);
  background: white;
  float: right;
  cursor: pointer;
  &:hover {
    background: var(--secondary-clr);
    filter: opacity(50%);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
    color: white;
  }
`;

export const ContainerLabel = styled.div`
  font-size: 1.2rem;
  color: var(--primary-clr);
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--primary-clr);
  text-align: center;
`;
