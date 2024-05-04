"use client"
import Breadcrumbs from '@/app/components/BreadCrumbs';
import getEpisode from '@/utils/getEpisode';
import getDetails from '@/utils/getDetails';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function EpisodePage({ params }: any) {
  const { animeid, episode } = params;
  const [data, setData]: any = useState(null);
  const [details, setDetails]: any = useState(null);

  useEffect(() => {
    async function fetchData() {
      const episodeData: any = await getEpisode(animeid, episode);
      const detailsData: any = await getDetails(animeid);
      console.log(detailsData)
      setData(episodeData);
      setDetails(detailsData);
    }
    fetchData();
  }, [animeid, episode]);

  if (!data || !details) return <div>Loading...</div>;

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: details.title, url: `/details/${animeid}` },
    { label: `Episode ${episode}`, url: `/details/${animeid}/episode/${episode}` }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 ">
      <Breadcrumbs items={breadcrumbs} />
      <div className="mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">{details.title}</h1>
        <div className="text-lg text-gray-400 mb-4">{details.genres}</div>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-8">
          <div className="aspect-w-16 aspect-h-6 w-full md:w-2/3">
            <iframe
              src={data.link}
              title={`${animeid} Episode ${episode}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="md:w-1/3">
            <img src={details.image} alt={`Cover of ${details.title}`} className="rounded-lg shadow-lg mb-4" />
            <div className='space-y-2'>
              <h1 className="text-2xl font-bold text-white">{details.title}</h1>
              <p className="text-sm text-gray-400">{details.othername?.trim()}</p>
              <p className="text-gray-400">Released: {details.relased}, Status: {details.status.trim()}</p>
              <p className="text-gray-400">{details.type}</p>
              <p className="text-gray-300 italic">{details.summary || "No summary available."}</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-8 mb-4">Other Episodes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: parseInt(details.totalepisode) }, (_, i) => (
            <Link key={i} href={`/details/${animeid}/episode/${i + 1}`} className="group">
              <div className="relative cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 flex justify-center items-center text-xl font-bold">
                  Episode {i + 1}
                </div>
                <img
                  src={details.image} // Placeholder for actual thumbnail path
                  alt={`Episode ${i + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EpisodePage;
