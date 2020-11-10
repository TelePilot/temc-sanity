export default {
	title: 'Tagline',
	name: 'tagline',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Tagline',
			name: 'tagline',
			type: 'string',
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
			},
		},
	],
}
