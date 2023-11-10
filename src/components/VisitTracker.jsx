import { createVisit } from '@/lib/queries'

export async function VisitTracker() {
    await createVisit()
}