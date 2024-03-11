// Import the Sanity client
import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch achievements from Sanity
export async function getAchievements() {
    try {
        // Query to fetch achievements
        const query = `*[_type == 'achievement'] {
            title,
            description,
            background,
            trophy_image
        }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched achievements
        return result;
    } catch (error) {
        console.error('Error fetching achievements from Sanity:', error);
        throw error;
    }
}
