import Navbar from "./Navbar"
import heroImg from '../assets/hero.png'
import { Header1Icon, Header2Icon, Header3Icon, WatchLaterIcon } from "./icons"
const Header = () => {
    const items = [
        {
            id: 1,
            icon: <Header1Icon />,
            title: 'Nibh viverra',
            desc: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        },
        {
            id: 2,
            icon: <Header2Icon />,
            title: 'Cursus amet',
            desc: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        },
        {
            id: 3,
            icon: <Header3Icon />,
            title: 'Ipsum fermentum',
            desc: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
        },
    ]
    return (
        <header className="bg-amber-50 left-angled-triangle before:bg-amber-100 pb-5">
            <Navbar />
            <div className="grid grid-cols-12 p-container space-y-20 lg:space-y-0 py-5">
                <div className="col-span-12 lg:col-span-7 flex items-center z-10">
                    <div>
                        <div className="lg:space-y-8 text-center lg:text-left space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-bold">Collectible Sneakers</h1>
                            <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                            <div className="flex justify-center gap-0 lg:justify-start lg:gap-">
                                <button className="font-medium text-amber-800 border-2 rounded-md border-amber-900 py-2 px-5">
                                    Sign up now
                                </button>
                                <button className="font-medium text-amber-800 rounded-md py-2 px-5">
                                    <div className="flex gap-3 items-center">
                                        <WatchLaterIcon />
                                        <span>
                                            Watch Demo
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 z-10">
                    <div className="lg:px-5 relative flex justify-center items-center">
                        <img className="z-10 hero-bounce" src={heroImg} alt="" />
                        <div className="absolute w-[80%] h-[80%] bg-amber-400 rounded-3xl" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 p-container py-10 lg:py-20">
                {items.map(item => {
                    return (
                        <div className="col-span-12 lg:col-span-4 z-10 space-y-5 py-3 px-10 flex flex-col items-center lg:block" key={item.id}>
                            <div>
                                {item.icon}
                            </div>
                            <div className="space-y-1 text-center lg:text-left">
                                <h4 className="text-lg font-medium"> {item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </header>
    )
}

export default Header