import { ReactNode } from "react";
import { ContainerGeneralInfosProfile } from "./styles";

interface GeneralInfosProfileProps {
    icon: ReactNode;
    title: string;
}

export function GeneralInfos({ icon, title }: GeneralInfosProfileProps) {
    return (
        <ContainerGeneralInfosProfile>
            <div>{icon}</div>
            <p>{title}</p>
        </ContainerGeneralInfosProfile>
    )
}