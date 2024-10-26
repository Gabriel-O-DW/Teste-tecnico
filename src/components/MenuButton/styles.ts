import styled from "styled-components";

export const MenuButtonContainer = styled.div`
    padding: 6px 16px;
    font-style: capitalize;

    button {
        color: #fff;
        font-size: 16px;
        font-family: "Inter", sans-serif;
        font-weight: regular;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        img{
            padding-left:10px;
        }
    }
        @media (max-width: 1110px) {
         padding: 6px 5px;
        font-size: 14px;

        img{
            padding-left:4px;
        }
    }
`;
