exports.userSignupValidator = (req, res, next) => {
  req.check("name").notEmpty()
    .withMessage("Please, Name is required");
  req.check("surnames").notEmpty()
    .withMessage("Please, Surnames is required");
  req.check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Enter a valid email")
    .isLength({
      min: 4,
      max: 32
    });
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

exports.userLoginValidator = (req, res, next) => {
  req.check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Enter a valid email")
    .isLength({
      min: 4,
      max: 32
    });
  req.check("password", "Password is required").notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};


exports.tweetCreateValidator = (req, res, next) => {
  req.check("tweet").notEmpty()
    .withMessage("Please, Message is required");
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};


