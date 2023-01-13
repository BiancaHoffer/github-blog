import { Posts } from "../..";
import { dateFormatter } from "../../../../utils/formatter";
import { ContainerCartPost } from "./styles";

interface CardPostProps {
    post: Posts
}

export function CardPost({ post }: CardPostProps) {
    return (
        <ContainerCartPost to={`/post/${post.number}`}>
            <h1>{post.title}</h1>
            <time>{dateFormatter(post.updated_at)}</time>
            <p>{post.body}</p>
        </ContainerCartPost>
    )
}