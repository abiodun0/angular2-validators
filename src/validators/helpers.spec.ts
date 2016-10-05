import * as helper from './helpers';

describe('getValidator', () => {
    it('sholund return a function', () => {
       const getValidatorFunciton = helper.getValidator('named');
       expect(typeof getValidatorFunciton).toEqual('function');
    })
})
