import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import arrow from "@/assets/arrow.svg"
import { MenuButtonContainer } from "./styles";

interface MenuButtonProps {
    title: string;
    submenu?: { title: string; path: string }[];
}

export function MenuButton({ title,submenu }: MenuButtonProps) {
    const [dropDown, setDropDown] = useState<null | HTMLElement>(null);
    const open = Boolean(dropDown);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setDropDown(event.currentTarget);
    };

    const handleClose = () => {
        setDropDown(null);
    };

    return (
        <MenuButtonContainer>
            <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                {title} {submenu !== undefined && <img src={arrow} alt="Seta para baixo"/>}
            </Button>
            {submenu !== undefined && (
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        "aria-labelledby": "fade-button",
                    }}
                    anchorEl={dropDown}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    {submenu.map((item, index) => (
                        <MenuItem key={index} onClick={handleClose}>
                            {item.title}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </MenuButtonContainer>
    );
}
