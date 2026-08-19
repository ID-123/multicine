const SESSION_KEY = "multicine-session";

export function createSession() {
  sessionStorage.setItem(SESSION_KEY, "authenticated");
}

export function hasSession() {
  return sessionStorage.getItem(SESSION_KEY) === "authenticated";
}

export function destroySession() {
  sessionStorage.removeItem(SESSION_KEY);
}
