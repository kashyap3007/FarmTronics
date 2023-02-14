export default function getLocation() {
  let temp;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
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
        temp= data.city;
      })
      .catch((err) => console.log(err));
    }
    console.log(temp);
    return temp;
}
