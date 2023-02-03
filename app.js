const fs = require('fs');
const { parse } = require('json2csv');
const { fetchMunicipalities, fetchSpecialties, fetchSpecialtieByMunicipality } = require('./fetch');

const municipioInteres = 'Medellin';

(async () => {
  const municipios = await fetchMunicipalities();
  const { cdMunicipio, dsMunicipio } = municipios.find((municipio) => municipio.dsMunicipio.toLowerCase().includes(municipioInteres.toLowerCase()));
  
  const especialidades = await fetchSpecialties(cdMunicipio, dsMunicipio);

  const especialidadesMunicipio = especialidades.map(({ cdEspecialidad, dsEspecialidad }) => fetchSpecialtieByMunicipality(cdMunicipio, dsMunicipio, cdEspecialidad, dsEspecialidad));

  const listadoEspecialidades = await Promise.all(especialidadesMunicipio);
  const directorioMedico = listadoEspecialidades.flat();

  fs.writeFileSync('directorioMedico.csv', parse(directorioMedico));

  console.log('Done!');
})();
