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