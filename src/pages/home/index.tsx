import { Profile } from "./components/Profile";
import { CardPost } from "./components/CardPost";
import { ContainerPublications, ContainerSearch, Main } from "./styles";

export function Home() {
  return (
    <Main>
      <Profile />

      <ContainerSearch>
        <p>Publicações</p>
        <p>6 publicações</p>
        <input type="text" placeholder="Buscar conteúdo" />
      </ContainerSearch>

      <ContainerPublications>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </ContainerPublications>
    </Main>
  )
}