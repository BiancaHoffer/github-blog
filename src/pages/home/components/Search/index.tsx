import * as zod from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { ContainerForm } from './styles';

const searchFormSchema = zod.object({
    query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

interface SearchProps {
    getPosts: (query?: string) => Promise<void>;
}

export function Search({ getPosts }: SearchProps) {
    const { register, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            query: "",
        }
    });

    async function handleSearchPosts(data: SearchFormInputs) {
        await getPosts(data.query)
    }

    return (
        <ContainerForm onSubmit={handleSubmit(handleSearchPosts)}>
            <input
                type="text"
                placeholder="Buscar conteúdo"
                {...register('query')}
            />
        </ContainerForm>
    )
}