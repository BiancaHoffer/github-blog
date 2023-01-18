import {
    ContainerLoadingHeaderProfile,
    ContentGeneralInfosShimmer,
    ContentInfosProfileShimmer,
    ContentLoadingProfile,
    ContentPhotoShimmer
} from "./styles";

import Skeleton from "../../Skeleton";

export function LoadindHeaderProfile() {
    return (
        <ContainerLoadingHeaderProfile>
            <ContentLoadingProfile>
                <ContentPhotoShimmer>
                    <Skeleton className="photo" />
                </ContentPhotoShimmer>
                <ContentInfosProfileShimmer>
                    <Skeleton className="name" />
                    <div className="containerbutton">
                        <Skeleton className="button" />
                    </div>
                    <Skeleton className="bio" />
                    <Skeleton className="bio" />

                    <ContentGeneralInfosShimmer>
                        <Skeleton className="infos" />
                        <Skeleton className="infos" />
                        <Skeleton className="infos" />
                    </ContentGeneralInfosShimmer>
                </ContentInfosProfileShimmer>
            </ContentLoadingProfile>
        </ContainerLoadingHeaderProfile>
    )
}