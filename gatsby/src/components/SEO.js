import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const SEO = ({ location, description, title, image }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          twitter
          defaultIcon: icon
          siteUrl
        }
      }
    }
  `);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    twitter,
    defaultIcon,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${location.pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en" />
      <meta name="description" content={seo.description} />

      {seo.siteUrl && <meta property="og:url" content={seo.url} />}

      <link rel="icon" type="image/svg+xml " href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={seo.url} />

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {/* Open Graph */}
      {location && <meta property="og:url" content={seo.url} />}
      <meta property="og:image" content={image || defaultIcon} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitter && <meta name="twitter:creator" content={twitter} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      <meta property="twitter:image" content={image || defaultIcon} />
    </Helmet>
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
