import CardMenu from "../components/cardMenu";
import LayoutMenuHomePage from "../components/LayoutMenuHomePage";
import imgBgFood from "/assets/bg-food.jpg";

const FoodPage = () => {
    return (
            <LayoutMenuHomePage
                title="Food"
                subTitle="More Food"
                imgPath={imgBgFood}
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