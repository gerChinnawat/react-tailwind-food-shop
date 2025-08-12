import LayoutMenuHomePage from "../components/LayoutMenuHomePage";
import CardMenu from "../components/cardMenu";
import imgBgDrink from "/assets/bg-drink.jpg"

const DrinkPage = () => {

    return (
        <main className={`bg-[url('/assets/bg-drink.jpg')] bg-fixed bg-cover bg-center text-center h-[100vh] my-[10svh] relative`}>
            <LayoutMenuHomePage
                title="Drink"
                subTitle="More Drink"
                imgPath={imgBgDrink}
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