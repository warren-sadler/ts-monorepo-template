const IS_ONE_OF_HASH = new Map()

export function isOneOf<T>(
    value: unknown,
    collection: readonly T[]
): value is T {
    if (IS_ONE_OF_HASH.has(value)) return IS_ONE_OF_HASH.get(value)
    const result = collection.includes(value as T)
    IS_ONE_OF_HASH.set(value, result)
    return result
}
