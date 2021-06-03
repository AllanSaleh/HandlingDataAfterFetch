const url = "https://www.boredapi.com/api/activity/";
const queryURL = "http://www.boredapi.com/api/activity?type=";
const paragragh = document.getElementById("activity");
const input = document.getElementById("search");

const fetchingFromAPI = (url, callbackFunction, inputValue) => {
  let data;
  fetch(url + inputValue)
    .then((response) => response.json())
    .then((json) => {
      data = json;
    })
    .then(() => callbackFunction(data));
};

const renderingData = (dataFromAPI) => {
  const data = dataFromAPI;
  paragragh.innerHTML = data.activity;
};

input.addEventListener("blur", (e) => {
  fetchingFromAPI(queryURL, renderingData, e.target.value);
});
