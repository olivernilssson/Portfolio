import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()

if (!config.supabaseUrl || !config.supabaseKey) {
    throw new Error('Missing Supabase URL or Anon Key in environment variables')
}

const supabase = createClient(config.supabaseUrl, config.supabaseKey)

// Create visit
export async function createVisit(ip_address: string) {
const { data: visit, error } = await supabase
        .from('visits')
        .insert([{ ip_address: ip_address}])
    
    if (error) {
        throw new Error(error.message)
    }
}

// Get visits
export async function getVisits(startDate?: string, endDate?: string) {
    let query = supabase.from('visits').select('*');

    if (startDate) {
        const startDateTime = new Date(`${startDate}T00:00:00+02:00`).toISOString();
        query = query.gte('visit_time', startDateTime);
    }

    if (endDate) {
        const endDateTime = new Date(`${endDate}T23:59:59+02:00`).toISOString();
        query = query.lte('visit_time', endDateTime);
    }

    const { data, error } = await query;
    if (error) {
        throw new Error(error.message);
    }

    return data;
}

// Get daily visits
export async function getDailyVisits(startDate?: string, endDate?: string) {
    let visits = await getVisits(startDate, endDate);

    const dailyVisits = visits.reduce((acc: Record<string, number>, visit: { visit_time: string }) => {
        const date = new Date(visit.visit_time).toLocaleDateString('sv-SE', {
            timeZone: 'Europe/Stockholm',
          })
        acc[date] = acc[date] ? acc[date] + 1 : 1;
        return acc;
    }, {});

    const transformedData = Object.keys(dailyVisits).map((date) => {
        return {
            date: date,
            visits: dailyVisits[date],
        };
    });

    transformedData.sort((a, b) => { return new Date(a.date).getTime() - new Date(b.date).getTime() });

    return transformedData;
}