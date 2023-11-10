import { VisitTracker } from '@/components/VisitTracker'
import { calculateDailyChange, calculateWeeklyChange, countTotalVisits, countVisitsThisWeek, countVisitsToday } from '@/lib/queries'

async function DisplayVisits( { counter, difference } ) {
    return <div>
    <VisitTracker />
    <div className="rounded-2xl border border-zinc-300 dark:border-zinc-700/40">
      <div className="px-4 py-5 sm:p-6">
      <dl>
        <div className="flex items-center justify-between">
        <dt className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Total visitors this week</dt>
        <svg className={difference < 0 ? "w-6 h-6 fill-current text-red-500 transform rotate-180" : "w-6 h-6 fill-current text-green-700"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd" />
        </svg>
        </div>
        <div className="flex items-center justify-between">
            <dd className="mt-1 text-3xl leading-9 font-semibold text-orange-500">{counter}</dd>
            <span className={difference < 0 ? "text-red-500 text-sm font-semibold ml-2" : "text-green-500 text-sm font-semibold ml-2"}>
                {difference > 0 ? `+${difference}` : difference}%
            </span>
        </div>
        </dl>
      </div>
    </div>
  </div>
}

export async function WeeklyVisits() {
    const counter = await countVisitsThisWeek()
    const difference = await calculateWeeklyChange()
    return <DisplayVisits counter={counter} difference={difference} />
}