const isProd = process.env.NODE_ENV === "production";

module.exports = {
   
    images: {
        loader: 'akamai',
        path: '',
      },
      basePath: '/nxt-bg',
      assetPrefix: isProd ? "/nxt-bg/" : "",
  }