import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {SearchIcon} from "./SearchIcon.jsx";

const Footer = () => {
    return (
      <Navbar className="bg-slate-900 min-h-[110px] text-white" isBordered position="static">
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-2xl text-inherit">Habilitaciones Rosario</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-6 ml-12">
            <NavbarItem>
              <Link color="foreground" href="#" className="text-lg text-white">
                Servicios
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="blue-400" className="text-lg text-white">
                Preguntas Frecuentes
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="text-lg text-white">
                Regularizaciones
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
  
        <NavbarContent as="div" className="items-center" justify="end">
       
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    );
}

export default Footer;
