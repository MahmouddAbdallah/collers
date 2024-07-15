import videoImg from '../assets/video.png'
import { CorrectIcon, PauseIcon } from './icons'

const JoinUs = () => {
    return (
        <section className="bg-amber-50 py-20 p-container" >
            <div className="bg-white shadow rounded-xl">
                <div className="w-full grid grid-cols-12 py-10 space-y-10 lg:space-y-0 lg:py-20 px-3 lg:px-10">
                    <div className="lg:col-span-6 col-span-12 space-y-5 lg:space-y-10 flex flex-col justify-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
                            Why join us
                        </h2>
                        <ul className='px-2 lg:px-5 space-y-2 lg:space-y-3 font-medium'>
                            <li className='flex items-center gap-3'>
                                <CorrectIcon />
                                <span>
                                    Est et in pharetra magna adipiscing ornare aliquam.
                                </span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <CorrectIcon />
                                <span>
                                    Tellus arcu sed consequat ac velit ut eu blandit.
                                </span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <CorrectIcon />
                                <span>
                                    Ullamcorper ornare in et egestas dolor orci.
                                </span>
                            </li>
                        </ul>
                        <button className="w-fit font-medium text-amber-800 border-2 rounded-md border-amber-900 py-2 px-5">
                            Sign up now
                        </button>
                    </div>
                    <div className="lg:col-span-6 col-span-12">
                        <div className="rounded-2xl shadow-md border px-1 py-1">
                            <div className="flex gap-2 py-3 px-2">
                                <div className="bg-red-500 rounded-full size-3" />
                                <div className="bg-yellow-500 rounded-full size-3" />
                                <div className="bg-green-500 rounded-full size-3" />
                            </div>
                            <div className='relative flex justify-center items-center'>
                                <img className='w-full rounded-b-xl' src={videoImg} alt="" />
                                <div className='absolute bg-black/40 size-28 flex justify-center items-center rounded-full cursor-pointer'>
                                    <PauseIcon className={''} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUs