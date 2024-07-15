import { useRef } from "react"
import { ArrowLeft, ArrowRight } from "./icons"

const LoveUs = () => {
    const reviewData = [
        {
            id: 1,
            content: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            user: {
                img: '../images/user1.png',
                name: 'Mahmoud Mohamed',
                as: 'Fron-end developer'
            }
        },
        {
            id: 2,
            content: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            user: {
                img: '../images/user1.png',
                name: 'Mahmoud Mohamed',
                as: 'Fron-end developer'
            }
        },
        {
            id: 3,
            content: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            user: {
                img: '../images/user1.png',
                name: 'Mahmoud Mohamed',
                as: 'Fron-end developer'
            }
        },
        {
            id: 4,
            content: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            user: {
                img: '../images/user1.png',
                name: 'Mahmoud Mohamed',
                as: 'Fron-end developer'
            }
        },
        {
            id: 5,
            content: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            user: {
                img: '../images/user1.png',
                name: 'Mahmoud Mohamed',
                as: 'Fron-end developer'
            }
        },
        {
            id: 6,
            content: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            user: {
                img: '../images/user1.png',
                name: 'Mahmoud Mohamed',
                as: 'Fron-end developer'
            }
        },
        {
            id: 7,
            content: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
            user: {
                img: '../images/user1.png',
                name: 'Mahmoud Mohamed',
                as: 'Fron-end developer'
            }
        },
    ]
    const eleRef = useRef();
    const nextSlide = () => {
        eleRef.current.scrollLeft += 200
    }
    const prevSlide = () => {
        eleRef.current.scrollLeft -= 200
    }
    return (
        <section className="py-20 bg-amber-50">
            <div className="p-container">
                <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
                    <h2 className="text-3xl lg:text-4xl font-bold">Because they love us</h2>
                    <div className="flex gap-3">
                        <button onClick={prevSlide} className="size-12 border-2 border-amber-900 rounded-full flex justify-center items-center">
                            <ArrowLeft className={'size-5 stroke-amber-900'} />
                        </button>
                        <button onClick={nextSlide} className="size-12 border-2 border-amber-900 rounded-full flex justify-center items-center">
                            <ArrowRight className={'size-5 stroke-amber-900'} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="w-full absolute h-full p-container pt-5 lg:pt-10" >
                    <div className="bg-amber-200 w-full h-[85%]" />
                </div>
                <div ref={eleRef} className="flex gap-3 overflow-hidden pb-5 pl-2 lg:pl-0 pt-10 lg:mt-14 lg:pt-14 relative scroll-smooth">
                    {
                        reviewData.map(item =>
                            <div className="z-10" key={item.id}>
                                <div className="w-80 bg-white shadow-md py-10 px-5 rounded-2xl space-y-5 lg:space-y-14">
                                    <p className="text-lg">{item.content}</p>
                                    <div className="flex gap-3">
                                        <img src={item.user.img} alt={item.user.name} className="size-14 rounded-full" />
                                        <div>
                                            <h6 className="font-medium">{item.user.name}</h6>
                                            <span className="text-sm text-gray-600">{item.user.as}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default LoveUs