import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"

const ShoesCollected = () => {
    const sectionRef = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= sectionRef.current.offsetTop && !started) {
                startCounting();
                setStarted(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [started]);

    const startCounting = () => {
        const nums = document.querySelectorAll(".three .num");
        nums.forEach((element) => {
            starCount(element);
        });
    };

    const starCount = (element) => {
        let goal = element.dataset.goal;
        let count = setInterval(() => {
            element.textContent++;
            if (element.textContent == goal) {
                clearInterval(count);
            }
        }, 6000 / goal);
    };
    return (
        <section className="bg-amber-900 p-container h-svh lg:h-full py-20 relative flex justify-center items-center">
            <div className=" px-5 md:px-10 lg:px-16 xl:px-24">
                <img className=" object-contain" src="../images/chart.png" alt="" />
            </div>
            <div className="absolute w-full h-full ">
                <div className="p-container py-20">
                    <div className="w-44 lg:w-60">
                        <div className="w-44 lg:w-60 p-1 bg-white rounded-xl">
                            <img className="rounded-xl" src="../images/shoe-5.jpg" alt="" />
                        </div>
                        <div className="px-2">
                            <div className=" bg-[#E2E8F0] pt-4 -mt-3 px-3 rounded-b-md pb-2 text-xs lg:text-sm">
                                Emma Simpson collected one pair of Cool Shoes.
                            </div>
                        </div>
                    </div>
                    <div className="pt-20">
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <span className="text-white text-4xl lg:text-6xl font-bold">
                                    <div className="three flex" ref={sectionRef}>
                                        <div className="num" data-goal="11">0</div>,
                                        <div className="num" data-goal="658">0</div>,
                                        <div className="num" data-goal="467">0</div>
                                    </div>
                                </span>
                            </div>
                            <div>
                                <span className="text-white text-3xl lg:text-5xl font-bold">
                                    Shoes Collected
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShoesCollected