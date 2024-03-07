// Import the Sanity client
import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch team description data from Sanity
export async function getTeamDescription() {
    try {
        // Query to fetch team description data
        const query = `*[_type == 'team_desc'] {
        title,
        description,
        team_images
    }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched team description data
        return result;
    } catch (error) {
        console.error('Error fetching team description data from Sanity:', error);
        throw error;
    }
}
