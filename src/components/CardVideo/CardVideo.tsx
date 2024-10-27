import { Link } from "react-router-dom";
import { CardVideoContainer } from "./style";
import { Play } from "@phosphor-icons/react";
import Skeleton from "react-loading-skeleton";

interface Category {
    id: string;
    title: string;
    site_id: number;
}

interface CardVideoProps {
    categories: Category[];
    videoID: string;
    videoTitle?: string;
    videoThumbnail?: string;
    categoryId: number;
    loading?: boolean;
}

export default function CardVideo({
    videoID,
    videoTitle,
    videoThumbnail,
    categoryId,
    categories,
    loading = false,
}: CardVideoProps) {
    const categoriesName =
        categories.find((category) => Number(category.id) === categoryId)
            ?.title || "N/A";

    return (
        <CardVideoContainer>
            <Link to={`/videos/${videoID}`}>
                <div className="image">
                    {loading ? (
                        <Skeleton
                            height={163}
                            width="100%"
                        />
                    ) : (
                        <>
                            <img
                                src={videoThumbnail}
                                alt="Thumbnail video"
                            />
                            <Play
                                size={16}
                                weight="bold"
                            />
                        </>
                    )}
                </div>
                <div className="info">
                    <h2 className="category">{loading ? <Skeleton width={80} /> : categoriesName}</h2>
                    <h4 className="title">
                        {loading ? <Skeleton width="60%" /> : videoTitle}
                    </h4>
                </div>
            </Link>
        </CardVideoContainer>
    );
}
