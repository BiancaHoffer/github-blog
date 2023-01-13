import { useEffect, useState } from 'react'

import { Profile } from "./components/Profile";
import { CardPost } from "./components/CardPost";

import { ContainerPublications, ContainerSearch, Main } from "./styles";

import * as zod from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from "../../lib/api";

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export interface Posts {
  title: string;
  updated_at: string;
  body: string;
  number: number;
}

const username = "biancahoffer" // criar cheve
const repo = "github-blog" // criar cheve

export function Home() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
    }
  });

  const [posts, setPosts] = useState<Posts[]>([])

  /*async function handleSearchPost(query?: SearchFormInputs) {
    const response = await api.get(`search/issues?q=${query}%20repo:${username}/${repo}`);
    //const data = response.data;

    setPosts(response.data.items);
    console.log(response.data);

    //`search/issues?q=${query}%20repo:${username}/${repo}`
    // https://api.github.com/search/issues?q=Boas%20repo:biancahoffer/github-blog
    //console.log(response.data)
    // console.log(response.data.items)
  }

  useEffect(() => {
    handleSearchPost()
  }, [])*/


  async function getPosts(query: string = "") {
    const response = await api.get(`search/issues?q=${query}%20repo:${username}/${repo}`)
    setPosts(response.data.items)
  }


  useEffect(() => {
    getPosts()
  }, [])


  return (
    <Main>
      <Profile />

      <ContainerSearch>
        <p>Publicações</p>
        <p>6 publicações</p>
        <form>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </form>
      </ContainerSearch>

      <ContainerPublications>
        {posts.map(post => {
          return (
            <CardPost
              key={post.number}
              post={post}
            />

          )
        })}
      </ContainerPublications>
    </Main>
  )
}