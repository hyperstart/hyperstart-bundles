/**
 * Type for Map<String, T>.
 */
export interface StringMap<T = any> {
  [key: string]: T
}

/**
 * Transform possible error objets in a message.
 */
export const getErrorMessage = (error: string | Error): string => {
  if (typeof error === "string") {
    return error
  }
  return error.message
}

export function getExtension(id: string): string {
  const segments = (id || "").split(".")
  if (segments.length === 0) {
    throw new Error('Cannot get extension from bundle ID: "' + id + '"')
  }
  return segments[segments.length - 1]
}
export function getId(name: string, version: string) {
  return `${name}@${version}`
}

export function sanitize(pkg: string): string {
  return pkg.replace("/", "%2F")
}
