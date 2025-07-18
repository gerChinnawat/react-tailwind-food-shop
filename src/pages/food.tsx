import CardMenu from "../components/cardMenu";
import LayoutMenuHomePage from "../components/LayoutMenuHomePage";

const FoodPage = () => {
    return (
        <main className={`bg-[url('/assets/bg-food.jpg')] bg-cover bg-center text-center h-[90svh] my-[10svh] relative`}>
            <LayoutMenuHomePage
                title="Food"
                subTitle="More Food"
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

export default FoodPage;