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
    center: [41.5236, -90.5776],
    zoom: 13
});


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(mymap);