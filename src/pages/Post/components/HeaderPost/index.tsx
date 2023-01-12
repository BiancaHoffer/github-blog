import { GeneralInfos as GeneralInfosPost } from '../../../../components/GeneralInfos'
import { ContainerHeaderPost, AreaButtons, GeneralInfos } from "./styles";
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { ArrowSquareOut } from 'phosphor-react'
import { ContainerGeneralInfosProfile } from "../../../../components/GeneralInfos/styles";
import { BsGithub } from 'react-icons/bs';
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaComment } from 'react-icons/fa';

export function HeaderPost() {
    return (
        <ContainerHeaderPost>
            <AreaButtons>
                <NavLink to={"/"}>
                    <IoIosArrowBack size={11} />
                    Voltar
                </NavLink>

                <NavLink to={"#"}>
                    Ver no GitHub
                    <ArrowSquareOut size={15} />
                </NavLink>
            </AreaButtons>

            <h1>
                JavaScript data types and data structures
            </h1>

            <GeneralInfos>
                <GeneralInfosPost title='cameronwll' icon={<BsGithub size={18} />} />
                <GeneralInfosPost title='Há 1 dia' icon={<BsFillCalendarEventFill size={18} />} />
                <GeneralInfosPost title='5 comentários' icon={<FaComment size={18} />} />
            </GeneralInfos>


        </ContainerHeaderPost>
    )
}