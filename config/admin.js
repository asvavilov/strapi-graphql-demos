module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cad8c718640f84314fb8f5acb6454854'),
  },
});
