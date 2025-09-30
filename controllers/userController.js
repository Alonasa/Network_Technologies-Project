exports.registerUser =  (req, res) => {
    res.status(200).json({
        status: 'success',
    });
}

exports.getUser = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'respond with a resource'
    })
}

exports.createUser = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        status: 'great!',
    })
}