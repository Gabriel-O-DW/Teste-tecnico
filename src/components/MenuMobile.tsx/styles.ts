import styled from "styled-components";

export const MenuMobileContainer = styled.div`
    button {
        background: transparent;
        border: none;
        outline: none;
    }
    display: none;
    @media (max-width: 980px) {
        display: flex;

        .drawer {
            background: #000;
            color: white;
            padding: 0 2rem 0 2rem;
            color: #fff;
            font-size: 16px;
            font-family: "Inter", sans-serif;
            font-weight: regular;
            text-transform: capitalize;
            button {
                justify-content: right;
            }

            ul {
                margin-bottom: 1rem;
                list-style-type: none;
                margin-left: 2rem;
            }
        }
    }
`;
