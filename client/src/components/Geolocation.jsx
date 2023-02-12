export default function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  let lat = 0;
  let long = 0;

  function showPosition(position) {
    lat = position.coords.latitude;

    long = position.coords.longitude;

    const url =
      "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
      lat +
      "&longitude=" +
      long +
      "&localityLanguage=en";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.city);
        // temp = data.main.temp;
      })
      .catch((err) => console.log(err));
  }