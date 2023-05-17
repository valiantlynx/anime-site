import Image from 'next/image'
import Link from 'next/link'

function Card({ child }: { child: any }) {
    return (
        <Link href={`/details/${child.id}/episode/${child.episodenumber}`} aria-label={child.title} className="card ">
            <figure>
                <Image
                    className='h-auto max-w-full rounded-lg'
                    src={child.image}
                    alt={child.title}
                    width={200}
                    height={200} />
            </figure>
            <div className=" m-4">
                <h2 className="card-title">{child.title.substring(0, 20) + '...' // Limit to 20 characters and add ellipsis
                }</h2>
                <div className="card-actions justify-end m-2">
                    <button className=" btn-xs btn-primary">Episode: {child.episodenumber}</button>
                </div>
            </div>
        </Link>
    )
}

export default Card