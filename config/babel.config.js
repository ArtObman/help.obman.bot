module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: [
						// Best practice: https://github.com/ArtObman
						'>=1%',
						'not ie 11',
						'not op_mini all',
					],
				},
			},
		],
	],
};
