const map = L.map('map').setView([35.744640, -24.631519], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
}).addTo(map);

const vegasMarker = L.marker([36.105453, -115.172993]).addTo(map);
const grandcanyonMarker = L.marker([35.999638545833555, -112.12204555258249]).addTo(map);
const caliMarker = L.marker([34.766353, -118.832046]).addTo(map);
const bahamasMarker = L.marker([25.085693231795577, -77.32585412334632]).addTo(map);
const parisMarker = L.marker([48.87148119531943, 2.3178506544622026]).addTo(map);
const romeMarker = L.marker([41.89909299975567, 12.489281545368092]).addTo(map);
const indiaMarker = L.marker([19.053638382102278, 72.8953090605095]).addTo(map);
const mexicoMarker = L.marker([20.643372936232378, -87.06032526302698]).addTo(map);
const alaskaMarker = L.marker([58.29835545699344, -134.35116593909325]).addTo(map);
const utahMarker = L.marker([40.76829933979817, -111.90320849386764]).addTo(map);



vegasMarker.bindPopup('<a href="vegas.html"><button type="button" class="btn btn-outline-info vegas-taker-btn">Las Vegas - 2015</button></a>');
grandcanyonMarker.bindPopup('<button type="button" class="btn btn-outline-info grandc-taker-btn">The Grand Canyon - 2015</button>');
caliMarker.bindPopup('<button type="button" class="btn btn-outline-info cali-taker-btn">California - 2015</button>');
bahamasMarker.bindPopup('<button type="button" class="btn btn-outline-info bahamas-taker-btn">The Bahamas - 2016</button>');
parisMarker.bindPopup('<button type="button" class="btn btn-outline-info paris-taker-btn">Paris - 2017</button>');
romeMarker.bindPopup('<button type="button" class="btn btn-outline-info rome-taker-btn">Rome - 2017</button>');
indiaMarker.bindPopup('<button type="button" class="btn btn-outline-info india-taker-btn">India - 2017</button>');
mexicoMarker.bindPopup('<button type="button" class="btn btn-outline-info mexico-taker-btn">Mexico - 2018</button>');
alaskaMarker.bindPopup('<button type="button" class="btn btn-outline-info alaska-taker-btn">Alaska - 2019</button>');
utahMarker.bindPopup('<button type="button" class="btn btn-outline-info utah-taker-btn">Utah - 2022</button>');

