import { Loader } from "@googlemaps/js-api-loader"
import "./style.css";

const loader = new Loader({
  apiKey: process.env.GOOGLE_API_KEY,
  version: "weekly",
});

loader.load().then(() => {
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});