import React from 'react';

const InventoryItem = ({ item }) => {
	return (
		<div className="inventory__item" key={item.id}>
			<div className="inventory__item-image">
				<img src={item.image} alt={item.name}/>
			</div>
			<div className="inventory__item-description">
				<div className="inventory__item-name">{item.name}</div>
				<div className="inventory__item-content">{item.description}</div>
			</div>
		</div>
	);
};

export default InventoryItem;
