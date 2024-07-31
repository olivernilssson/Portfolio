import { defineEventHandler, getRequestIP, getCookie, setCookie } from 'h3';
import { createVisit } from '~/plugins/supabase.server';

export default defineEventHandler(async (event) => {
    if (import.meta.server) {
        const url = event.node.req.url;
        
        // Skip middleware for API routes
        if (url && url.startsWith('/api')) {
            return;
        }

        const visitCookie = getCookie(event, 'visit') || null;

        if (!visitCookie || visitCookie == null) {
            let ip_address = getRequestIP(event);

            // Fallback for local dev
            if (!ip_address || ip_address === '::1' || ip_address === '127.0.0.1') {
                ip_address = 'localhost';
            }

            console.log(`IP Address: ${ip_address}`);
            try {
                await createVisit(ip_address);
                console.log(`Visit created - IP: ${ip_address}`);
            } catch (error) {
                console.error('Error creating visit:', error);
            }
            
            // Set visit cookie to prevent duplicate visits
            setCookie(event, 'visit', 'true', { maxAge: 60 * 60 });
        }
    }
});