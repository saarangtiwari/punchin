const userRoutes = require('./user');
const punchInRoutes = require('./punchIn');

module.exports = app => {

    app.get('/', (req, res) => res.status(200).json('Welcome to Punchin API.'));
    app.use('/api/user', userRoutes);
    app.use('/api/punchin', punchInRoutes);
    app.get('/*', (req, res) => {
        res.status(404).json('Resource Not Found !!!');
    });
}