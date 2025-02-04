import Logo from "../Logo/logo";
import Nav from "../Menu/menu";
const Header = () => {
    return(
        <header className="bg-black stick top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
            <Logo/>
            <Nav/>

        </header>

    );
};

export default Header;