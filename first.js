const url = "https://www.boredapi.com/api/activity/";
const paragragh = document.getElementById("activity");
const button = document.getElementsByTagName("button")[0];

const fetchingFromAPI = (url, callbackFunction) => {
  let data;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      data = json;
    })
    .then(() => callbackFunction(data));
};

const renderingData = (dataFromAPI) => {
  const data = dataFromAPI;

  button.innerHTML = data.type;
  let isFirstTime = true;
  button.addEventListener("click", () => {
    if (isFirstTime) {
      paragragh.innerHTML = data.activity;
      isFirstTime = false;
    } else {
      fetchingFromAPI(url, (dataFromAPI) => {
        button.innerHTML = dataFromAPI.type;
        paragragh.innerHTML = dataFromAPI.activity;
      });
    }
  });
};

fetchingFromAPI(url, renderingData);



const test = (attendance) => (attendance ? "Great!" : "Frowny face");

console.log(test(false));

const attendance = false;
attendance && console.log("Something");