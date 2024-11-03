export const getusers = async () => {
    try {
        const response = await fetch('https://the-book-vault-backend.vercel.app');
        

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Failed to fetch users:', error);
        throw error;  // This will trigger the rejected case in the Redux slice
    }
};
