/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

const NotesHandler = require('./handler')
const routes = require('./routes')

module.exports = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, { service, validator }) => {
        const notesHandler = new NotesHandler(service, validator)
        server.route(routes(notesHandler))
    }
}
