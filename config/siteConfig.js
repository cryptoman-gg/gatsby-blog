const config = {
  author: 'takutyan-ut', // Site owner
  siteTitle: '東大卒億り人タクちゃんの仮想通貨情報局', // Site title.
  siteTitleShort: 'タクちゃんの部屋', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: '東大卒億り人タクちゃんの仮想通貨情報局', // Alternative site title for SEO.
  siteLanguage: 'jp', // Site language.
  siteDescription: '東大を卒業し、仮想通貨投資で億り人になったタクちゃんが、仮想通貨の始め方や取引方法を解説します！', // Website description used for RSS feeds/meta description tag.
  siteLogo: 'static/favicons/favicon.png', // Logo used for manifest.
  siteUrl: 'https://gatsby-starter-takutyan-ut.netlify.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '214355523020609', // FB Application ID for using app insights
  siteGATrackingID: 'G-J8NNQBXSXT', // Tracking code ID for google analytics.
  disqusShortname: 'gatsbyjs-starter-papan01', // Disqus shortname.
  twitterUserName: 'takutyan_ut', // twitter creator for SEO
  datePublished: '2021-08-12', // for SEO
  copyrightYear: '2021', // for SEO
  postsPerPage: 4, // posts per page used in gatsby-node.js
  // Links to social profiles you want to display in the footer.
  rrssb: [
    {
      label: 'github',
      url: 'https://github.com/cryptoman-gg',
      iconClassName: 'fab fa-github',
    },
    {
      label: 'youtube',
      url: 'https://www.youtube.com/channel/UCmXYs5LoNUMLXiqe99e-FHQ',
      iconClassName: 'fab fa-youtube',
    },
    {
      label: 'twitter',
      url: 'https://twitter.com/takutyan_ut',
      iconClassName: 'fab fa-twitter',
    },
    {
      label: 'instagram',
      url: 'https://www.instagram.com/takutyan_ut/',
      iconClassName: 'fab fa-instagram',
    },
  ],
  // Links to pages you want to display in the navigation bar.
  navbarLinks: [
    {
      label: 'new',
      url: '/',
      iconClassName: 'fas fa-book-open',
    },
    {
      label: 'Archives',
      url: '/archives',
      iconClassName: 'fa fa-book-open',
    },
    {
      label: 'Categories',
      url: '/categories',
      iconClassName: 'fa fa-list-alt',
    },
    {
      label: 'About',
      url: '/about',
      iconClassName: 'fa fa-address-card',
    },
  ],
};
config.copyright = `Copyright © ${config.copyrightYear}. ${config.author}`;

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
