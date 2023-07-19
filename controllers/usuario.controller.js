const getUsers = (req, res)=>{
    res.status(500).json({
        "message":"home page"
    }); 
}

const postUsers = (req, res)=>{
    res.status(500).json({
        "message":"post api"
    });
}

const deleteUsers = (req, res)=>{
    res.status(500).json({
        "message":"delete api"
    });
}

const putUsers = (req, res)=>{
    res.status(500).json({
        "message":"update api"
    });
}

const patchUsers = (req, res)=>{
    res.status(500).json({
        "message":"patch api"
    });
}

module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    patchUsers
}