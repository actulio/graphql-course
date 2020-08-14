import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(200px, 25%);

  & > div:first-child {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Controls = styled.div`
  display: flex;
`;

export const Loading = styled.div``;

export const List = styled.ul`
  h1 {
    color: var(--primary-clr);
    text-align: center;
    margin-bottom: 2rem;
  }
  li {
    color: var(--secondary-clr);
    display: inline-block;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 4px;
    border: 1px solid var(--secondary-clr);
    cursor: pointer;

    &:hover {
      background: var(--secondary-clr);
      filter: opacity(50%);
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
      color: white;
    }
  }
`;
