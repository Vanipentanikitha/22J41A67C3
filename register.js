const axios = require('axios');

async function register() {
    try {
        const response = await axios.post('http://20.244.56.144/evaluation-service/register', {
            email: "ramkrishna@abc.edu",
            name: "Ram Krishna",
            mobileNo: "9999999999",
            githubUsername: "github",
            rollNo: "aa1bb",
            accessCode: "xgAsNC"
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
    }
}

register();