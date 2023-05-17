"use client"
import getGenre from "@/utils/getGenre";
import getGenreList from "@/utils/getGenreList";
import Link from "next/link";
import { useState, useEffect } from 'react';


// turn this ssr to ssg 
export async function generateStaticParams() {
  const genreList: any = await getGenreList();

  return genreList.map((list: string) => ({
    genre: list,
  }))

}

async function page({ params }: { params: { genretype: string, page: number } }) {

  const [page, setPage] = useState<number>(1);
  const [animeList, setAnimeList] = useState<GenreProps[]>([]);
  const genretype = params.genretype;

  useEffect(() => {
    async function getAnimeList() {
      const animeList: any = await getGenre(
        genretype,
        page
      );
      setAnimeList(animeList);
    }
    getAnimeList();
  }, [page]);


  return <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold mt-8 mb-4">Popular Anime - Page {page}</h1>
    <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
    <button onClick={() => setPage(page + 1)}>Next Page</button>
    {animeList.map((anime, index) => (
      <div key={index}>
        <Link href={`/details/${anime.id}`} aria-label={anime.title} >
          <h4>{anime.title}</h4>
          <img src={anime.image} alt={anime.title} width={200} />
        </Link>

      </div>
    ))}

  </div>;
}

export default page;
