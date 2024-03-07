// Import the Sanity client
import client from './sanityConfig'; // Update the path based on your project structure

// Define a function to fetch supporters data from Sanity
export async function getSupportersData() {
    try {
        // Query to fetch supporters data
        const query = `*[_type == 'supporters'] {
            supporter_name
        }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched supporters data
        return result;
    } catch (error) {
        console.error('Error fetching supporters data from Sanity:', error);
        throw error;
    }
}
