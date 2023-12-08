let api_key = '2a7ab6d18485e9190f22fd12d0840aab'

let urlBase ='https://api.openweathermap.org/data/2.5/weather'

let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    fetchDatosClima(ciudad)
})
function fetchDatosClima (ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima (data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    // const nombreCiudad = data.name
    // const nombrePais = data.sys.country
    // const temperatura = data.main.temp
    // const humedad = data.main.humidity
    // const descripcion = data.weather[0].description
    // const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${data.name}, ${data.sys.country}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(data.main.temp-difKelvin)} °c`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${data.main.humidity}%`

    const iconoInfo = document.createElement("img")
    iconoInfo.src= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `la descripcion meteorologica es: ${data.weather[0].description}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}
