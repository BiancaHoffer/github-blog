import { ReactElement } from "react";
import { ContainerGeneralInfosProfile } from "./styles";

interface GeneralInfosProfileProps {
    icon: ReactElement;
    title: string | number | undefined;
}

export function GeneralInfos({ icon, title }: GeneralInfosProfileProps) {
    return (
        <ContainerGeneralInfosProfile>
            <div>{icon}</div>
            <p>{title}</p>
        </ContainerGeneralInfosProfile>
    )
}