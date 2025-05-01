export function getOrigin(request?: Request): string {
  if (typeof window !== "undefined") {
    // Running in the browser
    return window.location.origin;
  }
  if (request) {
    // Running on server with a request
    return new URL(request.url).origin;
  }
  throw new Error("Cannot determine origin");
}
