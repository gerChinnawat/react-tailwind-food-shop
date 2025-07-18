import LayoutMenuHomePage from "../components/LayoutMenuHomePage";
import CardMenu from "../components/cardMenu";

const DrinkPage = () => {

    return (
        <LayoutMenuHomePage
            title="Drink"
            subTitle="More Drink"
            bgPath="/assets/bg-drink.jpg"
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
    );
};

export default DrinkPage;