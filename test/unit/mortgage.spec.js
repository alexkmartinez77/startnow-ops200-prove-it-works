const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    it('Should have a mortgage function', () => {
        mortgage = new Mortgage();
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('Should calculate mortgage for Principal = $420,000, Interest 3.75, 30 years, 12 month period', () => {
        mortgage = new Mortgage(420000, 3.75, 30, 12);
        expect(mortgage.monthlyPayment()).to.equal('1945.09');
    });

    it('Should calculate mortgage for Principal = $670,000, Interest 4.25, 15 years, 12 month period', () => {
        mortgage = new Mortgage(670000, 4.25, 15, 12);
        expect(mortgage.monthlyPayment()).to.equal('5040.27');
    });

    it('Should calculate mortgage for Principal = $670,000, Interest 4.25, 15 years, 12 month period', () => {
        mortgage = new Mortgage(800000, 5.75, 30, 12);
        expect(mortgage.monthlyPayment()).to.equal('4668.58');
    });

});