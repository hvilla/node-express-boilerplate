import app from "./src/api/app";
import colors from 'colors';
import morgan from 'morgan';

const path = require("path");

require("dotenv").config({ path: path.join(__dirname,"./src/config/.env") });

/*
    @apiVersion = Current Version Running for REST API
    @port = Port of the express API
    @appMode = Toggles between Developer/Production Server
*/

const apiVersion = process.env.API_VERSION;
const port = process.env.PORT || 9000;
const appMode = process.env.MODE;

//Adds morgan logger support
app.use(morgan('dev'));

//Gets the current version supported for the API
app.get(`/api/version`, function(req, res) {
  res.status(200).send(`You are using API Version:${apiVersion}`);
});

app.listen(port, function() {
  console.log(
    colors.blue(`${appMode} Server running on http://localhost:${port} Ver.${apiVersion}`)
  );
});
