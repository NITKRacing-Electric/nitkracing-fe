// Import the Sanity client
import client from './sanityConfig'; // Update the path based on your project structure

// Define a function to fetch map data from Sanity
export async function getMapData() {
    try {
        // Query to fetch map data
        const query = `*[_type == 'map'] {
            location,
            contact,
            follow
        }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched map data
        return result;
    } catch (error) {
        console.error('Error fetching map data from Sanity:', error);
        throw error;
    }
}
