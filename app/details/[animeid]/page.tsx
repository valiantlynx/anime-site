import getDetails from '@/utils/getDetails';
import getPopular from '@/utils/getPopular';
import Image from 'next/image';
import Link from 'next/link';

// turn this ssr to ssg 
export async function generateStaticParams() {
  const animeList: any = await getPopular(1);

  return animeList.map((anime: PopularAnimeProps) => ({
    postId: anime.id,
  }))

}

export function generateMetadata({ params }: { params: { animeid: string } }) {
  const { animeid } = params
  const { title }: any = getDetails(animeid); // deduped

  if (!title) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title,
  }
}


async function page({ params }: { params: { animeid: string } }) {
  const animeid = params.animeid;

  const {
    title,
    image,
    type,
    summary,
    relased,
    genres,
    status,
    totalepisode,
    Othername,

  }: any = await getDetails(animeid);

  // make an array of episodes  <Episode />
  const episodeList = [];
  for (let i = 1; i <= totalepisode; i++) {
    episodeList.push(<div key={i}>
      <h3>Episode {i}</h3>

      <Link href={`/details/${animeid}/episode/${i}`}>
        Watch Now
      </Link>
    </div>)
  }




  return <div>
    <h1>{title}</h1>
    <Image src={image} alt={title} width={200} height={300} />
    <p>{type}</p>
    <p>{summary}</p>
    <p>{relased}</p>
    <p>{genres}</p>
    <p>{status}</p>
    <p>{totalepisode}</p>
    <p>{Othername}</p>
    Episodes: {episodeList}


  </div>;
}

export default page;
