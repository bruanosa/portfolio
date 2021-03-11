module.exports = {
   plugins: [
      'gatsby-plugin-sass',
      {
         resolve: `gatsby-plugin-prefetch-google-fonts`,
         options: {
           fonts: [
             {
               family: `Roboto`,
               variants: [`300` , `400`, `700`, `900`]
             },
             {
                family: `Lobster`,
                variants: [`400`, `700`]
             }
            ],
         }
      }
      //insert more plugins here
      ]
}