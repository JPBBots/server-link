export interface EventsToServer {
  AUTHORIZE: (token: string, success: () => void) => void
  TEST: (msg: string) => void
}

export interface EventsToClient {
  TEST: (msg: string) => void
}
