
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
/*Pregunta 1: formulario contiene el elemento cuyo id es bitacora */

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
            cant: cont,
            fecha: formulario[1].value,
            descripcion: formulario[2].value,
            cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});
/*Pregunta 2: preventDefault previene que el evento realice la accion predeterminada que tiene*/
/*Pregunta 3: la etiqueta en la posicion x de el formulario */
const crearElemento = (bitacora, tbody) =>{ 
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class","click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
} 
/*Pregunta 4: td contiene el contenido de los nodos
                tr contiene los atributos class y click y contiene a td*/
/*Pregunta 5: contiene el texto dentro de nodos*/
/*Pregunta 6: una tabla con todos los elementos de los nodos */
/*Pregunta 7: agrega las cosas que el usuario escribira a la lista */

const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
/*Pregunta 8: firstChild busca el primer hijo del nodo que se elije */
/*Pregunta 9: tbody quedara completamente vacio */

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
    eventtr.forEach((item, index) => { 
        item.addEventListener("click", () => { 
            document.querySelector("#fecha").value = item.childNodes[1].textContent; 
            document.querySelector("#descp").value = item.childNodes[2].textContent; 
            document.querySelector("#cant").value = item.childNodes[3].textContent; 
        }); 
    }) 
} 

/*Pregunta 10: obtiene el texto dentro del hijo numero i del nodo item. Item son cada nodo con la clase ".clicl"
            (i es el numero que se especifica, es decir su posicion)*/

const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
        eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
        crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
} 
/*Pregunta 11: obtiene todos los elementos que tengan la clase ".tabla-btc tbody" */
/*Pregunta 12: retorna el numero total de hijos elementos que un elemento tiene*/
/*Pregunta 13: no muestra nada*/
/*Pregunta 14: los elementos ingresados en la bitacora por el usuario */

var rojos = document.getElementsByTagName("label");
rojos.style.border = ".3px";
rojos.setAttribute("style") = "border: solid red 3px";