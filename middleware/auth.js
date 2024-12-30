const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === 'valid-token') {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = authMiddleware;