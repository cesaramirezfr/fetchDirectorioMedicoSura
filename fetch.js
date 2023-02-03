const axios = require('axios');

const baseUrl = 'https://ggvw25uxtc.execute-api.us-east-1.amazonaws.com';

const fetchMunicipalities = async () => {
  console.log('Fetching municipalities...');
  const { data } = await axios.post(`${baseUrl}/dev/scanMunicipalitiesRM`);
  return data;
};

const fetchSpecialties = async (codigoMunicipio, nombreMunicipio) => {
  console.log(`Fetching specialties for ${nombreMunicipio}...`);
  const { data } = await axios.post(`${baseUrl}/dev/scanSpecialties`, {
    codigoMunicipio
  });
  return data;
};

const fetchSpecialtieByMunicipality = async (codigoMunicipio, nombreMunicipio, codigoEspecialidad, nombreEspecialidad) => {
  console.log(`Fetching ${nombreEspecialidad} in ${nombreMunicipio}...`);
  const { data } = await axios.post(`${baseUrl}/dev/scanSpecialtieByMunicipality`, {
    codigoMunicipio,
    codigoEspecialidad,
  });
  return data;
};

module.exports = {
  fetchMunicipalities,
  fetchSpecialties,
  fetchSpecialtieByMunicipality,
};