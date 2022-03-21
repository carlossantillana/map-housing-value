import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: "",
  version: "weekly",
});

loader.load().then(() => {
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});