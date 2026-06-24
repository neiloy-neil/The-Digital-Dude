import { Helmet } from 'react-helmet-async';

interface StructuredData {
  [key: string]: any;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service' | 'organization' | 'product' | 'faqpage' | 'blogposting';
  structuredData?: StructuredData;
  author?: string;
  datePublished?: string;
  dateModified?: string;
}

const SEO = ({ 
  title = 'Custom Software Development & AI Solutions | The Digital Dude',
  description = 'Transform your business with custom software, AI solutions & SaaS platforms. Expert developers delivering measurable ROI & scalable digital products.',
  keywords = 'software development, custom software, SaaS development, AI solutions, web development, mobile apps, digital transformation, React, Node.js, Python, machine learning',
  image = 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b33d?w=1200&h=630&fit=crop',
  url = 'https://www.digitaldude.online',
  type = 'website',
  structuredData,
  author,
  datePublished,
  dateModified
}: SEOProps) => {
  const siteTitle = 'The Digital Dude';
  // If title already includes site name, use as is. Otherwise, append site name.
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Digital Dude",
    "description": "Transform your business with custom software, AI solutions & SaaS platforms. Expert developers delivering measurable ROI & scalable digital products.",
    "url": "https://www.digitaldude.online",
    "logo": "https://www.digitaldude.online/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-123-456-789",
      "contactType": "Sales",
      "email": "info@digitaldude.co.uk"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    },
    "sameAs": [
      "https://github.com/the-digital-dude",
      "https://linkedin.com/company/the-digital-dude",
      "https://twitter.com/thedigitaldude"
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Custom Software Development Services",
        "description": "From custom SaaS platforms to AI integration & mobile apps. We build scalable software solutions that drive growth & solve complex business challenges."
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="The Digital Dude" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="The Digital Dude" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@thedigitaldude" />
      <meta name="twitter:creator" content="@thedigitaldude" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* Article Schema for Blog Posts */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "author": {
              "@type": "Person",
              "name": author || "The Digital Dude Team"
            },
            "datePublished": datePublished || new Date().toISOString(),
            "dateModified": dateModified || new Date().toISOString(),
            "image": image,
            "publisher": {
              "@type": "Organization",
              "name": "The Digital Dude",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.digitaldude.online/logo.svg"
              }
            }
          })}
        </script>
      )}

      {/* FAQ Schema */}
      {type === 'faqpage' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": []
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;