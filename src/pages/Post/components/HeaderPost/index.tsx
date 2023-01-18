import { GeneralInfos as GeneralInfosPost } from '../../../../components/GeneralInfos'
import { ContainerHeaderPost, AreaButtons, GeneralInfos, ContainerLoading } from "./styles";
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { ArrowSquareOut } from 'phosphor-react'
import { BsGithub } from 'react-icons/bs';
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaComment } from 'react-icons/fa';
import { Post } from '../..';
import { dateFormatter } from '../../../../utils/formatter';
import { LoadingHeader } from '../../../../components/LoadingHeader';

interface HeaderPostProps {
    postData: Post;
    statusLoading: boolean;
}

export function HeaderPost({ postData, statusLoading }: HeaderPostProps) {
    if (statusLoading) {
        return (
            <LoadingHeader />
        )

    }
    return (
        <ContainerHeaderPost>
            <AreaButtons>
                <NavLink to={"/"}>
                    <IoIosArrowBack size={11} />
                    Voltar
                </NavLink>

                <a href={postData.link} target="_blank">
                    Ver no GitHub
                    <ArrowSquareOut size={15} />
                </a>
            </AreaButtons>

            <h1>
                {postData.title}
            </h1>

            <GeneralInfos>
                <GeneralInfosPost
                    title={postData.login}
                    icon={<BsGithub size={18} />}
                />
                <GeneralInfosPost
                    title={dateFormatter(postData.created_at)}
                    icon={<BsFillCalendarEventFill size={18} />}
                />
                <GeneralInfosPost
                    title={postData.comments == 1 ?
                        `${postData.comments} comentário ` : `${postData.comments} comentários`
                    }
                    icon={<FaComment size={18} />}
                />
            </GeneralInfos>
        </ContainerHeaderPost>
    )
}