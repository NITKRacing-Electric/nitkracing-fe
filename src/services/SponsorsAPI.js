import client from '../config/sanity'; // Update the path based on your project structure

// Define a function to fetch sponsors from Sanity
export async function getSponsors() {
  try {
    // Query to fetch sponsors
    const query = `*[_type == 'sponsor'] {
      name,
      tier,
      picture
    }`;

    // Execute the query using the Sanity client
    const result = await client.fetch(query);

    console.log('Sponsors:', result);

    // Return the fetched sponsors
    return result;
  } catch (error) {
    console.error('Error fetching sponsors from Sanity:', error);
    throw error;
  }
}



// import Backend from "./backend";


// class SponsorsAPI {
//   constructor(){

//   }

//   static getSponsors(){
//     return Backend.get("/sponsors")
//   }

// }

// export default SponsorsAPI

// Import the Sanity client
