import type { GetStaticProps } from "next";
import Head from "next/head";
import { IProduct } from "../components/Product";
import ProductList from "../components/ProductList";
import halfmoonBettaPicture from "../public/halfmoon.jpg";
import dragonScaleBettaPicture from "../public/dragonscale.jpg";
import crowntailBettaPicture from "../public/crowntail.jpeg";
import veiltailBettaPicture from "../public/veiltail.jpg";

interface IProductListProps {
  products: IProduct[];
}

export default function Home({ products }: IProductListProps) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <ProductList products={products} />
      </main>
    </div>
  );
}

export const products: IProduct[] = [
  {
    id: "halfmoon",
    name: "Halfmoon Betta",
    price: 25.0,
    image: halfmoonBettaPicture,
    description:
      "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
    url: "/api/products/halfmoon",
  },
  {
    id: "dragonscale",
    name: "Dragon Scale Betta",
    price: 35,
    image: dragonScaleBettaPicture,
    description:
      "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
    url: "/api/products/dragonscale",
  },
  {
    id: "crowntail",
    name: "Crowntail Betta",
    price: 7.5,
    image: crowntailBettaPicture,
    description:
      "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
    url: "/api/products/crowntail",
  },
  {
    id: "veiltail",
    name: "Veiltail Betta",
    price: 5.0,
    image: veiltailBettaPicture,
    description:
      "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
    url: "/api/products/veiltail",
  },
];

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products,
    },
  };
};
