// Import the Sanity client
import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch team leads from Sanity
export async function getTeamLeads() {
    try {
        // Query to fetch team leads
        const query = `*[_type == 'team_leads'] {
            year,
            name,
            subsystem,
            description,
            team_leads_image
        }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched team leads
        return result;
    } catch (error) {
        console.error('Error fetching team leads from Sanity:', error);
        throw error;
    }
}
