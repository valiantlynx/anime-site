import React from 'react'

function Grid() {
    return (
        <>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
                </div>
            </div>
        </>

    )
}

export default Grid