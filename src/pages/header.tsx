import "../styles/header.css"
import imgShop from "/assets/bg-shop.jpg";

const HeaderPage = () => {
    return(            
        <header
            style={{ backgroundImage: `url(${imgShop})` }}
            className={`bg-cover bg-center text-center h-[90svh] mb-[10svh]`}
        >
                <h1 className="text-7xl py-10 text-white font-medium flex items-center justify-center h-[100%]">Taste Good</h1>
        </header>
    );
};

export default HeaderPage;