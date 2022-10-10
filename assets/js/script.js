/*
    Projeto: Manipulador de Formas Geometricas - MFG 1.0
    Autor: Zander J.L
    Data de Publicação: 10/10/2022 15:52
    Contato: dev@zantech.com.br
    Tenologias aplicadas:
        HTML5
        CSS3
        JAVASCRIPT
    
*/


//Delecarações de Variaveis Globais com os devidos selectores
let manipuladoObjeto = document.querySelector("#forma-geometrica");
let larguraObejeto = document.querySelector("#largura");
let alturaObjeto = document.querySelector("#altura");
let arrendodarObjeto = document.querySelector("#arrendodar");
let baseObjeto = document.querySelector("#base");
let rotacaoObjeto = document.querySelector("#rotacao");

let pegaAtributoClass = document.querySelector('.section-area-class--conteudo');
let pegaAtributoStyle = document.querySelector('.section-area-style--conteudo');


function limpaStyle () {
    manipuladoObjeto.setAttribute("class","");
    manipuladoObjeto.setAttribute("style","");
    pegaAtributoClass.innerHTML = '';
    pegaAtributoStyle.innerHTML = '';
}

function addQuadrado() {
    //forma padrão - Limpar e adicina class
    limpaStyle ()
    manipuladoObjeto.classList.add('formaQuadrado');

    //Alterando parametros do HTML dos itens personalizados
    alturaObjeto.value = document.getElementsByClassName("formaQuadrado")[0].clientHeight;
    larguraObejeto.value = document.getElementsByClassName("formaQuadrado")[0].clientWidth;
    arrendodarObjeto.value = 0;
    baseObjeto.value = 0;
    rotacaoObjeto.value = 0; 

    pegaAtributoClass.innerHTML = 
    `.formaQuadrado{<br/>
        width: ${document.getElementsByClassName("formaQuadrado")[0].clientWidth};<br/>
        height: ${document.getElementsByClassName("formaQuadrado")[0].clientHeight};<br/>
        background-color: ${getComputedStyle(document.querySelector(".formaQuadrado")).backgroundColor};<br/>
        border: ${getComputedStyle(document.querySelector(".formaQuadrado")).border};<br/>

    }`
}

function addRetangulo() {
    limpaStyle ()
    manipuladoObjeto.classList.add('formaRetangular');

    //Alterando parametros do HTML dos itens personalizados
    alturaObjeto.value = document.getElementsByClassName("formaRetangular")[0].clientHeight;
    larguraObejeto.value = document.getElementsByClassName("formaRetangular")[0].clientWidth;
    arrendodarObjeto.value = 0;
    baseObjeto.value = 0;
    rotacaoObjeto.value = 0;

    pegaAtributoClass.innerHTML = 
    `.formaRetangular{<br/>
        width: ${document.getElementsByClassName("formaRetangular")[0].clientWidth};<br/>
        height: ${document.getElementsByClassName("formaRetangular")[0].clientHeight};<br/>
        background-color: ${getComputedStyle(document.querySelector(".formaRetangular")).backgroundColor};<br/>
        border: ${getComputedStyle(document.querySelector(".formaRetangular")).border};<br/>

    }`


}

function addLosango() {
    limpaStyle ()
    manipuladoObjeto.classList.add('formaLosango');
    manipuladoObjeto.style.transform = "rotate(45deg)";

    //Alterando parametros do HTML dos itens personalizados
    alturaObjeto.value = document.getElementsByClassName("formaLosango")[0].clientHeight;
    larguraObejeto.value = document.getElementsByClassName("formaLosango")[0].clientWidth;
    arrendodarObjeto.value = 0;
    baseObjeto.value = 0;
    rotacaoObjeto.value = 45;

    pegaAtributoClass.innerHTML = 
    `.formaLosango{<br/>
        width: ${document.getElementsByClassName("formaLosango")[0].clientWidth};<br/>
        height: ${document.getElementsByClassName("formaLosango")[0].clientHeight};<br/>
        background-color: ${getComputedStyle(document.querySelector(".formaLosango")).backgroundColor};<br/>
        border: ${getComputedStyle(document.querySelector(".formaLosango")).border};<br/>

    }`

    pegaAtributoStyle.innerHTML = manipuladoObjeto.getAttribute('style');

}

