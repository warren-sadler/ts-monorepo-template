import { isOneOf } from './utility'

export const NODE_ENVS = ['test', 'development', 'production'] as const

export type NodeEnv = typeof NODE_ENVS[number]

export const isNodeEnv = (value: unknown) => isOneOf(value, NODE_ENVS)
