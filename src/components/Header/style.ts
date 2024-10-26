import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #000;
    height: 80px;
    padding: 20px;
    display: flex;
    align-items: center;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .center {
        display: flex;
        justify-content: center;
    }
    .menuMobile {
        display: none;
    }
    .rigth {
        display: flex;
        align-items: center;
        svg {
            margin-left: 31px;
            margin-right: 28px;
        }
    }

    @media (max-width: 980px) {
        height: 72px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        .menuMobile {
            display: none;
        }
        justify-content: space-around;
        flex-direction: column;

        .center {
            display: none;
            justify-content: center;
        }

        .rigth {
            display: flex;
            align-items: center;
            svg {
                margin-left: 0px;
                margin-right: 24px;
            }
        }
    }
`;
