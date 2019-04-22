const inventory = (state = [], action) => {
	switch (action.type) {
		case 'INVENTORY_GET_ITEMS':
			return state;
		case 'INVENTORY_ADD_ITEM':
			return action.payload;
		case 'INVENTORY_REMOVE_ITEM':
			return action.payload;
		default:
			return state
	}
};

export default inventory;
