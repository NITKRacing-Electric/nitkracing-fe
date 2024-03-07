// Import the Sanity client
import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch miscellaneous data from Sanity
export async function getMiscData() {
    try {
        // Query to fetch miscellaneous data
        const query = `*[_type == 'misc'] {
        year,
        theme,
        current_captain,
        current_treasurer,
        current_webLead,
        logo,
        facebook,
        facebookHandler,
        twitter,
        twitterHandler,
        linkedIn,
        linkedInHandler,
        instagram,
        instagramHandler
    }`;

        // Execute the query using the Sanity client
        const result = await client.fetch(query);

        // Return the fetched miscellaneous data
        return result;
    } catch (error) {
        console.error('Error fetching miscellaneous data from Sanity:', error);
        throw error;
    }
}
