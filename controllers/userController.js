const getUsers = (req, res) => {
    res.status(200).json({ message: 'Get all users' });
  };
  
  const createUser = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: `User created: ${name}, ${email}` });
  };
  
  module.exports = { getUsers, createUser };