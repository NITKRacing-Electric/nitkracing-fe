import client from "../config/sanity";

export const test = async() => {
    try {
        const query = `*[_type == 'teamMember']`
        const result = await client.fetch(query)
        return result;
    } catch (error) {
        console.error("Error fetching team members from Sanity:", error);
    throw error;
    }
}
