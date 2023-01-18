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

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

export function Home() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [loading, setLoading] = useState(false);

  async function getPosts(query: string = "") {
    try {
      setLoading(true);

      const response = await api.get(`search/issues?q=${query}%20repo:${username}/${repo}`);

      setPosts(response.data.items);

    } finally {
      setLoading(true);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])


  return (
    <Main>
      <Profile />

      <ContainerSearch>
        <p>Publicações</p>
        <p>
          {posts.length == 1 ?
            `${posts.length} publicação ` : `${posts.length} publicações`}
        </p>
        <Search getPosts={getPosts} />
      </ContainerSearch>

      <ContainerPublications>
        {posts.map(post => {
          return (
            <CardPost
              key={post.number}
              post={post}
              statusLoading={loading}
            />

          )
        })}
      </ContainerPublications>
    </Main>
  )
}