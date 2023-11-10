import { config } from './config'
import { connect } from '@planetscale/database'

export async function createVisit() {
    const conn = connect(config)
    const results = await conn.execute('INSERT INTO visit (location) VALUES (?)', ['Stockholm'])
}

export async function getVisits() {
    const conn = connect(config)
    const results = await conn.execute('select count (*) as count, date(created_at) as date from visit group by date')
    return results.rows || []
}

export async function countTotalVisits() {
    const conn = connect(config)
    const results = await conn.execute('select count (*) as count from visit')
    return results.rows[0].count
}

export async function countVisitsToday() {
    const conn = connect(config)
    const results = await conn.execute('select count (*) as count from visit where date(created_at) >= curdate()')
    return results.rows[0].count
}

export async function countVisitsThisWeek() {
    const conn = connect(config)
    const results = await conn.execute('select count (*) as count from visit where YEARWEEK(created_at) = YEARWEEK(NOW())')
    return results.rows[0].count
}

// Calculate the difference from the previous week in percent
export async function calculateWeeklyChange() {
    const conn = connect(config)
    const results = await conn.execute('select count (*) as count from visit where YEARWEEK(created_at) = YEARWEEK(NOW()) - 1')
    const previousWeek = results.rows[0].count
    const currentWeek = await countVisitsThisWeek()
    return Math.round(((currentWeek - previousWeek) / previousWeek) * 100)
}

// Calculate the difference from the yesterday in percent
export async function calculateDailyChange() {
    const conn = connect(config)
    const results = await conn.execute('select count (*) as count from visit where date(created_at) = curdate() - 1')
    const previousDay = results.rows[0].count
    const currentDay = await countVisitsToday()
    return Math.round(((currentDay - previousDay) / previousDay) * 100)
}