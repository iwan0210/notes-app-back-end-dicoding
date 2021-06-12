/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
const InvariantError = require('../../exceptions/InvariantError')
const { NotePayloadSchema } = require('./schema')

const NotesValidator = {
    validateNotePayload: (payload) => {
        const validationResult = NotePayloadSchema.validate(payload)

        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message)
        }
    }
}
module.exports = NotesValidator
