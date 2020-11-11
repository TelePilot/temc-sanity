export default {
	title: 'About',
	name: 'about',
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
			title: 'Description',
			name: 'description',
			type: 'text',
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
