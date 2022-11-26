import React from "react";
import Head from "next/head";

const SEO = ({ title, description, image }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

SEO.defaultProps = {
  title: "Pokédex",
  description: "Explore the world of Pokémon",
  image:
    "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png",
};

export default SEO;
