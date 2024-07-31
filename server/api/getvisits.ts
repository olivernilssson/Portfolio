import { getVisits } from '~/plugins/supabase.server'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const startTime = query.start as string
  const endTime = query.end as string

  try {
    const visits = await getVisits(startTime, endTime)
      return { visits }
  } catch (error) {
    console.error('Error getting visits:', error)
    return { visits: [] }
  }
})