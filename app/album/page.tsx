// app/about/page.tsx

import React from "react";
import { listenNowAlbums } from "@/components/data/albums";
import { AlbumArtwork } from "@/components/album-art-work";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const AboutPage = () => {
  return (
    <div className="flex items-center justify-between m-8">
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {listenNowAlbums.map((album) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default AboutPage;
