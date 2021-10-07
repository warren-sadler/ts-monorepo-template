import { greeting } from '../src'

describe('greeting', () => {
    it('returns expected message', () => {
        expect(greeting()).toBe('Hello World!')
    })
})
