export const fetchData = (key) => {
    try {
        const data = localStorage.getItem(key);

        if (data === null) {
            // console.error(`Data with key '${key}' not found in localStorage.`);
            return  {
                name:'',
            }; // Or throw an error depending on your use case
        }
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error parsing data for key '${key}' from localStorage: ${error.message}`);
        return null; // Or throw an error depending on your use case
    }
}


// delete user

export function deleteUser(key){
    return localStorage.removeItem(key);
}



