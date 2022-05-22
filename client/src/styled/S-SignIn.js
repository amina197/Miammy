import styled from 'styled-components';

export const SignInWrapper = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100vh;

  background-color: rgba(51, 51, 51, .68);
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 27%;
  height: 50vh;

  background-color: #fff;
  border-radius: 10px;

  h6 {
    font-family: coldsmith-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #506700;
  }
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  input {
    padding: 5px 50% 5px 10%;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: rgba(51, 51, 51, .13);
    border-color: transparent;

    font-size: .7rem;
  }

  button {
    width: 70%;
  }

  label {
    font-size: 1rem;
    font-family: "Trattatello", serif;
    display: block;
    width: 150%;
    line-height: 1.2;
  }

  small {
    font-size: .8rem;
    font-family: "Trattatello", serif;
    margin-top: 1.5rem;
  }
`;
