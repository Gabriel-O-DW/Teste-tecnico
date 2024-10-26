import styled from "styled-components";

export const BannerCarouselContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 97.67%);
    .banner-slide {
        height: 440px;
        position: relative;
        @media (max-width: 980px) {
            height: 440px;
        }
    }

    .banner-content {
        position: absolute;
        top: 100px;
        padding: 0 2rem;
        left: 0;
        right: 0;
        color: #fff;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        @media (max-width: 980px) {
            top: 10px;
            padding: 0 16px;
        }
        .category {
            color: var(--Dark-Text-Secondary, rgba(255, 255, 255, 0.7));
            font-feature-settings: "liga" off, "clig" off;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.15px;
        }

        .title {
            color: var(--Dark-Text-Primary, #fff);
            font-feature-settings: "liga" off, "clig" off;
            font-family: Inter;
            font-size: 34px;
            font-style: normal;
            font-weight: 500;
            line-height: 123.5%;
        }
        p {
            color: var(--Dark-Text-Secondary, rgba(255, 255, 255, 0.7));
            font-feature-settings: "liga" off, "clig" off;
            font-family: "Nunito Sans";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 175%;
            letter-spacing: 0.15px;
        }

        a {
            display: flex;
            padding: 11px 22px;
            align-items: center;
            gap: 8px;
            border-radius: 8px;
            background: var(--Primria, #fff);
            width: fit-content;
            color: #000;
            font-feature-settings: "liga" off, "clig" off;
            font-family: "Nunito Sans";
            font-size: 16px;
            font-style: normal;
            font-weight: bold;
            line-height: 26px;
            margin: 8px 0 32px;
        }
    }

    .slick-dots {
        position: absolute;
        bottom: 40px;
        z-index: 0;
        height: auto;
        left: 2rem;
        width: fit-content;
        @media (max-width: 980px) {
            bottom: 20px;
            left: 1rem;
        }
        li {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            width: 10px;
            height: 10px;
            position: relative;
            overflow: hidden;
            transition: background 0.5s ease;

            button {
                &:before {
                    display: none !important;
                }
            }

            &.slick-active {
                width: 48px;
                border-radius: 100px;
                background: rgba(255, 255, 255, 0.1); /* Fundo inicial */
                transition: all 0.5s;

                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    transition: width 6s ease;
                    transform-origin: left;
                    transform: scaleX(0);
                    animation: fillBar 6s forwards;
                }
            }
        }
    }

    @keyframes fillBar {
        from {
            transform: scaleX(0);
        }
        to {
            transform: scaleX(1);
        }
    }
`;
