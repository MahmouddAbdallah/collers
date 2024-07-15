import { CartIcon } from "./icons"

const TheBest = () => {
    const items = [
        {
            id: 1,
            img: '../images/shoe-1.jpg',
            name: 'Title 1',
            desc: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
        },
        {
            id: 2,
            img: '../images/shoe-2.jpg',
            name: 'Title 2',
            desc: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
        },
        {
            id: 3,
            img: '../images/shoe-3.jpg',
            name: 'Title 3',
            desc: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.'
        },
    ]
    return (
        <section className='bg-[#0F172A] text-white p-container py-20'>
            <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
                <h2 className="text-3xl lg:text-4xl font-bold">The best of the best</h2>
                <button className="font-medium text-white border-2 rounded-md border-white py-2 px-5">
                    Sign up now
                </button>
            </div>
            <div className="pt-10 lg:pt-20">
                <div className="grid grid-cols-12 lg:gap-20 space-y-10 lg:space-y-0">
                    {items.map((item) => (
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg shadow-md shadow-white/50 overflow-hidden" key={item.id}>
                            <div>
                                <img src={item.img} alt={item.name} className="w-full object-cover" />
                            </div>
                            <div className="w-full px-5 py-8 space-y-5">
                                <div className="space-y-2">
                                    <h3 className="font-bold text-xl">{item.name}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                <button className="w-full py-3 border-2 border-white rounded-md font-medium hover:bg-blue-900 duration-200 flex justify-center items-center gap-3">
                                    <CartIcon /> Buy now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TheBest