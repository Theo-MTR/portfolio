
let peche = document.getElementById('peche');
let sf = document.getElementById('sf');
let nt = document.getElementById('nt');
let moto = document.getElementById('moto');


function add(idiv, imgID, imgsrc, idpara, titre) {
    let iddiv = document.getElementById(idiv);
    let img = document.getElementById(imgID);
    img.setAttribute("src", imgsrc);
    img.setAttribute("class", "w-100 h-100 br50 lum");
    let para = document.createElement('p');
    para.setAttribute("class", "fixed-top grey center p-3");
    para.setAttribute("id", idpara);
    para.innerText = titre;
    iddiv.appendChild(para);
}

function remove(idiv, imgID, idpara) {
    let iddiv = document.getElementById(idiv);
    let img = document.getElementById(imgID);
    img.setAttribute("class", "w-100 h-100 br50");
    let para = document.getElementById(idpara);
    iddiv.removeChild(para);
}

let b = false;
peche.addEventListener('click', function () {
    if (!b) {
        add('peche', 'imgP','../img/peche.jpg','PPeche', "Pêche");
    }
    else {
        remove('peche', 'imgP', 'PPeche');
    }
    b = !b;
});

let b1 = false;
sf.addEventListener('click', function () {
    if (!b1) {
        add('sf', 'imgSF','../img/sf.jpg','PSF', "SF");
    }
    else {
        remove('sf', 'imgSF', 'PSF');
    }
    b1 = !b1;
});

let b2 = false;
nt.addEventListener('click', function () {
    if (!b2) {
        add('nt', 'imgNT','../img/nt.jpg','PNT', "Nouvelles technologies");
    }
    else {
        remove('nt', 'imgNT', 'PNT');
    }
    b2 = !b2;
});

let b3 = false;
moto.addEventListener('click', function () {
    if (!b3) {
        add('moto', 'imgM','../img/moto.jpg','PM', "Moto");
    }
    else {
        remove('moto', 'imgM', 'PM');
    }
    b3 = !b3;
});