import styled from "styled-components";


export const NavbarContainer = styled.div`
    width: 100%;
    height: 13vh;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: black;
    `;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-family: lucida sans;
    font-size: 1.8rem;
    color: #ebc88b;
    width: 100%;

    .logoText{
        text-decoration: none;
        color: white;
        font-family: 'Annie Use Your Telescope', cursive;
        font-size: 2rem;
        letter-spacing: 3px;
    }
    
    @media screen and (max-width: 968px){
        padding-left: 20px;
        font-size: 1.5rem;
    }
    `;


export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 968px){
        justify-content: flex-end;
        margin-right: 1rem;
    }
`;


export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 968px){
        width: 89.7%;
        height: 125vh;
        position: absolute;
        align-items: flex-start;
        justify-content: center;
        top: 100px;
        left: ${({ click }) => (click ? 0 : "-111%")};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #1d363f;
    }
    `;

export const MenuItem = styled.li`
    display: flex;
    width: auto;
    height: auto;
    padding: 0.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: "Oswald";
    font-weight: 400;
    cursor: pointer;
    
    
    @media screen and (max-width: 968px){
        width: 80%;
        height: 100px;
        position: relative;
        justify-content: center;
        align-items: center;

        bottom: 170px;
        &:hover{
            border-bottom: none
        }
    }
    `;

export const MenuItemLink = styled.div`
    color: #ebc08b;
    font-size: 1.5rem;
    width: 100%;

    .navLink{
        font-family: Alegreya sans sc;
        text-decoration: none;
        color: white;
        font-size: 30px;
    }


    @media screen and (max-width: 968px){ 
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .navLink{
            font-size: 2.0rem;
        }
    }
`;

export const IconLogoMovile = styled.div`
    display: none;

    @media screen and (max-width: 968px){
        display: flex;
        color: #ebebeb;
        font-size: 2rem;
        padding-right: 15px;
        img{
            width: 50px;
        }
    }
`;