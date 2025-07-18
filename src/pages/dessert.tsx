import LayoutMenuHomePage from "../components/LayoutMenuHomePage";
import CardMenu from "../components/cardMenu";

const DessertPage = () => {
    return(
        <LayoutMenuHomePage
            title="Dessert"
            subTitle="More Dessert"
            bgPath="/assets/bg-dessert.jpg"
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

export default DessertPage;
