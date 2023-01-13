import { useEffect, useState } from 'react'

import { Profile } from "./components/Profile";
import { CardPost } from "./components/CardPost";

import { ContainerPublications, ContainerSearch, Main } from "./styles";

import { api } from "../../lib/api";
import { Search } from './components/Search';

export interface Posts {
  title: string;
  updated_at: string;
  body: string;
  number: number;
}

const username = "biancahoffer" // criar cheve
const repo = "github-blog" // criar cheve

export function Home() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [totalPosts, setTotalPosts] = useState<number>(0);

  async function getPosts(query: string = "") {
    const response = await api.get(`search/issues?q=${query}%20repo:${username}/${repo}`)
    setPosts(response.data.items);
    setTotalPosts(response.data.total_count)
  }


  useEffect(() => {
    getPosts()
  }, [])


  return (
    <Main>
      <Profile />

      <ContainerSearch>
        <p>Publicações</p>
        <p>
          {totalPosts == 1 ? `${totalPosts} publicação ` : `${totalPosts} publicações`}
        </p>
        <Search getPosts={getPosts} />
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