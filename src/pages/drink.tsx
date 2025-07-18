import LayoutMenuHomePage from "../components/LayoutMenuHomePage";
import CardMenu from "../components/cardMenu";

const DrinkPage = () => {

    return (
        <main className={`bg-[url('/assets/bg-drink.jpg')] bg-cover bg-center text-center h-[90svh] my-[10svh] relative`}>
            <LayoutMenuHomePage
                title="Drink"
                subTitle="More Drink"
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

export default DrinkPage;