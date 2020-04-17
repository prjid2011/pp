export default {
  name: 'sellerService',
  factory: ['localStorageService', (localStorageService) => {
    let uid = 1;
    // Set the initial value of table 
    const sellerList = [{
      id: 1,
      sellerName: 'test1',
      currencies: 'INR',
      office: 'GBP',
      dealTypeBided: true,
      dealTypeGuaranteed: false,
      contactName: 'Pritesh',
      email: 'pritesh@gmai.com',
    }];
    
    // Save the seller data
    const save = (seller) => {
      if(!seller.id) {
        seller.id = uid++;
        sellerList.push(seller);
        localStorageService.set('sellers', sellerList);
      } else {
        // eslint-disable-next-line no-unused-vars
        let matchedSeller = sellerList.find(o => o.id === seller.id);
        matchedSeller = seller;
      }
    };

    // Get the seller data using specific id
    const get = (id) => {
      let matchedSeller = sellerList.find(o => o.id === id);
      return matchedSeller
    };

    // Get all list of seller
    const list = () => {
      return sellerList;
    };

    // Remove seller using id
    const remove = (id) => {
      let matchedSeller = sellerList.find(o => o.id === id);
      const index = sellerList.indexOf(matchedSeller);
      if (index > -1) {
        sellerList.splice(index, 1);
      }   
    };
    
    return {
      save,
      get,
      remove,
      list,
    };
  }]
}
