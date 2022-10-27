import add from './mathFunctions';
import divide from './mathFunctions';
import subtract from './mathFunctions';
import multiply from './mathFunctions';

describe('add tests', () => {

    it('2+2 should equal 4', () => {
        expect(add(2,2)).toBe(4)
    })

    it('2+3 should not equal 4', () => {
        expect(add(2,2)).not.toBe(4)
    })

})

describe('divide tests', () => {

    it('2/2 should equal 1', () => {
        expect(divide(2,2)).toBe(1)
    })

    it('2/3 should not equal 1', () => {
        expect(divide(2,2)).not.toBe(1)
    })

})

describe('multiply tests', () => {

    it('2x2 should equal 4', () => {
        expect(multiply(2,2)).toBe(1)
    })

    it('2x3 should not equal 4', () => {
        expect(multiply(2,2)).not.toBe(1)
    })

})

describe('subtract tests', () => {

    it('2-2 should equal 0', () => {
        expect(subtract(2,2)).toBe(0)
    })

    it('2-3 should not equal 0', () => {
        expect(subtract(2,2)).not.toBe(0)
    })

})