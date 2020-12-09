export default {
	title: 'Priskategori',
	name: 'priskategori',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
        {
            title: 'Icon',
            name: 'icon',
            type: 'image',
            options: {
            hotspot: true, // <-- Defaults to false    
            },
        },
		{
			title: 'Tagline',
			name: 'tagline',
			type: 'string',
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
