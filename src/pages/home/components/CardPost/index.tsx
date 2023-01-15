import { Posts } from "../..";
import { Loading } from "../../../../components/Loading";
import { dateFormatter } from "../../../../utils/formatter";
import { ContainerCartPost, ContainerLoading } from "./styles";

interface CardPostProps {
    post: Posts;
    statusLoading: boolean;
}

export function CardPost({ post, statusLoading }: CardPostProps) {
    if (statusLoading) {
        return (
            <ContainerLoading>
                <Loading width={180} />
            </ContainerLoading>

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