import styled from "styled-components";

export const CardVideoContainer = styled.a`
    width: 100%;
    outline: none;
    cursor: pointer;
    margin: 10px;
    color: #fff;

    .image {
        padding: 0 20px;
        position: relative;

        svg {
            position: absolute;
            z-index: 1;
            top: 10px;
            right: 30px;
        }

        img {
            width: 100%;
            height: 163px;
            object-fit: cover;
            object-position: top;
        }
    }

    .info {
        padding: 20px;

        .category {
            color: var(--Dark-Text-Secondary, rgba(255, 255, 255, 0.7));
            font-feature-settings: "liga" off, "clig" off;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 143%; /* 20.02px */
            letter-spacing: 0.17px;
        }

        .title {
            color: var(--Dark-Text-Primary, #fff);
            font-feature-settings: "liga" off, "clig" off;

            /* Typography/H7 */
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 140%; /* 25.2px */
        }
    }
`;
