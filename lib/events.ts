export type ClubEvent = {
  id: string
  title: string
  start: Date
  timezone: "EST"
  location?: string
  details?: string
}

export const EVENTS_EST: ClubEvent[] = [
  {
    id: "go-live-2025-08-18",
    title: "Go Live",
    start: new Date(2025, 7, 18, 9, 0),
    timezone: "EST",
  },
  {
    id: "callout-2025-09-05",
    title: "Call-out",
    start: new Date(2025, 8, 5, 0, 0),
    timezone: "EST",
  },
] 