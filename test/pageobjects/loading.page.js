const Page = require('../pageobjects/page')
class loading extends Page {
    get btnSart() {
        return $('#start>button')
    }
    get afterloading() {
        return $('#finish h4')
    }
    get loadingbar(){
        return $('#loading')
    }
    open() {
        return super.open('dynamic_loading/1')
    }

}
module.exports = new loading();