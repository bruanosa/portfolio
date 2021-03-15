import React from 'react';
import Helmet from 'react-helmet';

export default function SEO() {
    return (
        <div>
            <Helmet>
                <title>Bryan Ruano's Portfolio</title>
                <meta name="description" content="Bryan Ruano's portfolio site where you can see his latest work"/>
                <meta name="keywords" content="fullstack, developer, frontend, gatsby, web development, react, portfolio, backend"/>
                <meta property="og:title" content="Bryan Ruano's Portfolio"/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="Bryan Ruano's portfolio site where you can see his latest work"/>
                <meta property="og:image" content=""/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:url" content=""/>
                <link rel="canonical" href=""/>
            </Helmet>
        </div>
    )
}
