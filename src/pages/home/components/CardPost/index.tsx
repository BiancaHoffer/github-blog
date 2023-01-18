import { Posts } from "../..";
import { dateFormatter } from "../../../../utils/formatter";
import { LoadingCardPost } from "../LoadingCardPost";
import { ContainerCartPost } from "./styles";

interface CardPostProps {
    post: Posts;
    statusLoading: boolean;
}

export function CardPost({ post, statusLoading }: CardPostProps) {
    if (statusLoading) {
        return (
            <LoadingCardPost />
        )
    }

    return (
        <ContainerCartPost to={`/post/${post.number}`}>
            <h1>{post.title}</h1>
            <time>{dateFormatter(post.updated_at)}</time>
            <p>{post.body}</p>
        </ContainerCartPost>
    )
}

