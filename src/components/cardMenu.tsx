interface CardMenuProps {
    className?: string
};

const CardMenu = ({className = ""}: CardMenuProps) => {
    return(
        <article className={className + "flex-shrink-0 cursor-pointer snap-center"}>
            <img src="/assets/food/food1.jpg" alt="Food1" width="250px" className="rounded-2xl" />
        </article>
    );
};

export default CardMenu;