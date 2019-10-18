/**
 * Following the example from glitch:
 * (https://glitch.com/edit/#!/westmec-express-basics)
 * 1. Require and use express
 *      -  (https://expressjs.com/en/starter/hello-world.html)
 * 2. Use **express.static** to make images, css, client-side js available
 *      - (https://expressjs.com/en/starter/static-files.html)
 * 3. set up a template engine
 *      - (https://expressjs.com/en/guide/using-template-engines.html) 
 *      - (https://expressjs.com/en/resources/template-engines.html)
 *      - (https://expressjs.com/en/advanced/developing-template-engines.html)
 * 4. set routes
 *      - (https://expressjs.com/en/starter/basic-routing.html)
 *      - (https://expressjs.com/en/guide/routing.html)
 */

const express = require('express')
const app = express()
const port = 8080

// #2
app.use(express.static("public"));



/** TEMPLATE ENGINE
* Express Handlebars is setup here
* 2. Define the template engine (hbs aka handlebars)
     - The default layout is the main.hbs file
  3. Set the "view" / "template" engine
    - [app.engine](https://expressjs.com/en/api.html#app.engine)
    - [app.set](https://expressjs.com/en/api.html#app.set)
*/
const hbs = require('express-handlebars')({
    defaultLayout: 'main',
    extname: '.hbs'
  });
  app.engine('hbs', hbs);
  app.set('view engine', 'hbs');

const people = [
    {
        name: "Yehuda Katz",
        age: 17
    },
    {
        name: "Alan Johnson",
        age: 17
    },
    {
        name: "Charles Jolley",
        age: 17
    }
  ];

  app.get("/people", (req, res) => {
    get_data(URL,"people", res)
  });

// app.get('/', (req, res) => res.send('Why, hello there!'))
app.get("/", (request, response) => {
    response.render('index',  {
      title: "Patrick's Pokémon Package",
      people: people 
    });
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// app.use('/', (req, res) => res.send('<h2>Hello from the server endpoint!</h2>'));

