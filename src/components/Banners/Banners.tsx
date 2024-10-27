import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerCarouselContainer } from "./style";
import { Play } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface Video {
    id: string;
    title: string;
    created_at: string;
    category: number;
    hls_path: string;
    description: string;
    thumbnail: string;
    site_id: number;
    views: number;
    likes: number;
}

interface BannerCarouselProps {
    videos: Video[];
    categoriesName: string;
}
export default function BannerCarousel({
    videos,
    categoriesName,
}: BannerCarouselProps) {
    const settings = {
        dots: true, // Exibe os pontos de navegação
        infinite: true, // Loop infinito
        speed: 500, // Velocidade da transição
        slidesToShow: 1, // Quantidade de slides visíveis
        slidesToScroll: 1, // Quantidade de slides que avançam por vez
        autoplay: true, // Ativa a reprodução automática
        autoplaySpeed: 5000, // Tempo em milissegundos entre as transições
        arrows: false, // Exibe setas de navegação
    };

    const truncateDescription = (description: string, wordLimit: number) => {
        const words = description.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..."
            : description;
    };

    return (
        <BannerCarouselContainer>
            <div className="container">
                <Slider {...settings}>
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="banner-slide"
                        >
                            <div className="banner-content">
                                <h2 className="category">{categoriesName}</h2>
                                <h4 className="title">
                                    {truncateDescription(video.title, 12)}
                                </h4>
                                <p>
                                    {truncateDescription(video.description, 14)}
                                </p>
                                <Link to={`/videos/${video.id}`}>
                                    <Play
                                        size={16}
                                        weight="bold"
                                    />
                                    Reproduzir agora
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </BannerCarouselContainer>
    );
}
