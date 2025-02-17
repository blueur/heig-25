import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";
import type { Options } from "sass";

const config: Config = {
  title: "DOP",
  tagline: "Cours de DevOps à la HEIG-VD",
  favicon: "img/favicon.ico",

  url: "https://heig.davidtang.ch",
  baseUrl: "/",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },
  future: {
    experimental_faster: true,
  },
  plugins: [
    [
      "docusaurus-plugin-sass",
      {
        sassOptions: {
          silenceDeprecations: ["import"],
          quietDeps: true,
        } satisfies Options<"sync">,
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.scss",
        },
        gtag: {
          trackingID: "G-H1XQKZ3SHN",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "DOP",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/lessons",
          html: "<i class='ph ph-presentation'></i> Cours",
          position: "left",
        },
        {
          to: "docs/labs",
          html: "<i class='ph ph-flask'></i> Laboratoires",
          position: "left",
        },
        {
          href: "https://github.com/blueur",
          position: "right",
          className: "ph ph-github-logo",
        },
        {
          href: "https://gitlab.com/blueur",
          position: "right",
          className: "ph ph-gitlab-logo-simple",
        },
        {
          href: "https://www.linkedin.com/in/davidtangch/",
          position: "right",
          className: "ph ph-linkedin-logo",
        },
        {
          href: "mailto:david.tang@heig-vd.ch",
          position: "right",
          className: "ph ph-envelope-simple",
        },
      ],
    },
    footer: {
      copyright: `<div xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://heig.davidtang.ch/" target="_blank">DOP</a> © 2025 by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://davidtang.ch" target="_blank">David Tang</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0</a></div>`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
