import styled from 'styled-components';

export const ContainerStyled = styled.main`
    max-width: 600px;
    margin: 100px auto;

    h2 {
        font-size: 1.5rem;
        text-align: center;
        padding-bottom: 30px;
        color: #5a2d82;
    }
`
export const InputStyled = styled.input`
      width: 100%;
      height: 50px;
      padding-left: 16px;
      border-radius: 8px;
      border: 1px solid gray;
      background: #fff;
      margin-bottom: 16px;
      outline: 0;
      font: 400 0.9rem 'Roboto', sans-serif;

`
export const ButtonContainerStyled = styled.button`
  background: #5a2d82;
  border-radius: 8px;
  width: 100%;
  height: 60px;
  color: #fff;
  border: none;
  
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    filter: brightness(1.3);
  }
`