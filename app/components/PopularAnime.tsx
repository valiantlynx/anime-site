"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { URL } from '@/utils/URLS';
import Link from 'next/link';
import getPopular from '@/utils/getPopular';
import Grid from './Grid';

export default function PopularAnime() {
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
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mt-8 mb-4">Popular Anime - Page {page}</h1>
            <Grid children={animeList} page={page} setPage={setPage} />
        </div>
    );
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
