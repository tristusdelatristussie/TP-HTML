//Exo TP HTML


var h1 = document.createElement('h1')

h1.innerText = "Premiers pas !"     

document.getElementsByTagName('body')[0].appendChild(h1)


var h2 = document.createElement('h2')

h2.innerText = "Placez une image dans un paragraphe"

var bod = document.getElementsByTagName('body')[0]

bod.appendChild(h2)


var p1 = document.createElement("p")

document.getElementsByTagName('body')[0].appendChild(p1)

var p11 = document.createTextNode("Placez une image ")

var p12 = document.createTextNode(" dans un paragraphe")

var p1img = new Image();

p1img.src = "https://wikiclic.com/wp-content/uploads/2017/04/images-libres-de-droit.jpg"

p1.appendChild(p11)

p1.appendChild(p1img)

p1.appendChild(p12)


h21 = document.createElement("h2")

h21.innerText = "Utiliser les styles inlines (en ligne)"

bod.appendChild(h21)

p21 = document.createElement("p")

bod.appendChild(p21)


//Essai d'un tableau pour factoriser un peu dans la partie suivante


var tt = [

p01 = document.createTextNode("Un paragraphe contenant des "),

s01 = document.createElement("span"),


p02 = document.createTextNode("de couleurs "),

s02 = document.createElement("span"),


p03 = document.createTextNode(" et "),

s03 = document.createElement("span"),

p04 = document.createTextNode("le tout sur plusieurs lignes"),

b01 = document.createElement("br"),

a01 = document.createElement("a"),




s01.innerText = "spans ",

s01.style.color = "red",

s02.innerText = "verte ",

s02.style.color = "green",

s03.innerText = "jaune ",

s03.style.color = "yellow ",

a01.href = "www.google.fr",

a01.innerText = "Lien a cliquer"

]


// Parcours tt 
for( i = 0 ; i < tt.length; i++){

    tt[i]

    if(i < tt.length -8){
        p21.appendChild(tt[i]);
     
    }
    }


// Partie a terminer


var h111 = document.createElement("h2")

h111.innerText = "Liste ordonnee "

bod.appendChild(h111)

var ul = document.createElement("ul")

bod.appendChild(ul)

var li = document.createElement("li")


for(i= 0; i < 3; i++){

    ul.appendChild(li)
    li.innerText =  "AAAA"

}

h222 = document.createElement("h2")

var ul2 = document.createElement("ul")

bod.appendChild(ul2)

var ul3 = document.createElement("ul")

var li2 = document.createElement("li")



for(i = 0; i <3; i++){

    ul2.appendChild(li2)
    ul2.lastChild.innerText = "element de niveau 1 "+ i
    if(i==2){
        ul2.appendChild(ul3)  
        var li3 = document.createElement("li")    
        for(j = 0; j<3; j++){
            ul3.appendChild(li3)
            li3.innerText = "element de niveau 2 "+ j
        }
    }
}



















