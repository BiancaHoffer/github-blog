import { ContainerLoadingPostCard } from "./styles";

import Skeleton from "../../Skeleton";

export function LoadingPostCard() {
    return (
        <ContainerLoadingPostCard>
            <div className="content-title-data">
                <div className="content-title">
                    <Skeleton className="title" />
                    <Skeleton className="title" />
                    <Skeleton className="title" />
                </div>

                <div className="content-data">
                    <Skeleton className="data" />
                </div>

            </div>

            <div className="content-text">
                <Skeleton className="text" />
                <Skeleton className="text" />
                <Skeleton className="text" />
                <Skeleton className="text" />
            </div>

        </ContainerLoadingPostCard>
    )
}