const fetchQuotes = async () => {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        // const response = await fetch('https://zenquotes.io/api/random', {
        //     mode: 'no-cors'
        //   })

        if (!response.ok) {
            throw new Error('Response not correct');
        }

        const data = await response.json();

        console.log(data); 

        return data;
    } catch (error) {
        console.error('Error fetching quotes:', error);
        return null; 
    }
};

export default fetchQuotes;
