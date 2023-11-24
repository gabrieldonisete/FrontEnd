// script.js

function initMap() {
    // Crie um objeto LatLng para definir a posição inicial do mapa
    var myLatLng = { lat: -34.397, lng: 150.644 };

    // Crie um objeto de opções do mapa
    var mapOptions = {
        zoom: 8,
        center: myLatLng
    };

    // Crie um novo mapa usando a API do Google Maps
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Adicione um marcador ao mapa
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

let dragged;


document.addEventListener("drag", function(event) {
    // Não faça nada aqui, apenas previna o comportamento padrão do navegador
    event.preventDefault();
});

document.addEventListener("dragstart", function(event) {
    // Salve a referência ao elemento sendo arrastado
    dragged = event.target;
    // Adicione a classe "dragging" para estilizar o elemento enquanto está sendo arrastado
    dragged.classList.add("dragging");
});

document.addEventListener("dragend", function() {
    // Remova a classe "dragging" ao finalizar o arrastar
    dragged.classList.remove("dragging");
});

document.addEventListener("dragover", function(event) {
    // Permita a queda do elemento
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    // Impedir o comportamento padrão (abrir como link para algumas imagens)
    event.preventDefault();
    // Mova o elemento para o destino de soltura
    if (event.target.classList.contains("droppable")) {
        event.target.appendChild(dragged);
    }
});