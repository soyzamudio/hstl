'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/contact', config: require('../routes/general/contact')},

  {method: 'get', path: '/apartments', config: require('../routes/apartments/index')},
  {method: 'get', path: '/apartments/new', config: require('../routes/apartments/new')},
  {method: 'get', path: '/apartments/{apartmentId}/edit', config: require('../routes/apartments/edit')},
  {method: 'post', path: '/apartments/{apartmentId}', config: require('../routes/apartments/update')},
  {method: 'post', path: '/apartments/create', config: require('../routes/apartments/create')},
  {method: 'get', path: '/apartments/{apartmentId}', config: require('../routes/apartments/show')},
  {method: 'post', path: '/apartments/{apartmentId}/rent', config: require('../routes/apartments/rent')},

  {method: 'get', path: '/register', config: require('../routes/users/new')},
  {method: 'post', path: '/users/create', config: require('../routes/users/create')},
  {method: 'get', path: '/login', config: require('../routes/users/login')},
  {method: 'post', path: '/users/authentication', config: require('../routes/users/authentication')},
  {method: 'post', path: '/logout', config: require('../routes/users/logout')},

  {method: 'get', path: '/admin', config: require('../routes/admin/index')},
  {method: 'post', path: '/admin/{userId}/evict', config: require('../routes/admin/evict')}
];
