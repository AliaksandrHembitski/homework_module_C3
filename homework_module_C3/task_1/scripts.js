function keysValuesProperties(entity) {
	for (let key in entity) {
		if (entity.hasOwnProperty(key)) {
			console.log(key, entity[key])
		}
	}
}
