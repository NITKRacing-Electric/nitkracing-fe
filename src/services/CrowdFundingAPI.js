// Import the Sanity client
import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch crowdfunding data from Sanity
export async function getCrowdfundingData() {
    try {
        // Query to fetch crowdfunding data
        const query = `*[_type == 'crowdfunding'] {
            description,
            crowdfunding_image
        }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched crowdfunding data
        return result;
    } catch (error) {
        console.error('Error fetching crowdfunding data from Sanity:', error);
        throw error;
    }
}
