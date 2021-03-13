module.exports = {
   plugins: [
      'gatsby-plugin-sass',
      {
         resolve: `gatsby-plugin-google-fonts`,
         options: {
            fonts:[
               'Roboto\: 300, 400, 500, 700, 900',
               'Lobster Two\: 400, 400i, 700, 700i'
            ],
            display: 'swap'
         }
      }
      
      //insert more plugins here
      ]
}