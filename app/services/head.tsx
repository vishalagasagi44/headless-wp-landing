export default function Head() {
  return (
    <>
      <title>Our Services | Headless WP Landing</title>
      <meta
        name="description"
        content="Explore our services: Web Development, SEO, and E-commerce solutions built with Next.js and Headless WordPress."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="canonical"
        href="https://headless-wp-landing-hoct-f7ovrv9st-vishalagasagi44s-projects.vercel.app/services"
      />

      {/* OpenGraph */}
      <meta property="og:title" content="Our Services | Headless WP Landing" />
      <meta
        property="og:description"
        content="Explore our services: Web Development, SEO, and E-commerce solutions."
      />
      <meta
        property="og:url"
        content="https://headless-wp-landing-hoct-f7ovrv9st-vishalagasagi44s-projects.vercel.app/services"
      />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Our Services | Headless WP Landing" />
      <meta
        name="twitter:description"
        content="Explore our services: Web Development, SEO, and E-commerce solutions."
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Services | Headless WP Landing",
            "description":
              "Explore our services: Web Development, SEO, and E-commerce solutions built with Next.js and Headless WordPress.",
            "publisher": {
              "@type": "Organization",
              "name": "Headless WP Landing"
            }
          }),
        }}
      />
    </>
  );
}
