// Import the Sanity client
import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch home data from Sanity
export async function getHomeData() {
    try {
        // Query to fetch home data
        const query = `*[_type == 'home'] {
        title,
        description,
        background,
        trophy_image
        }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched home data
        return result;
    } catch (error) {
        console.error('Error fetching home data from Sanity:', error);
        throw error;
    }
}
