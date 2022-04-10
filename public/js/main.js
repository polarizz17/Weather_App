const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const data_hide = document.getElementById('data_hide');



const getInfo = async(event)=>{
    event.preventDefault()
    let cityVal = cityName.value
    if (cityVal == "") {
        city_name.innerText = `Please write the city name before search`;
        temp_status.style.visibility = 'hidden';
        temp.style.visibility = 'hidden';
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e36f41d2aa85aa2bb09048fa98fb41b9`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // data_hide.style.visibility = 'visible';
            temp_real_val.innerText= arrData[0].main.temp;
            temp_status.innerText= arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}` 
            const tempMood = arrData[0].weather[0].main;
            temp_status.style.visibility = 'visible';
            temp.style.visibility = 'visible';
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
              } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } else {
                temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                  
              }

        } catch (error) {
            city_name.innerText = `Please write the city name Properly`;
            temp_status.style.visibility = 'hidden';
            temp.style.visibility = 'hidden';
        }
        
    }
};

submitBtn.addEventListener('click',getInfo);