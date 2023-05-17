
"use client"
import getEpisode from '@/utils/getEpisode';

async function page({ params }: { params: { animeid: string, episode: string } }) {
  const animeid = params.animeid;
  const episode = params.episode;

  const data: any = await getEpisode(animeid, episode);

  return <div>
    <main className="mainvideo">
      <iframe width="560" height="100%"
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
