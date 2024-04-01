// Import the Sanity client
import client from "../config/sanity"; // Update the path based on your project structure

// Define a function to fetch team members from Sanity
export async function getTeamMembers() {
  try {
    // Query to fetch team members
    const query = `*[_type == 'teamMember']`;

    // Execute the query using the Sanity client
    const result = await client.fetch(query);

    // Return the fetched team members
    return result;
  } catch (error) {
    console.error("Error fetching team members from Sanity:", error);
    throw error;
  }
}
