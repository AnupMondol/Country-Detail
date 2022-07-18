fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries =>{
    // console.log(countries);

    countries.forEach(country => {
        // console.log(country);
        displayName(country);
    });

    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
        
    //     displayName(country);
    // }
}

const displayName = countryName =>{
    const country = document.getElementById('countries');

    const countryDiv = document.createElement('div');
    country.appendChild(countryDiv);

    countryDiv.className = 'country';

    const namee = countryName.name;
    const nameee = namee.common;

    

    const capital = countryName.capital;
    const timeZone = countryName.timezones;

    const countryInfo = `
    <h1 class = "name">${nameee}</h1>
    <button class = "button" onclick="displayCountryDetail('${nameee}')">Details</button>
    `;
    countryDiv.innerHTML = countryInfo;
}

const displayCountryDetail = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}

const renderCountryInfo = country => {
    // console.log(country);

    const countryDiv = document.getElementById('detailes');
    const countriess = document.getElementById('countries');

    countriess.style.display = ('none');

    const namee = country.name;
    const commonName = namee.common;

    const capital = country.capital;

    const flag = country.flags;
    
    

    const name = `
    <h1 class = "name">Name : ${commonName}.</h1>
    <h2 class = "capital"> Capital : ${capital}.</h2>
    <h2 class = "official-name"> Population : ${country.population}.</h2>
    <h2 class = "area"> Area : ${country.area}.</h2>
    <h2 class = "region"> Region : ${country.region}.</h2>
    <img src = "${flag.png}">
    `;

    countryDiv.innerHTML = name;

    countryDiv.style.display = ('block');
    
}

