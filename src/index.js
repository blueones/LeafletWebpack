import Test from "./test.js";
import L from "leaflet";
import leafletCss from "leaflet/dist/leaflet.css";
import myCss from "./style.css";

class Events{
    static click(){
        console.log("before");
        var t = new Test();
        var two = t.testFunction();
        console.log(two);
        console.log(L);
    }
}

document.getElementById("testButton").addEventListener("click", Events.click);
var mymap=L.map('mapL',{
    center: [51.505, -0.09],
    zoom: 13
});
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3VubnlzMzEzIiwiYSI6ImNqZmZ3c3ZnbjMwMXQ0NHFoamd1YjZkOGUifQ.LLPC76kBPSSikBJNFSZdAw'
}).addTo(mymap);

