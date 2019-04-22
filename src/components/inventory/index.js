import React, { Component } from 'react';

import InventoryItem from './inventory-item';
import './index.scss';

class Inventory extends Component {
	state = {
		isOpen: false,
		inventory: [
			{
				id: 1,
				image: '#',
				name: 'Имя',
				description: 'Описание',
			},
		],
	};

	onToggleInventory = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		const { isOpen, inventory } = this.state;

		const inventoryContainer = isOpen ? (
			<div className="inventory__container">
				<div className="inventory__container-title">Инвентарь</div>
				<div className="inventory__container-content">
					{
						inventory.map((item) => {
							return <InventoryItem item={item} />;
						})
					}
				</div>
			</div>
		) : null;

		return (
			<div className="inventory">
				<div
					className="inventory__button"
					onClick={this.onToggleInventory}
				/>
				{inventoryContainer}
			</div>
		);
	};
}

// todo: добавить взаимодействие со store

export default Inventory;
