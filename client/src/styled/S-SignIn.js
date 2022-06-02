import styled from 'styled-components';

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 50%;

  input {
    padding: 5px 20px;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: var(--discreet-color);
    border-color: transparent;
    width: 100%;

    font-size: .7rem;
  }

  label {
    font-size: 1rem;
    font-family: var(--subheading-font);
    display: block;
    width: 100%;
    line-height: 1.2;
  }

  small {
    font-size: .7rem;
    font-family: var(--body-font);
    margin-top: 1.5rem;
  }

  p {
    font-family: var(--heading-font);
    font-size: 1rem;
    color: var(--negative-color);
    margin-bottom: .5rem;
    letter-spacing: .5px;
  }
`;

export const AccountContainer = styled.div`
  button {
    font-size: 1rem;
    border: 0;
    font-family: var(--heading-font);
    background-color: transparent;
    margin-left: 4px;
    transition: var(--btn-transition);
  }

  button:hover {
    cursor: pointer;
    color: var(--accent-color);
  }
`;

export const CTA = styled.button`
  background-color: transparent;
  border: var(--btn-border);
  border-radius: var(--btn-radius);
  font-family: var(--heading-font);
  padding: var(--btn-padding);
  margin: 1.5rem 0;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: var(--accent-color);
  }
`;
