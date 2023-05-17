"use client"
import getRecent from "@/utils/getRecent";
import Link from "next/link";
import { useState, useEffect } from 'react';


// turn this ssr to ssg 
export async function generateStaticParams() {
  const page = 1;
  const genreList: any = await getRecent(page);

  return genreList.map((list: RecentProps) => ({
    animeid: list.id,
  }))

}

export async function generateMetadata() {
  const page = 1;
  const animes: any = await getRecent(page);

  for (const anime of animes) {
    return {
      title: anime.title,
      description: anime.id,
    };
  }
}


async function page() {

  const [page, setPage] = useState<number>(1);
  const [animeList, setAnimeList] = useState<RecentProps[]>([]);

  useEffect(() => {
    async function getAnimeList() {
      const animeList: any = await getRecent(page);
      setAnimeList(animeList);
    }
    getAnimeList();
  }, [page]);


  return <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold mt-8 mb-4">Recent Anime - Page {page}</h1>
    <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
    <button onClick={() => setPage(page + 1)}>Next Page</button>
    {animeList.map((anime, index) => (
      <div key={index}>
        <Link href={`/details/${anime.id}`} aria-label={anime.title} >
          <h4>{anime.title}</h4>
          <img src={anime.image} alt={anime.title} width={200} />
          <h3>Episode: {anime.episodenumber}</h3>
        </Link>
      </div>
    ))}

  </div>;
}

export default page;
