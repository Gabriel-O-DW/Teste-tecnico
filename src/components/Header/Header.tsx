import { MagnifyingGlass } from "@phosphor-icons/react";
import { HeaderContainer } from "./style";
import logo from "@/assets/logo.svg";
import userIcon from "@/assets/userIcon.svg";
import { MenuButton } from "../MenuButton/MenuButton";
import MenuMobile from "../MenuMobile.tsx/MenuMobile";

interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    const menuOptions = [
        {
            title: "Categorias",
            path: "/dashboard",
            submenu: [
                { title: "Submenu 1", path: "/dashboard/category/1" },
                { title: "Submenu 2", path: "/dashboard/category/2" },
                { title: "Submenu 3", path: "/dashboard/category/3" },
            ],
        },
        {
            title: "Assuntos",
            path: "/training/studentSelection",
            submenu: [
                { title: "Submenu 1", path: "/dashboard/Assuntos/1" },
                { title: "Submenu 2", path: "/dashboard/Assuntos/2" },
                { title: "Submenu 3", path: "/dashboard/Assuntos/3" },
            ],
        },
        {
            title: "Outras páginas",
            path: "/training/areaSelection",
            submenu: [
                { title: "Submenu 1", path: "/dashboard/outras/1" },
                { title: "Submenu 2", path: "/dashboard/outras/2" },
                { title: "Submenu 3", path: "/dashboard/outras/3" },
            ],
        },
        {
            title: "Minha Lista",
            path: "/performance",
        },
        {
            title: "Lives",
            path: "/performance",
        },
        {
            title: "Fórum",
            path: "/performance",
        },
    ];
    return (
        <HeaderContainer className={className}>
            <div className="container">
                <MenuMobile data={menuOptions} />
                <a rel="stylesheet" href="/">
                    <img src={logo} alt="Logo" />
                </a>
                <div className="center">
                    {menuOptions.map((option, index) => (
                        <MenuButton title={option.title} key={index} submenu={option.submenu} />
                    ))}
                </div>
                <div className="rigth">
                    <MagnifyingGlass size={24} color="#fff" />
                    <img src={userIcon} alt="Logo" />
                </div>
            </div>
        </HeaderContainer>
    );
}
