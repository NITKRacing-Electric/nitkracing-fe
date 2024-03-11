// Import the Sanity client
import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch sponsorship data from Sanity
export async function getSponsorshipData() {
    try {
        // Query to fetch sponsorship data
        const query = `*[_type == 'sponsorship'] {
            tiers
        }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched sponsorship data
        return result;
    } catch (error) {
        console.error('Error fetching sponsorship data from Sanity:', error);
        throw error;
    }
}
