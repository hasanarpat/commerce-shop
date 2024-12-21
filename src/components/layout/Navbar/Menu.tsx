import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { GiMetalHand } from "react-icons/gi";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Kasetler",
    href: "/categories/casettes",
    description: "From 60s to nowadays, casettes of all genres and bands",
  },
  {
    title: "Aksesuar",
    href: "/categories/accessories",
    description:
      "Zincir, deri ve kumaş bileklikler, küpeler, kolyeler ve diğerleri.",
  },
  {
    title: "Şapkalar",
    href: "/categories/hats",
    description: "Grup şapkaları ve daha fazlası...",
  },
  {
    title: "Ayakkabı-Postal",
    href: "/categories/shoes",
    description: "Postal, hard-punk ve kışlık, motorsiklet botları.",
  },
  {
    title: "Giyim",
    href: "categories//mode",
    description:
      "Her çeşit ve her beden için t-shirt, pantolon, şort, ceket ve daha fazlası...",
  },
  {
    title: "Müzik Aletleri",
    href: "/categories/instruments",
    description: "Metal yapmak için gerekli bütün müzik aletleri",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>New</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/trends"
                  >
                    <div className="text-5xl">
                      <GiMetalHand />
                    </div>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Trends - Bands
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Find every band and related items here...
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/categories/t-shirt" title="T-Shirts">
                T-shirts of all bands, all sizes and types.
              </ListItem>
              <ListItem href="/categories/pants" title="Pants">
                Pants of all bands, all sizes and types.
              </ListItem>
              <ListItem href="/categories/jackets" title="Jackets">
                Hard 70&apos;s, 80&apos;s, 90&apos;s and leather Jackets.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/trends" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Trends
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
