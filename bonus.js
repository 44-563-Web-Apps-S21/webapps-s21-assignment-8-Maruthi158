  
const http = require('http')    //Pull in a useful node package
//Try http.
const hostname = '127.0.0.1'    //Local host
const port = 3001               //Not assigned

const array1 = ['admirable', 'adorable', 'alluring', 'angelic', 'appealing', 'beauteous'];
      for (var i = 0; i < array1.length; i++) {
        console.log(array1[i]);
      }

const server =
  http.createServer(            //Creates the response loop
    (req, res) => {               //Anonymous function to handle the request

      min = Math.ceil(0);
      max = Math.floor(5);
      const rand = Math.floor(Math.random() * (max - min + 1) + min);

      console.log('rand -> '+ rand);
      console.log('Array value -> '+ array1[rand]);


      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> BONUS </title> </head>')
      res.write('<body>')
      res.write('<h1>')
      res.write('List of words')
      res.write('</h1>\n')
      res.write(`<b>random value from array given elements -> ${array1[rand]}</b>`)
      res.end('</body></html>')  //Close the response and provide content
    }                           //No return needed, we modified the res object we got
  )

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})