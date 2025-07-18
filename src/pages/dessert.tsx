import LayoutMenuHomePage from "../components/LayoutMenuHomePage";
import CardMenu from "../components/cardMenu";

const DessertPage = () => {
    return(
        <main className={`bg-[url('/assets/bg-dessert.jpg')] bg-cover bg-center text-center h-[90svh] my-[10svh] relative`}>
            <LayoutMenuHomePage
                title="Dessert"
                subTitle="More Dessert"
            >
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
            </LayoutMenuHomePage>
        </main>
    );
};

export default DessertPage;
