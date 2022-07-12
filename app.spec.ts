import {AbsoluteNumberCalculator} from "./app";

describe("testFindAbsolute",()=>{
    test('testFindAbsolute',()=>{
        let number = 0;
        let expected = 0;
        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});
describe("testFindAbsolute",()=>{
    test('testFindAbsolute',()=>{
        let number = -7;
        let expected = 7;
        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
});
describe("testFindAbsolute",()=>{
    test('testFindAbsolute',()=>{
        let number = 5;
        let expected = 5;
        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
    });
})