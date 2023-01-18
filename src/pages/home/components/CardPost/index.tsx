import { Posts } from "../..";
import { LoadingPostCard } from "../../../../shimmer/LoadingPostCard";
import { dateFormatter } from "../../../../utils/formatter";
import { ContainerCartPost } from "./styles";

interface CardPostProps {
    post: Posts;
    statusLoading: boolean;
}

export function CardPost({ post, statusLoading }: CardPostProps) {
    if (statusLoading) {
        return (
            <LoadingPostCard />
        )
    }

    return (
        <ContainerCartPost to={`/post/${post.number}`}>
            <h1>{post.title}</h1>
            <time>Última atualização {dateFormatter(post.updated_at)}</time>
            <p>{post.body}</p>
        </ContainerCartPost>
    )
}

