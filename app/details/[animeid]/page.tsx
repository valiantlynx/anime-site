import getDetails from '@/utils/getDetails';
import getPopular from '@/utils/getPopular';

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

  return <div>
    <h1>{title}</h1>
    <img src={image} alt={title} />
    <p>{type}</p>
    <p>{summary}</p>
    <p>{relased}</p>
    <p>{genres}</p>
    <p>{status}</p>
    <p>{totalepisode}</p>
    <p>{Othername}</p>

  </div>;
}

export default page;
