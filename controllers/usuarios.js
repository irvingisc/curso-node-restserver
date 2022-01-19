const { response } = require( 'express' );


const usuariosGet = (req, res = response) => {  
    
    const { q = 'No gretting', nombre = 'No name', apikey } = req.query;
    
    res.json({                
        msg: "get API - controller",
        q,
        nombre,
        apikey
    });
};

const usuariosPost = (req, res) => {  
    
    const body = req.body;
    
    res.json({                
        msg: "post API - controller",
        body
    });
};

const usuariosPut = (req, res) => {  
    
    const { id } = req.params;
    
    res.json({                
        msg: "put API - controller",
        id
    });
};

const usuariosPatch = (req, res) => {  
    res.json({                
        msg: "patch API - controller"
    });
};

const usuariosDelete = (req, res) => {  
    res.json({                
        msg: "delete API - controller"
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}