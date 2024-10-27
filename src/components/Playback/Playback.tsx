import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlaybackContainer } from "./style";
import CardVideo from "@/components/CardVideo/CardVideo";
import { useRef } from "react";
import arrowLeft from "@/assets/arrow-left.svg";
import arrowRigth from "@/assets/arrow-rigth.svg";

interface Video {
    id: string;
    title: string;
    category: number;
    hls_path: string;
    description: string;
    thumbnail: string;
}

interface Category {
    id: string;
    title: string;
    site_id: number;
}

interface PlaybackProps {
    videos: Video[];
    categories: Category[];
    titlePage: string;
}

export default function Playback({ videos, categories, titlePage }: PlaybackProps) {
    const sliderRef = useRef<Slider>(null);

    const count = videos.length <= 5 ? false : true;

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <PlaybackContainer>
            <div className="container line">
                <p className="titlePage">{titlePage}</p>
                <div className="more">
                    <p className="more">Veja mais</p>
                    {count &&
                    <div className="carousel-controls">
                        <button
                            onClick={handlePrev}
                            className="carousel-button"
                        >
                            <img
                                src={arrowLeft}
                                alt=""
                            />
                        </button>
                        <button
                            onClick={handleNext}
                            className="carousel-button"
                        >
                            <img
                                src={arrowRigth}
                                alt=""
                            />
                        </button>
                    </div> }
                </div>
            </div>
            <Slider
                ref={sliderRef}
                {...settings}
            >
                {videos.map((video) => (
                    <CardVideo
                        key={video.id}
                        videoID={video.id}
                        videoTitle={video.title}
                        videoThumbnail={video.thumbnail}
                        categoryId={video.category}
                        categories={categories}
                    />
                ))}
            </Slider>
        </PlaybackContainer>
    );
}
