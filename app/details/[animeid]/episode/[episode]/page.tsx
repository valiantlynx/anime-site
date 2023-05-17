
"use client"
import getDetails from '@/utils/getDetails';
import getEpisode from '@/utils/getEpisode';

export function generateMetadata({ params }: { params: { animeid: string, episode: string } }) {
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


async function page({ params }: { params: { animeid: string, episode: string } }) {
  const animeid = params.animeid;
  const episode2 = "1";

  const data: any = await getEpisode(animeid, episode2);

  console.log("link", data.link);
  console.log("links", data.links);
  console.log("totalepisode", data.totalepisode);

  // Prepend protocol to the URL
  const videoUrl = `https:${data.link}`; // Assuming the server supports HTTP

  return <div>
    <main className="mainvideo">
      <iframe width="560" height="315"
        src={data.link}
        title="YouTube video player"
   
        allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture"
      >
      </iframe>
      <div id="videos">
        <h1 id="title">Episodes: {data.totalepisode}</h1>
        <div id="eps"></div>
      </div>
      <div id="anime"></div>
    </main>
  </div>;
}

export default page;
