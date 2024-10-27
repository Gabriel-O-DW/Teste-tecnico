import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosClient } from './services/axiosClient';
import HomeLayout from './layout/HomeLayout';
import BannerCarousel from './components/Banners/Banners';
import Playback from './components/Playback/Playback';
import VideoPage from '@/pages/videos/[id]' // Importe o componente de página de vídeo

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

interface Categories {
    id: string;
    title: string;
    site_id: number;
}

function App() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [categories, setCategories] = useState<Categories[]>([]);

    const getVideos = async () => {
        await axiosClient
            .get("/videos")
            .then((response) => {
                setVideos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getCategories = async () => {
        await axiosClient
            .get("/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getVideos();
        getCategories();
    }, []);

    const filteredVideos = videos.filter((video) => video.category === 1).slice(0, 4);
    const categoryName = categories.find((category) => category.id === "1")?.title || "Categoria não encontrada";
    const filteredAoVivo = videos.filter((video) => video.category === 1).slice(0, 2);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomeLayout>
                            <BannerCarousel videos={filteredVideos} categoriesName={categoryName} />
                            <Playback videos={videos} categories={categories} titlePage="Continuar reprodução" />
                            <Playback videos={filteredAoVivo} categories={categories} titlePage="Ao vivo" />
                            <Playback videos={videos} categories={categories} titlePage="Minha lista" />
                            <Playback videos={videos} categories={categories} titlePage="Flow experience 2021" />
                            <Playback videos={videos} categories={categories} titlePage="Playlist" />
                        </HomeLayout>
                    }
                />
                <Route path="/videos/:id" element={<VideoPage />} />
            </Routes>
        </Router>
    );
}

export default App;
