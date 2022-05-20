import styled from 'styled-components';

const SCategoriesContainer = styled.div`
  width: 70%;
  height: 260px;
  overflow-y: scroll;
  white-space: no-wrap;

  display: flex;
  margin-bottom: 10rem;

  li {
    display: inline-block;
    width: 107%;
    padding: 10px;
    margin-bottom: 5px;
    border: 0.7px solid #9BB542;
    border-radius: 30px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.03);
    text-align: center;
    text-transform: uppercase;
  }

  li:hover {
    background-color: #9BB542;
    color: #fff;
    cursor: pointer;
  }
`;

export default SCategoriesContainer;
