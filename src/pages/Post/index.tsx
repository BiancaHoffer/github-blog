import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/api";
import { HeaderPost } from "./components/HeaderPost";
import { Main, ContainerPost } from "./styled";
import ReactMarkdown from 'react-markdown'

export interface Post {
    title: string;
    created_at: string;
    body: string;
    comments: number;
    link: string;
    login: string;
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

export function Post() {
    const [post, setPost] = useState<Post>({} as Post);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    async function getPost() {
        try {
            setLoading(true)
            const response = await api.get(`repos/${username}/${repo}/issues/${id}`)

            const {
                title,
                body,
                created_at,
                comments,
                html_url,
                user
            } = response.data;

            const dataPost = {
                title,
                created_at,
                body,
                comments,
                link: html_url,
                login: user.login
            }

            setPost(dataPost)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <Main>
            <HeaderPost postData={post} statusLoading={loading} />

            <ContainerPost>
                <ReactMarkdown>
                    {post.body}
                </ReactMarkdown>
            </ContainerPost>
        </Main>
    )
}