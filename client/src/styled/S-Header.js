import styled from 'styled-components';

const SHeader = styled.header`
  background-image: url(https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;

  h1 {
    font-size: 6rem;
    font-family: 'Pacifico', cursive;
  }
`;

export default SHeader;
