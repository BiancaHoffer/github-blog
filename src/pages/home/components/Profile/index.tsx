import { useEffect, useState } from 'react';

import { GeneralInfos as GeneralInfosProfile } from "../../../../components/GeneralInfos";
import { api } from '../../../../lib/api';

import { ContainerProfile, ContentProfile, GeneralInfos, ProfileInfos } from "./styles";

import { BsGithub } from 'react-icons/bs';
import { FaBuilding } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { ArrowSquareOut } from "phosphor-react";
import { LoadingHeader } from '../../../../components/LoadingHeader';
import { LoadindHeaderProfile } from '../../../../shimmer/LoadingHeaderProfile';


interface DataUser {
    name: string;
    avatar: string;
    bio: string;
    login: string;
    company: string;
    followers: number;
    link: string;
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export function Profile() {
    const [user, setUser] = useState<DataUser>({} as DataUser);
    const [loading, setLoading] = useState(false);

    async function getDataUser() {
        try {
            setLoading(true);
            const response = await api.get(`users/${username}`);
            const data = response.data;

            const {
                avatar_url,
                name,
                bio,
                login,
                company,
                followers,
                html_url
            } = data;

            const dataUser = {
                avatar: avatar_url,
                name,
                bio,
                login,
                company,
                followers,
                link: html_url,
            };

            setUser(dataUser);

        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        getDataUser();
    }, [])

    if (loading) {
        return <LoadindHeaderProfile />
    }

    return (
        <ContainerProfile>
            <ContentProfile>
                <img src={user?.avatar} alt="avatar" />
                <ProfileInfos>
                    <h1>{user?.name}</h1>
                    <a href={user?.link} target="_blank">
                        GitHub
                        <ArrowSquareOut size={15} color="#3294F8" />
                    </a>
                    <p>{user?.bio}</p>

                    <GeneralInfos>
                        <GeneralInfosProfile
                            title={user?.login}
                            icon={<BsGithub size={18} />}
                        />
                        <GeneralInfosProfile
                            title={user?.company}
                            icon={<FaBuilding size={18} />}
                        />
                        <GeneralInfosProfile
                            title={`${user?.followers} seguidores`}
                            icon={<BsPeopleFill size={18} />}
                        />
                    </GeneralInfos>
                </ProfileInfos>
            </ContentProfile>
        </ContainerProfile>
    )
}