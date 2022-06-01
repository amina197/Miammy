import styled from 'styled-components';

export const AlertWrapper = styled.div`
  position: absolute;
  top: 10vh;
  right: 10px;
  min-width: 20%;
  max-width: 30%;
  min-height: 50px;
`;

export const AlertModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;
  padding: 5px 10px;
  background-color: #fff;
  box-shadow: 0.1 0.1 0.1 0.1 var(--discreet-color);

  opacity: ${({ op }) => op};
  transition: opacity 1s;

  small, button {
    color: ${({ bg }) => bg};
    font-family: var(--body-font);
    font-size: .7rem;
  }

  button {
    background-color: #fff;
    padding: 0 5px;
    border: 0;
  }
`;
