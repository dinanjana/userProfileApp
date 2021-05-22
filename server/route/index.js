const {
  loginUser, createUser, getUserByEmail, getUsers, updateUser,
} = require('../service/UserService');

const controllers = [
  {
    route: '/users',
    method: 'get',
    secured: false,
    handler: (req, res) => {
      getUsers().then((users) => {
        res.status(200).send(users);
      });
    },
  },
  {
    route: '/users',
    method: 'post',
    secured: false,
    handler: (req, res, next) => {
      createUser(req.body).then(() => {
        res.sendStatus(201);
      }).catch((e) => {
        res.status(400);
        next(e);
      });
    },
  },
  {
    route: '/users/:userId',
    method: 'get',
    secured: true,
    handler: (req, res) => {
      getUserByEmail(req.params.userId).then((users) => {
        if (!users.length) {
          res.sendStatus(404);
        }
        res.status(200)
          .send({ email: users[0].email, profilePic: users[0].profilePic, name: users[0].name });
      });
    },
  },
  {
    route: '/users/:userId',
    method: 'patch',
    secured: true,
    handler: (req, res) => {
      updateUser(req.params.userId, req.body).then((user) => {
        res.status(200).send(user);
      });
    },
  },
  {
    route: '/login',
    method: 'post',
    secured: false,
    handler: (req, res, next) => {
      getUserByEmail(req.body.email).then((users) => {
        const hash = loginUser(users[0], req.body.password);
        res.cookie('auth', hash).status(204).send();
      }).catch((e) => {
        res.status(401);
        next(e);
      });
    },
  },

];

module.exports = {
  controllers,
};
