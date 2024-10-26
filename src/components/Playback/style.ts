import styled from "styled-components";

export const PlaybackContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 60px 0;
    background: linear-gradient(90deg, #131313 0%, rgba(19, 19, 19, 0) 50%);

    .line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .titlePage {
            color: var(--Dark-Text-Primary, #fff);
            font-feature-settings: "liga" off, "clig" off;
            font-family: "Nunito Sans";
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 133.4%;
            padding: 2rem;
            @media (max-width: 768px) {
                font-size: 20px;
                font-weight: 600;
                padding: 2rem 1rem;
            }
        }
        .more {
            color: var(--Primria, #fff);
            font-feature-settings: "liga" off, "clig" off;
            font-family: "Nunito Sans";
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.15px;
            display: flex;
            align-items: center;
            @media (max-width: 768px) {
                color: var(--Light-Primary-Main, #ee3965);
                font-size: 13px;
                font-weight: 500;
                line-height: 22px;
                padding: 2rem 1rem;
            }
            .carousel-controls {
                margin-left: 30px;
                display: flex;
                align-items: center;
                gap: 24px;

                @media (max-width: 768px) {
                    display: none;
                }
            }
        }
    }
    .slick-arrow {
        position: absolute;
        top: 0;
        right: 0;

        &.slick-prev {
            right: 40px;
            left: initial;
        }
    }
`;
