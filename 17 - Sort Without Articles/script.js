const bands = ['Citir Kızlar', 'The Devil Wears Prada', 'Pierce the Veil', 'Cartel', 'The Bled', 'Grup Vitamin', 'The Midway State', 'We Came as Romans', 'İzel Celik Ercan', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim()
};

let sortedBands = bands.sort((a,b) => strip(a)>strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = 
sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');