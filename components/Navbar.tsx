import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {SearchIcon} from "./SearchIcon.jsx";

const Component = () => {

  return (
    <Navbar className="bg-blue-800 min-h-[110px] text-white" position="static">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-2xl text-inherit">Habilitaciones Rosario</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6 ml-12" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="blue-400" className="text-lg">
            Preguntas Frecuentes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-lg">
            Regularizaciones
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
        <a href="https://api.whatsapp.com/send/?phone=%2B543415883040&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <Button as="a" color="success" className="text-xl text-white bg-blue-600 px-8 py-3" href="#" variant="solid">
            Wats App
          </Button>
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Component;
