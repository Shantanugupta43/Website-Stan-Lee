fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=Spider-Man&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[10].name);
    spider = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[10].description);
    spider_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[10].thumbnail.path+'/portrait_medium.jpg');
    spider_img = JSON.parse(char_img1);
    document.getElementById('spider-img').src=spider_img;
    document.getElementById('api-for-character-spider').innerHTML=spider;
    document.getElementById('api-for-description-spider').innerHTML=spider_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=Hulk&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    hulk = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    hulk_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    hulk_img = JSON.parse(char_img1);
    document.getElementById('hulk-img').src=hulk_img;
    document.getElementById('api-for-character-hulk').innerHTML=hulk;
    document.getElementById('api-for-description-hulk').innerHTML=hulk_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=X-Man&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    xman = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    xman_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    xman_img = JSON.parse(char_img1);
    document.getElementById('xman-img').src=xman_img;
    document.getElementById('api-for-character-xman').innerHTML=xman;
    document.getElementById('api-for-description-xman').innerHTML=xman_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=thor&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    thor = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    thor_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    thor_img = JSON.parse(char_img1);
    document.getElementById('thor-img').src=thor_img;
    document.getElementById('api-for-character-thor').innerHTML=thor;
    document.getElementById('api-for-description-thor').innerHTML=thor_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=Abomination&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    abomination = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    abomination_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    abomination_img = JSON.parse(char_img1);
    document.getElementById('abomination-img').src=abomination_img;
    document.getElementById('api-for-character-abomination').innerHTML=abomination;
    document.getElementById('api-for-description-abomination').innerHTML=abomination_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=A-Bomb%20(HAS)&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].name);
    abomb = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    abomb_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    abomb_img = JSON.parse(char_img1);
    document.getElementById('abomb-img').src=abomb_img;
    document.getElementById('api-for-character-abomb').innerHTML=abomb;
    document.getElementById('api-for-description-abomb').innerHTML=abomb_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[2].name);
    aim = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[2].description);
    aim_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[2].thumbnail.path+'/portrait_medium.jpg');
    aim_img = JSON.parse(char_img1);
    document.getElementById('aim-img').src=aim_img;
    document.getElementById('api-for-character-aim').innerHTML=aim;
    document.getElementById('api-for-description-aim').innerHTML=aim_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=d&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[9].name);
    daredevil = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[9].description);
    daredevil_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[9].thumbnail.path+'/portrait_medium.jpg');
    daredevil_img = JSON.parse(char_img1);
    document.getElementById('daredevil-img').src=daredevil_img;
    document.getElementById('api-for-character-daredevil').innerHTML=daredevil;
    document.getElementById('api-for-description-daredevil').innerHTML=daredevil_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=b&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[3].name);
    baron = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[3].description);
    baron_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[3].thumbnail.path+'/portrait_medium.jpg');
    baron_img = JSON.parse(char_img1);
    document.getElementById('baron-img').src=baron_img;
    document.getElementById('api-for-character-baron').innerHTML=baron;
    document.getElementById('api-for-description-baron').innerHTML=baron_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=c&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[13].name);
    captain = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[13].description);
    captain_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[13].thumbnail.path+'/portrait_medium.jpg');
    captain_img = JSON.parse(char_img1);
    document.getElementById('captain-img').src=captain_img;
    document.getElementById('api-for-character-captain').innerHTML=captain;
    document.getElementById('api-for-description-captain').innerHTML=captain_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=f&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[1].name);
    falcon = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[1].description);
    falcon_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[1].thumbnail.path+'/portrait_medium.jpg');
    falcon_img = JSON.parse(char_img1);
    document.getElementById('falcon-img').src=falcon_img;
    document.getElementById('api-for-character-falcon').innerHTML=falcon;
    document.getElementById('api-for-description-falcon').innerHTML=falcon_des;
});
