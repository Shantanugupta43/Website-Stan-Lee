fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[1].name);
    abomb = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[1].description);
    abomb_des = JSON.parse(char_des1);
    document.getElementById('api-for-character').innerHTML=abomb;
    document.getElementById('api-for-description').innerHTML=abomb_des;
});