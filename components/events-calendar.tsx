"use client"

import { useMemo, useState } from "react"
import { format, isAfter, startOfDay } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { EVENTS_EST } from "@/lib/events"

function toDateKey(d: Date): string {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}

function startOfDayLocal(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function EventsCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const todayMidnight = startOfDayLocal(new Date())

  const eventDates = useMemo(() => {
    const map = new Map<string, Date>()
    for (const e of EVENTS_EST) {
      const key = toDateKey(e.start)
      if (!map.has(key)) map.set(key, startOfDayLocal(e.start))
    }
    return Array.from(map.values())
  }, [])

  const onDayClick = (date: Date) => {
    const clicked = startOfDayLocal(date)
    // Toggle selection: clicking the same date clears the filter
    if (selectedDate && toDateKey(clicked) === toDateKey(selectedDate)) {
      setSelectedDate(null)
    } else {
      setSelectedDate(clicked)
    }
  }

  const eventsOnSelectedDay = useMemo(() => {
    if (!selectedDate) return []
    const key = toDateKey(selectedDate)
    return EVENTS_EST.filter((e) => toDateKey(e.start) === key)
  }, [selectedDate])

  const upcomingEvents = useMemo(() => {
    const nowStart = startOfDay(todayMidnight)
    return [...EVENTS_EST]
      .filter((e) => isAfter(e.start, new Date(nowStart.getTime() - 1)))
      .sort((a, b) => a.start.getTime() - b.start.getTime())
  }, [todayMidnight])

  const defaultMonth = selectedDate ?? todayMidnight

  return (
    <div className="mt-4 grid gap-6 md:grid-cols-[1fr_1fr]">
      <div className="rounded-xl border border-neutral-200/70 bg-white/70 p-4 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/60">
        <Calendar
          // Highlight current date in primary (black) via selection
          mode="multiple"
          selected={[todayMidnight]}
          onDayClick={onDayClick}
          defaultMonth={defaultMonth}
          numberOfMonths={2}
          captionLayout="dropdown"
          showOutsideDays
          modifiers={{ event: eventDates }}
          modifiersClassNames={{
            // Light grey fill for event days
            event:
              "bg-neutral-200 text-neutral-900 dark:bg-stone-200/60 dark:text-neutral-100 rounded-md",
          }}
        />
      </div>
      <div className="rounded-xl border border-neutral-200/70 bg-white/70 p-6 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/60">
        {selectedDate ? (
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold">Events on {format(selectedDate, "EEE, MMM d")} (EST)</h3>
            <button
              type="button"
              className="text-xs text-indigo-700 underline underline-offset-4 dark:text-indigo-300"
              onClick={() => setSelectedDate(null)}
            >
              Clear
            </button>
          </div>
        ) : (
          <h3 className="font-semibold">Upcoming Events (EST)</h3>
        )}

        {selectedDate ? (
          eventsOnSelectedDay.length > 0 ? (
            <ul className="mt-3 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {eventsOnSelectedDay.map((e) => (
                <li key={e.id} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                  <div>
                    <div className="font-medium">{e.title}</div>
                    <div className="text-neutral-600 dark:text-neutral-400">
                      {format(e.start, "h:mm a")} EST{e.location ? ` · ${e.location}` : ""}
                    </div>
                    {e.details ? (
                      <div className="text-neutral-600 dark:text-neutral-400">{e.details}</div>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              No events scheduled on this date.
            </p>
          )
        ) : (
          <ul className="mt-3 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            {upcomingEvents.map((e) => (
              <li key={e.id} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                <div>
                  <div className="font-medium">{e.title}</div>
                  <div className="text-neutral-600 dark:text-neutral-400">
                    {format(e.start, "EEE, MMM d, h:mm a")} EST{e.location ? ` · ${e.location}` : ""}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        
      </div>
    </div>
  )
} 