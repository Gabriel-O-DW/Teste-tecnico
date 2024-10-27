import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosClient } from "@/services/axiosClient";
import VideoLayout from "@/layout/VideoLayout";

interface Video {
    id: string;
    title: string;
    description: string;
    hls_path: string;
    thumbnail: string;
}

export default function VideoPage() {
    const { id } = useParams<{ id: string }>();
    const [video, setVideo] = useState<Video | null>(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axiosClient.get(`/videos/${id}`);
                setVideo(response.data);
            } catch (error) {
                console.error("Erro ao buscar o vídeo:", error);
            }
        };
        if (id) fetchVideo();
    }, [id]);

    if (!video) return <p>Carregando...</p>;

    console.log(video);

    return (
        <VideoLayout>
            <div style={{ padding: "20px" }}>
                <h1>{video.title}</h1>
                <p>{video.description}</p>
              
            </div>
        </VideoLayout>
    );
}
