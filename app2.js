const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<h1>Table Related information about popular places  visiting</h1>')
      res.write('<table  border = "1";><tr><th> location </th><th>number of hours</th><th>money expected to pay</th></tr>')
      res.write('<tr><td>Statue of liberty</td><td> 10</td><td> 200</td></tr>')
      res.write('<tr><td>Lake Geneva</td><td> 08</td><td> 100</td></tr><tr><td>Niagara Falls</td> <td> 36</td><td> 600</td></tr><tr><td>Downtown</td><td> 08</td><td> 200</td> </tr></table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})