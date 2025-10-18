import * as api from './backend-connection.js';

console.log("I'm the library.js file")

const listUnits = async () => {
  const container = document.getElementById('units-container')
  const units = await api.apiFetch('/units/list', 'GET');

  for(let i = 0; i < units.length; i++) {
    const rect = document.createElement('div');
    rect.style.width = '100px';
    rect.style.height = '50px';
    rect.style.border = '2px solid black';
    rect.style.backgroundColor = 'lightgray';

    container.appendChild(rect);
  }
}

const createUnit = async unitName => {
  const result = await api.apiFetch('/units/add', 'POST', { unitName });
}

window.createUnit = createUnit;
window.createUnits = listUnits();
