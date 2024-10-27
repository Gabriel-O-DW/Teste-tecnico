import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosClient } from "@/services/axiosClient";
import VideoLayout from "@/layout/VideoLayout";
import ReactPlayer from "react-player";
import { VideoContainer } from "./style";
import fav from "@/assets/favor.svg";
import compartilhar from "@/assets/compartilhar.svg";
import cloud_download from "@/assets/cloud_download.svg";
import Playback from "@/components/Playback/Playback";
import { Eye, ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
interface Video {
    id: string;
    title: string;
    description: string;
    hls_path: string;
    thumbnail: string;
    category: number;
    created_at: string;
    views: number;
    likes: number;
}

interface Categories {
    id: string;
    title: string;
    site_id: number;
}

export default function VideoPage() {
    const { id } = useParams<{ id: string }>();
    const [video, setVideo] = useState<Video | null>(null);
    const [categories, setCategories] = useState<Categories[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axiosClient.get(`/videos/${id}`);
                const updatedVideo = response.data;

                updatedVideo.views += 1;
                await axiosClient.patch(`/videos/${id}`, {
                    views: updatedVideo.views,
                });

                setVideo(updatedVideo);
            } catch (error) {
                console.error("Erro ao buscar o vídeo:", error);
            }
        };
        if (id) fetchVideo();
    }, [id]);

    const toggleLike = async () => {
        if (video) {
            try {
                const updatedLikes = isLiked ? video.likes - 1 : video.likes + 1;
                await axiosClient.patch(`/videos/${video.id}`, {
                    likes: updatedLikes,
                });
                setVideo((prevVideo) =>
                    prevVideo ? { ...prevVideo, likes: updatedLikes } : prevVideo
                );
                setIsLiked(!isLiked);
                if (isDisliked) setIsDisliked(false); // Desativa o dislike se estiver ativo
            } catch (error) {
                console.error("Erro ao atualizar likes:", error);
            }
        }
    };

    const toggleDislike = async () => {
        if (video) {
            try {
                if (isDisliked) {
                    // Se o dislike estiver ativo, basta desativá-lo
                    setIsDisliked(false);
                } else {
                    // Ativa o dislike e desativa o like se ativo
                    if (isLiked) {
                        const updatedLikes = video.likes - 1;
                        await axiosClient.patch(`/videos/${video.id}`, {
                            likes: updatedLikes,
                        });
                        setVideo((prevVideo) =>
                            prevVideo ? { ...prevVideo, likes: updatedLikes } : prevVideo
                        );
                        setIsLiked(false);
                    }
                    setIsDisliked(true);
                }
            } catch (error) {
                console.error("Erro ao atualizar dislike:", error);
            }
        }
    };

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axiosClient.get("/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        };
        getCategories();
    }, []);

    useEffect(() => {
        const getVideos = async () => {
            if (video?.category) {
                try {
                    const response = await axiosClient.get("/videos");
                    const filteredVideos = response.data.filter(
                        (v: Video) =>
                            v.category === video.category && v.id !== video.id
                    );
                    setVideos(filteredVideos);
                } catch (error) {
                    console.error("Erro ao buscar vídeos relacionados:", error);
                }
            }
        };
        getVideos();
    }, [video]);

    const categoryName = categories.find(
        (category) => Number(category.id) === video?.category
    )?.title;

    if (!video) return <p>Carregando...</p>;

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("pt-BR");
        const formattedTime = date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return `${formattedDate}, ${formattedTime}`;
    }

    const copyLink = async () => {
        if (video) {
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copiado para a área de transferência!");
            } catch (error) {
                console.error("Erro ao copiar o link:", error);
            }
        }
    };

    return (
        <VideoLayout>
            <VideoContainer>
                <ReactPlayer
                    url={video.hls_path}
                    playing={false}
                    className="video"
                    controls={true}
                    width="100%"
                    height="600px"
                    config={{
                        file: {
                            attributes: {
                                poster: video.thumbnail,
                            },
                            forceHLS: true,
                        },
                    }}
                />
                <div className="container">
                    <h1 className="title">{video.title}</h1>
                    <div className="stats">
                        <span className="views">
                            <Eye size={20} /> {video?.views} Visualizações
                        </span>
                        <span className="likes">
                            <ThumbsUp size={20} /> {video?.likes} Likes
                        </span>
                    </div>
                    <div className="line">
                        <div className="left">
                            <span className="tagCategory">{categoryName}</span>
                            <span className="date">
                                {formatDate(video.created_at)}
                            </span>
                            <button className="fav desk">
                                <img
                                    src={fav}
                                    alt="icone de favorito"
                                />
                                Adicionar à minha lista
                            </button>
                            <button className="fav mob">
                                <img
                                    src={fav}
                                    alt="icone de favorito"
                                />
                                Minha lista
                            </button>
                        </div>
                        <hr />
                        <div className="right">
                            <button
                                className="fav likeButton"
                                onClick={toggleLike}
                            >
                                <ThumbsUp
                                    size={32}
                                    weight={isLiked ? "fill" : "regular"}
                                />
                                Gostei
                            </button>
                            <button
                                className="fav"
                                onClick={toggleDislike}
                            >
                                <ThumbsDown
                                    size={32}
                                    weight={isDisliked ? "fill" : "regular"}
                                />
                                <span>Não é pra mim</span>
                            </button>
                            <button
                                className="fav"
                                onClick={copyLink}
                            >
                                <img
                                    src={compartilhar}
                                    alt="icone de compartilhar"
                                />
                                Compartilhar
                            </button>
                        </div>
                    </div>
                    <div className="resumo">
                        <p>Resumo</p>
                        <span>{video.description}</span>
                    </div>
                    <div className="conteudo">
                        <p>
                            Para acrescentar vídeo ao conteúdo, é preciso que
                            ele esteja hospedado em uma plataforma que
                            disponibilize código embed. Nós da Netshow.me
                            disponibilizamos para você acesso a plataforma
                            Netshow.me Live, que permite upload de vídeo e
                            fornece{" "}
                            <span style={{ color: "#EE3965" }}>
                                código embed
                            </span>
                            .
                        </p>
                        <p>
                            Agora vamos te ensinar o passo a passo completo de
                            upload de vídeo na plataforma Netshow.me Live. E
                            passar pelos campos fundamentais a serem preenchidos
                            no momento da criação do conteúdo de vídeo na OTT.
                            Caso tenha optado pelo embed de outra plataforma,
                            pule para o título ”Como fazer colocar vídeo no
                            conteúdo”.{" "}
                        </p>
                        <p className="subTitle">Como fazer upload</p>{" "}
                        <p>
                            Ao acessar, selecione no menu superior a opção
                            Gerenciar vídeos, em seguida Criar vídeo. Para
                            começar o processo de upload, selecione a opção
                            Carregar vídeo. Ao abrir a janela de busca, localize
                            o arquivo e o selecione.
                        </p>
                        <p className="subTitle2">Arquivos complementares</p>
                        <button>
                            arquivo-do-curso-aula-3.pdf
                            <img
                                src={cloud_download}
                                alt="Download"
                            />
                        </button>
                        <button>
                            Prototipinho top
                            <img
                                src={cloud_download}
                                alt="Download"
                            />
                        </button>
                        <p className="subTitle2">Texto</p>
                        <p>
                            Para acrescentar vídeo ao conteúdo, é preciso que
                            ele esteja hospedado em uma plataforma que
                            disponibilize código embed. Nós da Netshow.me
                            disponibilizamos para você acesso a plataforma
                            Netshow.me Live, que permite upload.
                        </p>
                        <p className="subTitle2">Audio</p>
                        <div className="audioContainer">
                            <iframe
                                style={{ borderRadius: "12px" }}
                                src="https://open.spotify.com/embed/track/2LyweqU74aSBN9otcvCfn1?utm_source=generator"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <Playback
                    videos={videos}
                    categories={categories}
                    titlePage="Conteúdos relacionados"
                />
            </VideoContainer>
        </VideoLayout>
    );
}
