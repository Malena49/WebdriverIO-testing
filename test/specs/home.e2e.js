const Homepage = require('../pageobjects/home.page');

describe('home page element', () => {
    it('should have 44 elements', async () => {
        await Homepage.open();
     await expect(Homepage.list).toBeElementsArrayOfSize(44);
        
    });

});