import * as React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { X, List } from "@phosphor-icons/react";
import { MenuMobileContainer } from "./styles";

interface MenuMobileProps {
    data: { title: string; submenu?: { title: string; path: string }[] }[];
}

export default function MenuMobile({ data }: MenuMobileProps) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <MenuMobileContainer>
            <button
                aria-label="open drawer"
                onClick={handleDrawerOpen}
            >
                <List size={24} color="#fff"/>
            </button>
            <Drawer
                variant="persistent"
                anchor="top"
                open={open}
                PaperProps={{
                    className: "drawer",
                    sx: {
                        width: "100%", 
                        height: "100vh", 
                        overflow: "auto",
                    },
                }}
            >
                <IconButton onClick={handleDrawerClose}>
                    <X size={24} color="#fff"/>
                </IconButton>
                <div>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{ marginBottom: "1rem" }}
                        >
                            <span>{item.title}</span>
                            {item.submenu && item.submenu.length > 0 && (
                                <ul>
                                    {item.submenu.map((subitem, subIndex) => (
                                        <li key={subIndex}>{subitem.title}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </Drawer>
        </MenuMobileContainer>
    );
}
