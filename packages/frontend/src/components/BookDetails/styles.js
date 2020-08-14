import styled from 'styled-components';

export const Container = styled.div`
  background: var(--secondary-clr);
  box-shadow: -2px -3px 5px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  margin-left: 1rem;
  padding: 1rem;
  height: 100vh;
  > h4 {
    color: white;
    text-align: center;
  }
`;

export const DetailsCard = styled.div`
  color: var(--quaternary-clr);
  padding: 1rem;
`;

export const DetailsHeader = styled.div`
  p:nth-child(1) {
    text-decoration: underline;
    font-size: 1.8rem;
    letter-spacing: 0.3ch;
    text-transform: capitalize;
    margin-bottom: 0.8rem;
  }
  p:nth-child(2) {
    font-size: 1.5rem;
  }
  p:nth-child(3) {
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`;

export const ButtonContainer = styled.button`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  color: white;
  border: 1px solid var(--primary-clr);
  background: var(--primary-clr);
  float: right;
  cursor: pointer;
  &:hover {
    background: var(--primary-clr);
    filter: opacity(80%);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
    color: white;
  }
`;

export const DetailsBody = styled.div`
  margin-top: 1rem;
  color: var(--tertiary-clr);
  li {
    margin-left: 1rem;
  }
`;
