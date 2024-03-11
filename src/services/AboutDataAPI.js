// Import the Sanity client
import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch about data from Sanity
export async function getAboutData() {
    try {
        // Query to fetch about data
        const query = `*[_type == 'about'] {
        title,
        description,
        background,
        trophy_image
    }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched about data
        return result;
    } catch (error) {
        console.error('Error fetching about data from Sanity:', error);
        throw error;
    }
}
