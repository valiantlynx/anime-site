import getGenreList from "@/utils/getGenreList";
import Link from "next/link";
// turn this ssr to ssg 
export async function generateStaticParams() {
  const genreList: any = await getGenreList();

  return genreList.map((list: string) => ({
    genre: list,
  }))

}

export async function generateMetadata() {
  const genreList: any = await getGenreList();
  for (const genre of genreList) {
    return {
      title: genre,
      description: `List of ${genre} anime`,
    }
  }
}


async function page() {
  const genreList: any = await getGenreList();


  return <div>
    <h1>Genre List</h1>
    <ul>
      {genreList.map((list: string) => (
        <li key={list}>
          <Link
            href={`/genre/${list}`}
          >
            {list}
          </Link>
        </li>
      ))}

    </ul>

  </div>;
}

export default page;
