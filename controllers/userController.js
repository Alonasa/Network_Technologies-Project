exports.registerUser = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "respond with a resource",
  });
};

exports.checkBody = (req, res) => {
  if (req.body.name && req.body.email) {
    res.status(200).json({
      status: "success",
      message: "User registered successfully",
    });
  } else {
    res.status(400).json({
      status: "error",
      message: "You did not provide all the required fields",
    });
  }
};

exports.createUser = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "great!",
  });
};
