import Skeleton from "../../Skeleton";
import { ContainerLoadingPost } from "./styles";

export function LoadigndPost() {
    return (
        <ContainerLoadingPost>
            <div>
                <Skeleton className="text" />
                <Skeleton className="text" />
                <Skeleton className="text" />
                <Skeleton className="text" />
                <Skeleton className="text" />
                <Skeleton className="text" />
                <Skeleton className="text" />
                <Skeleton className="text" />
                <Skeleton className="text" />
            </div>
        </ContainerLoadingPost>
    )
}