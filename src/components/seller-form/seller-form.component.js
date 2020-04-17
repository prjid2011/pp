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
      this.name = 'Seller Form';
      this.clear = function() {
        this.sellerName = ''
      }
      this.submit = function() {
        console.log(this.currency);
        let tempData = {
          sellerName: this.sellerName,
          currencies: this.currencies,
          office: this.office,
          dealTypeBided: this.dealTypeBided,
          dealTypeGuaranteed: this.dealTypeGuaranteed,
          contactName: this.contactName,
          email: this.email	
        }
        sellerService.save(tempData);
      }
      this.sellerList = sellerService.list();
    }],
  })
  .name;
