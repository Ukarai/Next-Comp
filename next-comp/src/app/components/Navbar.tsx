'use client';

import { Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { signOut } from "next-auth/react";

const NavBar = () => {
    return (
        <div className="flex flex-col justify-center bg-gray-600">
            <List>
                <Link key='signOut' className="flex justify-end p-0" onClick={() => signOut()}>
                    <ListItem key='signOut' className="w-fit p-0">
                        <ListItemButton className="py-0 px-2">
                            <ListItemText className="text-white rounded-xl px-2.5 py-1 font-bold bg-gray-800" primary='Sign out' />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </div >
    )
}

export default NavBar;