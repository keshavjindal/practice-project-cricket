const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen',
  params: {formatType: 'test'},
  headers: {
    'X-RapidAPI-Key': 'b079a279a0mshf2dcc2fb2555e71p1e7a7fjsnebf1e506dc75',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

async function helper(){

    try{
        const response = await axios.request(options)
        const arr = response.data.rank;

        console.log(arr[0]);

        for(let i=0; i<arr.length; i++){
            console.log(arr[i].rank , arr[i].name);
        }
    }
    catch(err){
        console.log(err);
    }

}

helper()