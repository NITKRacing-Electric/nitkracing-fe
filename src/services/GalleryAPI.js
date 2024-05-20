// Import the Sanity client
import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch gallery items from Sanity
export async function getGalleryItems() {
    try {
        // Query to fetch gallery items
        const query = `*[_type == 'gallery']`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched gallery items
        return result;
    } catch (error) {
        console.error('Error fetching gallery items from Sanity:', error);
        throw error;
    }
}
