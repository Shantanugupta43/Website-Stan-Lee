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

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=f&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[31].name);
    franklin = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[31].description);
    franklin_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[31].thumbnail.path+'/portrait_medium.jpg');
    franklin_img = JSON.parse(char_img1);
    document.getElementById('franklin-img').src=franklin_img;
    document.getElementById('api-for-character-franklin').innerHTML=franklin;
    document.getElementById('api-for-description-franklin').innerHTML=franklin_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=g&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[60].name);
    gwen = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[60].description);
    gwen_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[60].thumbnail.path+'/portrait_medium.jpg');
    gwen_img = JSON.parse(char_img1);
    document.getElementById('gwen-img').src=gwen_img;
    document.getElementById('api-for-character-gwen').innerHTML=gwen;
    document.getElementById('api-for-description-gwen').innerHTML=gwen_des;
});

fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=h&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[22].name);
    hawkeye = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[22].description);
    hawkeye_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[22].thumbnail.path+'/portrait_medium.jpg');
    hawkeye_img = JSON.parse(char_img1);
    document.getElementById('hawkeye-img').src=hawkeye_img;
    document.getElementById('api-for-character-hawkeye').innerHTML=hawkeye;
    document.getElementById('api-for-description-hawkeye').innerHTML=hawkeye_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=h&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[25].name);
    hela = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[25].description);
    hela_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[25].thumbnail.path+'/portrait_medium.jpg');
    hela_img = JSON.parse(char_img1);
    document.getElementById('hela-img').src=hela_img;
    document.getElementById('api-for-character-hela').innerHTML=hela;
    document.getElementById('api-for-description-hela').innerHTML=hela_des;
});


fetch('https://gateway.marvel.com/v1/public/characters?nameStartsWith=i&limit=100&ts=1&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[28].name);
    iron = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[28].description);
    iron_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[28].thumbnail.path+'/portrait_medium.jpg');
    iron_img = JSON.parse(char_img1);
    document.getElementById('iron-img').src=iron_img;
    document.getElementById('api-for-character-iron').innerHTML=iron;
    document.getElementById('api-for-description-iron').innerHTML=iron_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[53].title);
    kirbycom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[53].description);
    kirbycom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[53].thumbnail.path+'/portrait_medium.jpg');
    kirbycom_img = JSON.parse(char_img1);
    document.getElementById('kirbycomic-img').src=kirbycom_img;
    document.getElementById('api-for-comic-kirby').innerHTML=kirbycom;
    document.getElementById('api-for-descomic-kirby').innerHTML=kirbycom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=Spider-Man&ts=1&limit=100&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[98].title);
    spidercom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[98].description);
    spidercom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[98].thumbnail.path+'/portrait_medium.jpg');
    spidercom_img = JSON.parse(char_img1);
    document.getElementById('spidercomic-img').src=spidercom_img;
    document.getElementById('api-for-comic-spider').innerHTML=spidercom;
    document.getElementById('api-for-descomic-spider').innerHTML=spidercom_des;
});


fetch('https://gateway.marvel.com:443/v1/public/comics?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[57].title);
    fantasticcom = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[57].description);
    fantasticcom_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[57].thumbnail.path+'/portrait_medium.jpg');
    fantasticcom_img = JSON.parse(char_img1);
    document.getElementById('fantasticcomic-img').src=fantasticcom_img;
    document.getElementById('api-for-comic-fantastic').innerHTML=fantasticcom;
    document.getElementById('api-for-descomic-fantastic').innerHTML=fantasticcom_des;
});



fetch('https://gateway.marvel.com:443/v1/public/series?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[7].title);
    amazingfanser = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[7].description);
    amazingfanser_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[7].thumbnail.path+'/portrait_medium.jpg');
    amazingfanser_img = JSON.parse(char_img1);
    document.getElementById('amazingfanseries-img').src=amazingfanser_img;
    document.getElementById('api-for-series-amazingfan').innerHTML=amazingfanser;
    document.getElementById('api-for-desseries-amazingfan').innerHTML=amazingfanser_des;
});


fetch('https://gateway.marvel.com:443/v1/public/series?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[10].title);
    spiderser = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[10].description);
    spiderser_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[10].thumbnail.path+'/portrait_medium.jpg');
    spiderser_img = JSON.parse(char_img1);
    document.getElementById('spiderseries-img').src=spiderser_img;
    document.getElementById('api-for-series-spider').innerHTML=spiderser;
    document.getElementById('api-for-desseries-spider').innerHTML=spiderser_des;
});


fetch('https://gateway.marvel.com:443/v1/public/series?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[28].title);
    avengerser = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[28].description);
    avengerser_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[28].thumbnail.path+'/portrait_medium.jpg');
    avengerser_img = JSON.parse(char_img1);
    document.getElementById('avengerseries-img').src=avengerser_img;
    document.getElementById('api-for-series-avenger').innerHTML=avengerser;
    document.getElementById('api-for-desseries-avenger').innerHTML=avengerser_des;
});

fetch('https://gateway.marvel.com:443/v1/public/events?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[0].title);
    civileve = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[0].description);
    civileve_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[0].thumbnail.path+'/portrait_medium.jpg');
    civileve_img = JSON.parse(char_img1);
    document.getElementById('civilevent-img').src=civileve_img;
    document.getElementById('api-for-events-civil').innerHTML=civileve;
    document.getElementById('api-for-desevents-civil').innerHTML=civileve_des;
});


fetch('https://gateway.marvel.com:443/v1/public/events?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[1].title);
    houseeve = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[1].description);
    houseeve_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[1].thumbnail.path+'/portrait_medium.jpg');
    houseeve_img = JSON.parse(char_img1);
    document.getElementById('houseevent-img').src=houseeve_img;
    document.getElementById('api-for-events-house').innerHTML=houseeve;
    document.getElementById('api-for-desevents-house').innerHTML=houseeve_des;
});

fetch('https://gateway.marvel.com:443/v1/public/events?creators=Stan-Lee%2C30&limit=80&ts=1&limit=30&apikey=15a342a6687d10453e0e9a634cf66302&hash=1aa81eca0614de5bd80a3567e2e7e73f').then((data)=>{

return data.json();
}).then((completedata)=>{
    char_name1 = JSON.stringify(completedata.data.results[2].title);
    evolveeve = JSON.parse(char_name1);
    char_des1 = JSON.stringify(completedata.data.results[2].description);
    evolveeve_des = JSON.parse(char_des1);
    char_img1 = JSON.stringify(completedata.data.results[2].thumbnail.path+'/portrait_medium.jpg');
    evolveeve_img = JSON.parse(char_img1);
    document.getElementById('evolveevent-img').src=evolveeve_img;
    document.getElementById('api-for-events-evolve').innerHTML=evolveeve;
    document.getElementById('api-for-desevents-evolve').innerHTML=evolveeve_des;
});