import capitalizeFirstLetter from './stringFunctions'
import concatenateStrings from './stringFunctions'
import returnLastWord from './stringFunctions'


describe('capitalization tests', () => {

    it('water should equal Water', () => {
        expect(capitalizeFirstLetter('water')).toBe('Water')
    })

    it('water should equal water', () => {
        expect(capitalizeFirstLetter('water')).not.toBe('water')
    })

})

describe('concatenation tests', () => {
    
    it('water, boy, should equal waterboy', () => {
        expect(concatenateStrings('water','boy')).toBe('waterboy')
    })

    it('water, boy, should not equal water boy', () => {
        expect(concatenateStrings('water','boy')).not.toBe('water boy')
    })

})

describe('second word tests', () => {
    
    it('water be waterin should equal be', () => {
        expect(returnLastWord('water be waterin')).toBe('be')
    })

    it('water be waterin should not equal waterin', () => {
        expect(returnLastWord('water be waterin')).not.toBe('waterin')
    })

})