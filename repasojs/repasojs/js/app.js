const COUNTRY_CODES = {
	BRAZIL : 'br',
	COLOMBIA : 'co',
	CHILE : 'cl',
	MEXICO : 'mx'
}

const regionLanguage = (countryCode) => {
	if (countryCode === COUNTRY_CODES.BRAZIL) {
		return 'PT';
	} else {
		return 'ES';
	}
}

console.log(regionLanguage('co'));