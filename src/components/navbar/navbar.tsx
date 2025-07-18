import LinkItem from "./linkItem";

const Navbar = () => {
    return (
    <nav className="flex flex-row justify-between sticky top-0 bg-white p-5 w-[100%] h-[10svh] z-[999]">
        <div className="logo text-[1.5rem]">
            <h1>Taste Good</h1>
        </div>
        <ul className="flex flex-row gap-3 text-[1.25rem]">
            <LinkItem
                keyRef="home"
                text="Home"
            />
            <LinkItem
                keyRef="menu"
                text="Menu"
            />
            <LinkItem
                keyRef="reserve"
                text="Reserve"
            />
            <LinkItem
                keyRef="about"
                text="About"
            />
            <LinkItem
                keyRef="contact"
                text="Contact"
            />
        </ul>
    </nav>);
};

export default Navbar;