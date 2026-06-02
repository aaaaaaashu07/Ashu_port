"use client";
import { useState, useCallback } from "react";
import { PageKey } from "@/lib/types";
import CustomCursor from "@/components/CustomCursor";
import CityCanvas from "@/components/CityCanvas";
import PageOverlay from "@/components/PageOverlay";
import { useCursor } from "@/hooks/useCursor";

export default function Home() {
  const { pos, big, setCursorBig } = useCursor();
  const [activePage, setActivePage] = useState<PageKey | null>(null);

  const openPage = useCallback((page: PageKey) => {
    setActivePage(page);
  }, []);

  const closePage = useCallback(() => {
    setActivePage(null);
    setCursorBig(false);
  }, [setCursorBig]);

  return (
    <>
      <CustomCursor x={pos.x} y={pos.y} big={big} />

      <CityCanvas
        onBuildingClick={openPage}
        onCursorBig={setCursorBig}
      />

      <PageOverlay
        activePage={activePage}
        onClose={closePage}
        onHoverInteractive={setCursorBig}
      />
    </>
  );
}
