import { useRef, type ReactNode } from 'react';
import imgArrowBack from "/assets/arrow_back.svg";
import imgArrowForward from "/assets/arrow_forward.svg"
import imgChevronForward from "/assets/chevron_forward.svg"

interface LayoutMenuHomePageProps {
    title: string
    children: ReactNode
    subTitle: string
    imgPath: string
}

const LayoutMenuHomePage = ({ title, children, subTitle, imgPath }: LayoutMenuHomePageProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (amount:number) => {
        scrollRef?.current?.scrollBy({ left: amount, behavior: "smooth" });
    };

    return (
        <main
            style={{ backgroundImage: `url(${imgPath})` }}
            className={`bg-[url('/assets/bg-food.jpg')] bg-cover bg-center text-center h-[90svh] my-[10svh] relative`}
        >
            <h1 className="text-7xl pt-15 pb-5 font-bold text-white">{title}</h1>
            <button onClick={() => scroll(-250)}>
                <span>
                    <img className="bg-black hover:bg-gray-600 rounded-[50%] absolute left-4 bottom-[45%] cursor-pointer" src={imgArrowBack} alt="Scroll Right" width="55px" />
                </span>
            </button>
            <button onClick={() => scroll(250)}>
                <span>
                    <img className="bg-black hover:bg-gray-600 rounded-[50%] absolute right-4 bottom-[45%] cursor-pointer" src={imgArrowForward} alt="Scroll Right" width="55px" />
                </span>
            </button>
            <section className="flex gap-10 overflow-x-auto px-20 snap-x" ref={scrollRef}>
                {children}
            </section>
            <button className="text-2xl mt-8 px-6 py-3 text-white rounded-xl bg-black hover:bg-gray-600 cursor-pointer font-medium">
                <span className="flex gap-1">{subTitle}<img src={imgChevronForward} alt="arrow forward" width={"30px"}/></span>
            </button>
        </main>
    );
};

export default LayoutMenuHomePage;