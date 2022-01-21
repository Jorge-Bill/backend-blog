module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fbf9c3194f4e9576874364d25dbcab00'),
  },
});
