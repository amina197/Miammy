import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5vh;
  padding: 5px 3%;

  button {
    border: var(--btn-border);
    padding: var(--btn-padding);
    font-family: var(--heading-font);
    border-radius: var(--btn-radius);
    background-color: var(--btn-bg);

    transition: var(--btn-transition);
  }

  button:hover {
    cursor: pointer;
    background-color: var(--accent-color);
    color: #fff;
  }
`;

export default SHeader;
