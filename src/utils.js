const fetchLocations = res => res.data.features.map(location => location.properties.PCON13NM);

export const setOptions = res => fetchLocations(res).map(o => Object.assign({ value: o, label: o }, {}));

export const fetchArea = res => res.data.features.map(location => location.geometry.coordinates[0]);

export const setPolys = res => fetchArea(res).map(r => r.join(':'));
