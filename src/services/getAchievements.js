import client from "../config/sanity"

export const getAchievements = async() => {
    try {
        const query = `*[_type == 'achievement']`
        const result = await client.fetch(query)
        return result
    } catch (error) {
        console.error("Error fetching team members from Sanity:", error);
    throw error;
    }
}