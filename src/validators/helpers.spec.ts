import * as helper from './helpers';

describe('getValidator', () => {
    it('sholund retunr a function', () => {
       const getValidatorFunciton = helper.getValidator('named');
       expect(typeof getValidatorFunciton).toEqual('function');
    })
})
