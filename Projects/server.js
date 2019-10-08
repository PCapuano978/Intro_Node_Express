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

var fs = require('fs')
app.engine('ntl', function (filePath, options, callback) {

    fs.readFile(filePath, function (err, content) {
        if (err) return callback(err)

        var rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
        return callback(null, rendered)
    })
})

app.set('views', './views')
app.set('view engine', 'ntl')