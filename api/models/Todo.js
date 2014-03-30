/**
 * Todo.js
 *
 * @description :: The Todo model
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    completed: {
      type: 'boolean',
      defaultsTo: false
    }
  }

};