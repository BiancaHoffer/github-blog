import { GeneralInfos as GeneralInfosProfile } from "../../../../components/GeneralInfos";
import { ContainerProfile, ContentProfile, GeneralInfos, ProfileInfos } from "./styles";

import { BsGithub } from 'react-icons/bs';
import { FaBuilding } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';


import avatar from '../../../../assets/avatar.png';

import { ArrowSquareOut } from "phosphor-react";

export function Profile() {
    return (
        <ContainerProfile>
            <ContentProfile>
                <img src={avatar} alt="avatar" />

                <ProfileInfos>
                    <h1>Bianca Hoffer</h1>
                    <strong>
                        GitHub
                        <ArrowSquareOut size={15} color="#3294F8" />
                    </strong>
                    <p>
                        Tristique volutpat pulvinar vel massa, pellentesque egestas.
                        Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                        volutpat pulvinar vel mass.
                    </p>

                    <GeneralInfos>
                        <GeneralInfosProfile title="cameronwll" icon={<BsGithub size={18} />} />
                        <GeneralInfosProfile title="Rocketseat" icon={<FaBuilding size={18} />} />
                        <GeneralInfosProfile title="32 seguidores" icon={<BsPeopleFill size={18} />} />
                    </GeneralInfos>

                </ProfileInfos>
            </ContentProfile>
        </ContainerProfile>
    )
}