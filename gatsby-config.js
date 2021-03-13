module.exports = {
   plugins: [
      'gatsby-plugin-sass',
      {
         resolve: `gatsby-plugin-google-fonts`,
         options: {
            fonts:[
               'Roboto\: 300, 400, 500, 700, 900',
               'Sansita Swashed\: 300, 400, 500, 600, 700, 800, 900'
            ],
            display: 'swap'
         }
      }
      
      //insert more plugins here
      ]
}