import angular from 'angular';
import template from './home.tpl.html';
import sellerForm from '../../components/seller-form/seller-form.component';

export default angular
  .module('home.view', [
    sellerForm,
  ])
  .component('home', {
    template,
  })
  .name;
