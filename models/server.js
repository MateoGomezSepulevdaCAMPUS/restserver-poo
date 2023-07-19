const express = require('express');
const cors = require('cors');
const router = require('../routes/usuario.routes');
class Server {

    constructor(){
        this.app = express();
        
        this.port = process.env.PORT
        this.usuariosPath = "/api/usuarios";
        /* Middlewares */
        this.middlewares();
        /* Routing */
        this.routes();
    }

    middlewares(){
        /* Cors  */
        this.app.use(cors());

        /* Public Directory */
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'));       
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }
}

module.exports = Server;