class Fetch {
    async getCurrent(input) {
        const myKey = '65f9046ca2bc776db5a879e94c0a8b00';
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}