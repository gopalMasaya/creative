
function mli(){
title = createP('list of links to projects that incluse AI/Math or data sets they demonstrate concept and idias')
title.position(30,160);
title.style('font-size','20px')
title.style('color','rgb(60,20,20)')

linksAi[0]= createA('https://gopalmasaya.github.io/style-your-image/',target="style your image","style")
linksAi[1]= createA('https://gopalmasaya.github.io/waves/',target ="analyzing Pos with Ml","detect")
linksAi[2]= createA('https://gopalmasaya.github.io/heartOfmath_simulation/',target="the heart of math","heart of math")
linksAi[3]= createA('https://gopalmasaya.github.io/TopDb/',target="simple crm/acces only with code","_blank")
linksAi[0].position(30,220);
linksAi[1].position(30,250);
linksAi[2].position(30,280);
linksAi[3].position(30,310);

for(let i = 0; i< 3; i++){
  linksAi[i].style('font-size','18px')
}

on[3]= true;
}
