module.exports = {
   siteMetadata: {
      title:  `Bryan Ruano | Portfolio`,
      description: `This is my personal website where you can find my work`
   },
   plugins: [
      'gatsby-plugin-sass', 'gatsby-plugin-sharp','gatsby-transformer-sharp', 'gatsby-plugin-image', 'gatsby-plugin-react-helmet',
      {
         resolve: `gatsby-plugin-google-fonts`,
         options: {
            fonts:[
               'Roboto\: 300, 400, 500, 700, 900',
               'Sansita Swashed\: 300, 400, 500, 600, 700, 800, 900'
            ],
            display: 'swap'
         }
      },
      {
         resolve:   `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`
         }
      },
      
      //insert more plugins here
      ]
}