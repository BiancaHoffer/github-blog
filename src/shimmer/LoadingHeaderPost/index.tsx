import Skeleton from "../../Skeleton";
import { ContainerLoadingHeaderPost } from "./styles";

export function LoadingHeaderPost() {
    return (
        <ContainerLoadingHeaderPost>
            <div className="contentbuttons">
                <Skeleton className="button" />
                <Skeleton className="button" />
            </div>

            <Skeleton className="title" />

            <div className="contentinfos">
                <Skeleton className="infos" />
                <Skeleton className="infos" />
                <Skeleton className="infos" />
            </div>
        </ContainerLoadingHeaderPost>
    )
}