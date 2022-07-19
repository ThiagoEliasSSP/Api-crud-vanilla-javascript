const userController = require('./controllers/UserController');

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: userController.listUsers,
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: userController.getUserById,
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: userController.createUser,
  },
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: userController.updateUser,
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: userController.deleteUser,
  },
];
