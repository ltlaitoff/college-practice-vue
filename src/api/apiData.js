const tomatoProducts = [
	{
		id: 0,
		name: 'TAG 1000 (TAG 853)',
		type: 'Tomato Determinate Red Round',
		image: 'tomato-1000'
	},
	{
		id: 1,
		name: 'TAG 1001 (TAG 855)',
		type: 'Tomato Determinate Red Standard',
		image: 'tomato-1001'
	},
	{
		id: 2,
		name: 'TAG 1002 (TAG 809)',
		type: 'Tomato Determinate Red Standard-round',
		image: 'tomato-1002'
	},
	{
		id: 3,
		name: 'TAG 1003 (TAG 834)',
		type: 'Tomato Determinate Red',
		image: 'tomato-1003'
	},
	{
		id: 4,
		name: 'TAG 1004 (TAG 848)',
		type: 'Tomato Determinate Red BEEF Round',
		image: 'tomato-1004'
	},
	{
		id: 5,
		name: 'TAG 1005 (TAG 800) ',
		type: 'Tomato Determinate Red Standard-round-2',
		image: 'tomato-1005'
	},
	{
		id: 6,
		name: 'TAG 1006 (TAG 898)',
		type: 'Tomato Determinate Red Elongated',
		image: 'tomato-1006'
	},
	{
		id: 7,
		name: 'TAG 1007 (TAG 816)',
		type: 'Tomato Determinate Red Alon',
		image: 'tomato-1007'
	}
]

const ornamentalSunflowersProducts = [
	{
		id: 0,
		name: 'Tabor Double (859)',
		type: 'Classic',
		image: 'ornamental-859'
	},
	{
		id: 1,
		name: 'Tabor Lemon - 1235',
		type: 'Lemon classic',
		image: 'ornamental-1235'
	},
	{
		id: 2,
		name: 'Tabor Orange 1252',
		type: 'Yellow core',
		image: 'ornamental-1252'
	},
	{
		id: 3,
		name: 'Maya Orange - JG-98',
		type: 'Orange classic',
		image: 'ornamental-98'
	},
	{
		id: 4,
		name: 'Omri Supreme - JG-214',
		type: 'Full flower',
		image: 'ornamental-214'
	},
	{
		id: 5,
		name: 'Maya Gold Supreme - DC 135',
		type: 'Yellow core',
		image: 'ornamental-135'
	},
	{
		id: 6,
		name: 'Tanja - 500',
		type: 'BI Color',
		image: 'ornamental-500'
	},
	{
		id: 7,
		name: 'Helianthus Flame 893 ',
		type: 'Lemon classic',
		image: 'ornamental-893'
	},
	{
		id: 8,
		name: 'Carmel 337',
		type: 'BI Color',
		image: 'ornamental-337'
	},
	{
		id: 9,
		name: 'Galilee Orange 460',
		type: 'Lemon classic',
		image: 'ornamental-460'
	}
]

const wheatProducts = [
	{
		id: 0,
		name: 'Yuval',
		type: 'Spring Wheat',
		image: 'wheat-yuval'
	},
	{
		id: 1,
		name: 'Nirit',
		type: 'Spring Wheat',
		image: 'wheat-nirit'
	},
	{
		id: 2,
		name: 'Gedera',
		type: 'Spring Wheat',
		image: 'wheat-gedera'
	},
	{
		id: 3,
		name: 'Omer',
		type: 'Spring Wheat',
		image: 'wheat-omer'
	},
	{
		id: 4,
		name: 'C-9 ',
		type: 'DURUM',
		image: 'wheat-c-9'
	},
	{
		id: 5,
		name: 'Amit',
		type: 'Spring Wheat',
		image: 'wheat-amit'
	},
	{
		id: 6,
		name: 'DAR',
		type: 'Spring Wheat (silage)',
		image: 'wheat-dar'
	},
	{
		id: 7,
		name: 'AG-78 (new)',
		type: 'Spring Type grains & silage',
		image: 'wheat-ag-78-new'
	}
]

export const products = [
	{
		id: 0,
		categoryShortName: 'Tomato',
		categoryFullName: 'Agridera Fresh Market Tomato Hybrids',
		categoryImage: 'tomato',
		disabled: false,
		products: tomatoProducts
	},
	{
		id: 1,
		categoryShortName: 'Ornamental Sunflowers',
		categoryFullName: '',
		categoryImage: 'ornamentalSunflowers',
		disabled: false,
		products: ornamentalSunflowersProducts
	},
	{
		id: 2,
		categoryShortName: 'Wheat',
		categoryFullName: '',
		categoryImage: 'wheat',
		disabled: false,
		products: wheatProducts
	},
	{
		id: 3,
		categoryShortName: 'Confection Sunflowers',
		categoryFullName: '',
		categoryImage: 'confectionSunflowers',
		disabled: true,
		products: []
	},
	{
		id: 4,
		categoryShortName: 'Clover',
		categoryFullName: '',
		categoryImage: 'clover',
		disabled: true,
		products: []
	},
	{
		id: 5,
		categoryShortName: 'Eggplant O/P',
		categoryFullName: '',
		categoryImage: 'eggplant',
		disabled: true,
		products: []
	},
	{
		id: 6,
		categoryShortName: 'Confection Watermelon',
		categoryFullName: '',
		categoryImage: 'confectionWatermelon',
		disabled: true,
		products: []
	}
]
