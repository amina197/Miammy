import styled from 'styled-components';

export const SFavoritesWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  white-space: no-wrap;

  display: flex;
`;

export const SFavoritesContainer = styled.div`
  display: flex;
`;

export const SMealWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 170px;

  border: var(--btn-border);

  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0 0 0 .5 rgba(0, 0, 0, 0.05);
  padding: 0 1rem;

  h1 {
    text-transform: uppercase;
    text-align: center;
    color: var(--accent-color);
    font-family: var(--heading-font);
    font-weight: 400;
  }
`;
