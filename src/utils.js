export const fetchLocations = res => res.data.features.map(location =>
    Object.assign({
        value: location.properties.LAD13CDO,
        label: location.properties.LAD13NM,
        coordinates: location.geometry.coordinates,
    }, {})
);

export const fetchPolys = ((locations, value) => locations.find(l => {
    return l.value === value;
}));

export const flatten = (arr) => {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
