import { NODE_ENVS, isNodeEnv } from '../src/nodeEnv'

describe('NodeEnv', () => {
    describe('isNodeEnv', () => {
        test.each(NODE_ENVS)('%s is a valid Node Environment', (env) => {
            expect(isNodeEnv(env)).toBeTruthy()
        })
    })
})
