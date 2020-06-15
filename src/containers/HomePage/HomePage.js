import React, { useRef, useEffect, useState } from "react";

import HeroImage from "../../components/HeroImage";
import ProductList from "../ProductList";

export default function HomePage() {
  const refHero = useRef(null);
  const refProduct = useRef(null);

  // Adds the scroll event listener to the page
  // TODO: Remove event listener on unmount
  useEffect(() => {
    refHero.current.addEventListener("wheel", handleOnScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnScroll = (e) => {
    /* Se o usuário está scrollando para baixo na div hero: tirar o scroll da página 
    e escrollar para a posição final*/
    // ref.current.scrollIntoView({ behavior: "smooth" });
    // refProduct.current.scrollIntoView({ behavior: "smooth", block: "end" });
    // ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
    // window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <div>
      <div ref={refHero}>
        <HeroImage />
      </div>
      <div ref={refProduct}>
        <ProductList />
      </div>
    </div>
  );
}
