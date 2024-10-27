import styled from "styled-components";

export const VideoContainer = styled.div`
    video {
        width: 100%;
        max-height: 600px;
        height: 100%;
        overflow: hidden;
    }

    .title {
        margin-top: 32px;
        color: var(--Dark-Text-Primary, #fff);
        font-feature-settings: "liga" off, "clig" off;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 133.4%; /* 32.016px */
        @media (max-width: 980px) {
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
        }
    }

    .line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;

        @media (max-width: 980px) {
            flex-direction: column;
            .left {
                .tagCategory {
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 160%;
                }
            }
        }

        .left {
            display: flex;
            align-items: center;
            gap: 8px;

            .tagCategory {
                border-radius: 16px;
                background: #1e1e1e;
                color: var(--Light-Primary-Contrast, #fff);
                font-feature-settings: "liga" off, "clig" off;
                font-family: "Nunito Sans";
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px;
                display: flex;
                padding: 3px 10px;
                align-items: center;
                width: fit-content;
            }

            .date {
                color: var(--Dark-Text-Secondary, rgba(255, 255, 255, 0.7));
                font-feature-settings: "liga" off, "clig" off;
                font-family: "Nunito Sans";
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px; /* 138.462% */
            }

            button {
                display: flex;
                align-items: center;
                color: var(--Dark-Text-Primary, #fff);
                font-feature-settings: "liga" off, "clig" off;
                font-family: "Nunito Sans";
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 26px; /* 162.5% */
                gap: 8px;
                margin-left: 11px;
            }
        }
        hr {
            display: none;
            @media (max-width: 980px) {
                display: block;
                width: 100%;
                margin: 24px 0;
            }
        }
        .right {
            display: flex;
            align-items: center;
            gap: 8px;
            @media (max-width: 980px) {
                justify-content: space-between;
                width: 100%;
            }
            button {
                display: flex;
                align-items: center;
                color: var(--Dark-Text-Primary, #fff);
                font-feature-settings: "liga" off, "clig" off;
                font-family: "Nunito Sans";
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 26px; /* 162.5% */
                gap: 8px;
                margin-left: 11px;
            }
        }
    }

    .resumo {
        display: flex;
        flex-direction: column;
        gap: 24px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12); /* Corrigido o erro de sintaxe */
        margin-top: 24px;
        padding-bottom: 24px;
        p {
            color: var(--Dark-Text-Secondary, rgba(255, 255, 255, 0.7));
            font-feature-settings: "liga" off, "clig" off;
            font-family: "Nunito Sans";
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 133.4%;
        }

        span {
            color: var(--Dark-Text-Secondary, rgba(255, 255, 255, 0.7));
            font-feature-settings: "liga" off, "clig" off;
            font-family: "Nunito Sans";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
        }
    }
    .conteudo {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 60px 0;

        p {
            color: var(--Dark-Text-Secondary, rgba(255, 255, 255, 0.7));
            font-feature-settings: "liga" off, "clig" off;
            font-family: "Nunito Sans";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
        }

        .subTitle {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%;
        }

        .subTitle2 {
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 133.4%;
        }

        button {
            border-radius: 8px;
            border: 1px solid
                var(--Dark-Text-Primary-Shades-30p, rgba(255, 255, 255, 0.3));
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 11px 22px;
            gap: 8px;
            color: var(--Dark-Text-Secondary, rgba(255, 255, 255, 0.7));
            font-feature-settings: "liga" off, "clig" off;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 26px;
            width: fit-content;
        }
    }
    .stats {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
        font-family: "Nunito Sans", sans-serif;
        font-size: 1rem;
        color: #ffffff;
    }

    .stats .views,
    .stats .likes {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .line .likeButton {
        color: #00b894;
    }

    .line .fav {
        color: #d63031;
        &.desk {
            display: flex;
        }
        &.mob {
            display: none;
        }

        @media (max-width: 980px) {
            &.desk {
                display: none;
            }
            &.mob {
                display: flex;
            }
            span {
                display: none;
            }
        }
    }
`;
