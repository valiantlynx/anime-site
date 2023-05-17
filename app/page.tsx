"use client"
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Recent from './recent/page'
import getPopular from '@/utils/getPopular';
import { useState, useEffect } from 'react';
import { URL } from '@/utils/URLS';
import axios from 'axios';
import Loading from './loading';

export default async function Home() {
  const [animeList, setAnimeList] = useState<PopularAnimeProps[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function getAnimeList() {
      const animeList: any = await getPopular(page);
      setAnimeList(animeList);
    }
    getAnimeList();
  }, [page]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      <Carousel animeListArray={animeList} />
      <Recent />
      <Hero />
    </main>
  )
}

export async function getServerSideProps({ params }: any) {
  const { page } = params;
  const response = await axios.get(`${URL.POPULAR}${page}`,
      { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
  const { animeList }: { animeList: string[] } = response.data;

  return {
      props: {
          animeList,
      },
  };
}