function addCirculo() {
    limpaStyle ()
    manipuladoObjeto.classList.add('formaCirculo');


    //Alterando parametros do HTML dos itens personalizados
    alturaObjeto.value = document.getElementsByClassName("formaCirculo")[0].clientHeight;
    larguraObejeto.value = document.getElementsByClassName("formaCirculo")[0].clientWidth;
    arrendodarObjeto.value = getComputedStyle(document.querySelector(".formaCirculo")).borderRadius.replace("%","");
    baseObjeto.value = 0;
    rotacaoObjeto.value = 0;

    pegaAtributoClass.innerHTML = 
    `.formaCirculo{<br/>
        width: ${document.getElementsByClassName("formaCirculo")[0].clientWidth};<br/>
        height: ${document.getElementsByClassName("formaCirculo")[0].clientHeight};<br/>
        background-color: ${getComputedStyle(document.querySelector(".formaCirculo")).backgroundColor};<br/>
        border: ${getComputedStyle(document.querySelector(".formaCirculo")).border};<br/>
        border-radius: ${getComputedStyle(document.querySelector(".formaCirculo")).borderRadius};<br>

    }`


}

function addTriangulo() {
    limpaStyle ()
    manipuladoObjeto.classList.add('formaTriagulo');


    //Alterando parametros do HTML dos itens personalizados
    let bordaEsquerda = getComputedStyle(document.querySelector(".formaTriagulo")).borderLeft
    let bordaDireita = getComputedStyle(document.querySelector(".formaTriagulo")).borderRight
    let bordaAbaixo = getComputedStyle(document.querySelector(".formaTriagulo")).borderBottom
    let bordaAcima = getComputedStyle(document.querySelector(".formaTriagulo")).borderTop
    
    let trianguloAltura = bordaAbaixo.split(" ");
    let trianguloLadoEsquerdo = bordaEsquerda.split(" ");
    let trianguloLadoDireita = bordaDireita.split(" ");
    let trianguloLadoCima = bordaAcima.split(" "); 

    alturaObjeto.value = trianguloAltura[0].replace("px","");
    larguraObejeto.value = 0;
    arrendodarObjeto.value = 0;
    baseObjeto.value = Number(trianguloLadoDireita[0].replace("px","")) + Number(trianguloLadoEsquerdo[0].replace("px",""));
    rotacaoObjeto.value = 0;


    pegaAtributoClass.innerHTML = 
    `.formaTriagulo{<br/>
        border-left: ${bordaEsquerda};<br/>
        border-right: ${bordaDireita};<br/>
        border-bottom: ${bordaAbaixo};<br/>
        border-top: ${bordaAcima};<br/>

    }`

}

function addPersonalizada() {
    limpaStyle ()

    if(baseObjeto.value == '0' || baseObjeto.value == ''){
        manipuladoObjeto.style.width = alturaObjeto.value + 'px';
        manipuladoObjeto.style.height = larguraObejeto.value + 'px';
        manipuladoObjeto.style.backgroundColor = "#F00";
        manipuladoObjeto.style.borderRadius = arrendodarObjeto.value + '%';
        manipuladoObjeto.style.transform = "rotate("+ rotacaoObjeto.value +"deg)";
    }else {
        manipuladoObjeto.style.borderLeft = (Number(baseObjeto.value) / 2) +"px solid transparent";
        manipuladoObjeto.style.borderRight = (Number(baseObjeto.value) / 2) +"px solid transparent";
        manipuladoObjeto.style.borderBottom = alturaObjeto.value + "px solid #F00";
        manipuladoObjeto.style.borderTop = "0px solid transparent";
        manipuladoObjeto.style.transform = "rotate("+ rotacaoObjeto.value +"deg)";
        manipuladoObjeto.style.borderRadius = arrendodarObjeto.value + '%';
    }
    
    pegaAtributoStyle.innerHTML = manipuladoObjeto.getAttribute('style');
}

function copiaConteudo(valor) {
    let areaTexto = document.getElementById('area-copy');

    if(valor === 'class') {
       areaTexto.value = pegaAtributoClass.innerHTML;
       areaTexto.select();
       document.execCommand('copy');
    }
    if(valor === 'style'){
        areaTexto.value = pegaAtributoStyle.innerHTML;
        areaTexto.select();
        document.execCommand('copy');
    }
}