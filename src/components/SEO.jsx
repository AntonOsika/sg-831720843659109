import Head from 'next/head'

export default function SEO({ title, description, ogImage }) {
  const siteTitle = "Lovable - Software that builds software"
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || "/api/placeholder/1200/630"} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || "/api/placeholder/1200/630"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}