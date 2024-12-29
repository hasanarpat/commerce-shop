import React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCarousel from "@/components/shared/ProductCarousel";
import { array3 } from "../../data";
import Hero from "@/components/layout/Hero/Hero";

export interface Artwork {
  artist: string;
  art: string;
}

export const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];
const Trends = () => {
  return (
    <main>
      <div className="p-4 flex flex-col items-start lg:items-center">
        <p className="text-2xl mb-2 font-bold">Trends</p>

        <Hero
          image="https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          logo="/assets/images/wolverine-logo.svg"
          title="WOLVERINE"
          text1="WOLVERINDE"
          text2="TREND SEZON ÜRÜNLERİ"
          text3="SEZON İNDİRİMLERİ"
          text4="20%"
          isProduct={false}
        />

        <ScrollArea className="max-w-md md:max-w-4xl lg:max-w-7xl whitespace-nowrap rounded-md border mx-auto">
          <div className="flex w-max space-x-4 p-4">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={artwork.art}
                    alt={`Photo by ${artwork.artist}`}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={300}
                    height={400}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold">{artwork.artist}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <Hero
          image="https://images.pexels.com/photos/1646311/pexels-photo-1646311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          logo="/assets/images/ns-02.svg"
          title="NORTH SAILS"
          text1=""
          text2=""
          text3="BORN FROM"
          text4="OCEAN"
        />

        <ProductCarousel
          array={array3}
          isProduct={true}
          title="Explore Similar to Your Preferences"
        />
      </div>
    </main>
  );
};

export default Trends;
