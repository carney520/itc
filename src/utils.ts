export function hash(str: string) {
  let hash = 0
  if (str.length) {
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i)
      hash |= 0
    }
  }

  return hash.toString(36)
}
