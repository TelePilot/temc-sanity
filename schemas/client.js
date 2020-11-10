export default {
	title: 'Client',
	name: 'client',
	type: 'document',
	fields: [
		{
			title: 'Client name',
			name: 'clientName',
			type: 'string',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Logo (please compress image and resize)',
			name: 'logo',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
			},
		},
		{
			title: 'Website Image (please compress image and resize)',
			name: 'websiteImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Website Link',
			name: 'websiteLink',
			type: 'url',
		},
	],
}
