import CardMenu from "../components/cardMenu";
import LayoutMenuHomePage from "../components/LayoutMenuHomePage";

const FoodPage = () => {
    return (
        <LayoutMenuHomePage
            title="Food"
            subTitle="More Food"
            bgPath="/assets/bg-food.jpg"
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

export default FoodPage;