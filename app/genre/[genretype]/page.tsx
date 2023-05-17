"use client"
import getGenre from "@/utils/getGenre";
import getGenreList from "@/utils/getGenreList";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Breadcrumbs from "@/app/components/BreadCrumbs";


// turn this ssr to ssg 
export async function generateStaticParams() {
  const genreList: any = await getGenreList();

  return genreList.map((list: string) => ({
    genre: list,
  }))

}

async function Genre({ params }: { params: { genretype: string, page: number } }) {

  const [page, setPage] = useState<number>(1);
  const [animeList, setAnimeList] = useState<GenreProps[]>([]);
  const genretype = params.genretype;

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: `Genre List`, url: `/genre-list` },
    { label: `${genretype}`, url: `/genre/${genretype}` },
  ];

  useEffect(() => {
    async function getAnimeList() {
      const animeList: any = await getGenre(
        genretype,
        page
      );
      setAnimeList(animeList);
    }
    getAnimeList();
  }, [page, genretype]);


  return <div className="container mx-auto px-4">
    <Breadcrumbs items={breadcrumbs} />
    <h1 className="text-3xl font-bold mt-8 mb-4">{genretype} Anime - Page {page}</h1>
    <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
    <button onClick={() => setPage(page + 1)}>Next Page</button>
    {animeList.map((anime, index) => (
      <div key={index}>
        <Link href={`/details/${anime.id}`} aria-label={anime.title} >
          <h4>{anime.title}</h4>
          <Image src={anime.image} alt={anime.title} width={200} height={200} />
        </Link>

      </div>
    ))}

  </div>;
}

export default Genre;
