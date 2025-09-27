export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Organization",
      "name": "Headless WP Agency"
    }
  };

  return (
    <>
      <title>Services - Headless WP</title>
      <meta
        name="description"
        content="Explore our professional services powered by WordPress & Next.js."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}