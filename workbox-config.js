module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{ico,html,png,txt,css,js}'
	],
	swDest: 'build/sw.js',
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ],
	swSrc: 'src/sw-template.js' // generateSW no funciona con esta propiedad
};