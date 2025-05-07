'use client'
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { ChevronDown } from "lucide-react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { Button } from "@heroui/button";
import Link from "next/link";

export const Navbar = () => {

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">TADS SHOP</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                endContent={<ChevronDown />}
                variant="light"
                radius="sm"
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                Cadastro
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="grupo" href="/grupo">
                 Grupo
              </DropdownItem>
              <DropdownItem key="marca">
               <Link href="/marca">Marca</Link>
              </DropdownItem>
              <DropdownItem key="produto">
               <Link href="/produto">Produto</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                endContent={<ChevronDown />}
                variant="light"
                radius="sm"
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                Movimento
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="compra">Compra</DropdownItem>
              <DropdownItem key="venda">Venda</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      {/** Menu responsivo para resoluções de tela menores */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            Menu
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
      {/** fim- Menu responsivo para resoluções de tela menores */}
    </HeroUINavbar>
  );
};
