import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';



const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon}
        />
        {/* theme meta */}
        <meta name="theme-name" content="next-boilerplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <Script strategy="lazyOnload" id="google-analytics">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MK8ZCMWN');
  `}
</Script>


      </Head>
      <body className="dark:bg-[#1b1718] dark:text-white">
        <Main />
        {/* <TwSizeIndicator /> */}
        <NextScript />
        <Analytics />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MK8ZCMWN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }} // Use an object for style
          ></iframe>
        </noscript>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js" async></script>
      </body>

    </Html>
  );
};

export default Document;
