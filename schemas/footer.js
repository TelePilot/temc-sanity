export default {
	title: 'Footer',
	name: 'footer',
	type: 'document',
	fields: [
		{
			title: 'Social media',
			name: 'socialMedia',
			type: 'array',
			of: [{ type: 'socialMedia' }],
		},
		{
			title: 'Company location',
			name: 'companyLocation',
			type: 'array',
			of: [{ type: 'companyLocation' }],
		},
		{
			title: 'Company openhours',
			name: 'companyOpenhours',
			type: 'array',
			of: [{ type: 'companyOpenhours' }],
		},
		{
			title: 'Menu',
			name: 'menu',
			type: 'array',
			of: [{ type: 'menuItem' }],
		},
	],
}
