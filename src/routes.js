const {
  addNoteHandler,
  getAllNoteHandler,
  getNotebyIdHandler,
  editNotebyIdHandler,
  deleteNotebyIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotebyIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotebyIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotebyIdHandler,
  },
];

module.exports = routes;
