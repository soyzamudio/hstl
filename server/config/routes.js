'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/contact', config: require('../routes/general/contact')},

  {method: 'get', path: '/apartments', config: require('../routes/apartments/index')},
  {method: 'get', path: '/apartments/new', config: require('../routes/apartments/new')},
  {method: 'post', path: '/apartments/create', config: require('../routes/apartments/create')},
  {method: 'get', path: '/apartments/{apartmentId}', config: require('../routes/apartments/show')},
  {method: 'post', path: '/apartments/{apartmentId}/rent', config: require('../routes/apartments/rent')},

  {method: 'get', path: '/renters', config: require('../routes/renters/index')},
  {method: 'get', path: '/renters/new', config: require('../routes/renters/new')},
  {method: 'post', path: '/renters/create', config: require('../routes/renters/create')},

  {method: 'get', path: '/admin', config: require('../routes/admin/index')},
  {method: 'post', path: '/admin/{renterId}/evict', config: require('../routes/admin/evict')}
];
