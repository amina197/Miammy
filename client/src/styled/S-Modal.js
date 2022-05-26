import styled from 'styled-components';

export const ModalWrapper = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100vh;

  background-color: rgba(51, 51, 51, .68);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 35%;
  height: 60vh;

  background-color: #fff;
  border-radius: 10px;

  h6 {
    font-family: var(--heading-font);
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--accent-color);
  }
`;
