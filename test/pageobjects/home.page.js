const Page = require('./page');
class HomePage extends Page {
    get list (){
        return $$('ul li');
    }
    open () {
        return super.open('');
    }
}
module.exports = new HomePage();