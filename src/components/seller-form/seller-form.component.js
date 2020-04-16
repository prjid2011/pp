import angular from 'angular';
import template from './seller-form.tpl.html';
import './seller-form.scss';
import sellerService from '../../services/seller.service';

export default angular
  .module('sellerForm.component', [])
  .factory(sellerService.name, sellerService.factory)
  .component('sellerForm', {
    template,
    controller: ['sellerService', function (sellerService) {
      const obj = {
        id: 0,
        name: 'Steve John',
        email: 'john@gmail.com',
        password: 'John123',
        phone: '911-91-199-999'
      };
      this.name = 'test';
      // Need to updated dependency-injection for get the services
      sellerService.save(obj);
    }],
  })
  .name;
