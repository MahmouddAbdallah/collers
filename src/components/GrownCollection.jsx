import videoImg from '../assets/video.png'
import { WavesIcon } from './icons'

const GrownCollection = () => {
    const items = [
        {
            name: 'Bibendum tellus',
        },
        {
            name: 'Cras eget',
        },
        {
            name: 'Dolor pharetra',
        },
        {
            name: 'Amet, fringilla',
        },
        {
            name: 'Amet nibh',
        },
        {
            name: 'Sed velit',
        },
    ]
    return (
        <section className="relative pb-14 sm:pb-28 md:pb-32 lg:pb-48 xl:pb-44">
            <div className="p-container py-10 space-y-10">
                <div className="space-y-5 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold">Grow your collection</h2>
                    <p>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                    </p>
                </div>
                <div className="grid grid-cols-12 space-y-5 lg:space-y-0 lg:gap-10">
                    <div className="col-span-12 lg:col-span-2 flex lg:block overflow-auto hide-scrollbar">
                        {
                            items.map((item, i) => <div key={item.name}>
                                <div className={`px-3 py-2 whitespace-nowrap ${i == 0 ? 'bg-white rounded-md shadow-md' : ""}`}>
                                    <p className="font-medium">{item.name}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="col-span-12 lg:col-span-10 lg:px-20">
                        <div className="flex relative">
                            <div className="rounded-2xl w-[68%] lg:w-[75%] shadow-md border px-1 py-1 bg-white">
                                <div className="flex gap-2 py-3 px-2">
                                    <div className="bg-red-500 rounded-full size-3" />
                                    <div className="bg-yellow-500 rounded-full size-3" />
                                    <div className="bg-green-500 rounded-full size-3" />
                                </div>
                                <div className='relative flex justify-center items-center'>
                                    <img className='w-full rounded-b-xl' src={videoImg} alt="" />
                                </div>
                            </div>
                            <div className="rounded-2xl w-[68%] lg:w-[75%] shadow-md border px-1 py-1 bg-white absolute left-[10%] top-[25%]">
                                <div className="flex gap-2 py-3 px-2">
                                    <div className="bg-red-500 rounded-full size-3" />
                                    <div className="bg-yellow-500 rounded-full size-3" />
                                    <div className="bg-green-500 rounded-full size-3" />
                                </div>
                                <div className='relative flex justify-center items-center'>
                                    <img className='w-full rounded-b-xl' src={'../images/shoe-1.jpg'} alt="" />
                                </div>
                            </div>
                            <div className="rounded-2xl w-[30%] lg:w-[25%] shadow-md border px-1 py-1 bg-white absolute right-[2%] top-[55%]">
                                <div className='relative flex justify-center items-center'>
                                    <img className='w-full rounded-xl' src={'../images/shoe-4.jpg'} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 right-0 w-full -z-10'>
                <WavesIcon className={' w-full'} />
            </div>
        </section>
    )
}

export default GrownCollection