export default {
	title: 'Header',
	name: 'header',
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
			title: 'Logo',
			name: 'logo',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
			},
		},
		{
			title: 'Hero Image',
			name: 'heroImage',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
			},
		},
		{
			title: 'Menu',
			name: 'menu',
			type: 'array',
			of: [{ type: 'menuItem' }],
		},
	],
}
