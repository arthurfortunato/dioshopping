import styled from 'styled-components';

export const ContainerStyled = styled.main`
    width: 100%;  
    height: 60px;
    margin-bottom: 50px;
`

export const WrapperStyled = styled.div`    
    background: #5a2d82;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
`


export const LogoStyled = styled.div`
    font-size: 2.4rem;
    font-weight: 700;
    background: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const ContatoButtonStyled = styled.div`
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
        background-color: #f2f2f2;
        color: #000;
    }
`

export const HomeButtonStyled = styled.div`
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
        background-color: #f2f2f2;
        color: #000;
    }
`