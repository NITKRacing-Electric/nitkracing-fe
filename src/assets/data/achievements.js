// const Achievements = [
//     {
//             title: 'Formula Bharat 2023',
//             description: 'Winner of the Best Powertrain award at Formula Bharat 2023'
//     },
//     //TODO: Fill up the achievements in the formula bharat
//     {
//         title: 'Best Battery Design',
//         description: 'Top 3 in Best Battery Design Award at Formula Bharat 2023'
//     },
//     {
//         title : 'Best Buisness Plan',
//         description : 'Top 3rd place in Business Plan at Formula Bharat 2023'
//     },
//
//     {
//         title : 'FSEV',
//         description : 'First in Software Intelligence and Integration at FSEV 2021'
//     },
//
//     {
//         title : 'Best Buisness Plan 21-22',
//         description : '2nd place in Business Plan at Formula Bharat Virtuals 21-22'
//     },
//
//     {
//         title : 'Formula Bharat Virtuals',
//         description : '4th Overall in Formula Bharat Virtuals 21-22'
//     }
// ]

import client from "../../config/sanity.js";

async function fetchAchievements() {
    const query = '*[_type == "achievement"]';
    try {
        return await client.fetch(query);
    } catch (error) {
        console.error('Fetching achievements failed', error);
        return []; // return an empty array as a fallback
    }
}



export default fetchAchievements;
