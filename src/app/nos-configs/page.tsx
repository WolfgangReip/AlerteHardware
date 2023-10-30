"use client";
import React, { FC, useState, useEffect, ReactElement } from "react";
import NavBar from "../components/NavBar";
import Bandeau from "../components/Bandeau";
import ProductsContainer from "../components/nos-configs/ProductsContainer";
import { Configuration } from "../components/nos-configs/types";
import { client } from "../../utils/sanity/client";

const NosConfigs: FC = (): ReactElement => {
  const descript =
    "Retrouvez toutes nos configurations aux meilleurs prix pour tous les budgets";
  const couleur = "bg-gradient-to-r from-joli-mauve to-indigo-500";

  const [products, setProducts] = useState<Configuration[]>([]);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      const fetchedProducts = await client.fetch<
        Configuration[]
      >(`*[_type == "configuration"]{
        _id,
        prix_config,
        slogan,
        "composants": liste_composants[] {
          composant_reference->{
            _id,
            nom,
            icon,
          },
          prix,
          url,
          nom
        }
      }`);
      if (fetchedProducts !== null) {
        setProducts(fetchedProducts);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      <main className="mt-20 pt-6">
        <Bandeau titre="Nos Configs" description={descript} couleur={couleur} />
        <ProductsContainer products={products} />
      </main>
    </>
  );
};

export default NosConfigs;
