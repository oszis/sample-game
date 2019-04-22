import React, { Component } from 'react';

import { connect } from 'react-redux';

import InventoryItem from './inventory-item';
import './index.scss';

class Inventory extends Component {
	state = {
		isOpen: false,
		items: [],
	};

	onEscKeyPress = (e) => {
		const { isOpen } = this.state;

		if (isOpen && e.key === 'Escape') {
			this.props.inventoryToggled(!isOpen);

			this.setState({
				isOpen: !isOpen,
			});
		}
	};

	componentWillMount() {
		const { isOpen, items } = this.props.inventory;

		this.setState({
			items,
			isOpen,
		});

		document.addEventListener('keydown', this.onEscKeyPress);
	}

	componentWillReceiveProps(nextProps) {
		const { isOpen, items } = nextProps.inventory;

		this.setState({
			items,
			isOpen,
		});
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onEscKeyPress);
	}

	onToggleInventory = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		const { isOpen, items } = this.state;

		const itemList = items.map((item) => {
			return <InventoryItem item={item} key={item.id}/>;
		});

		const inventoryContainer = isOpen ? (
			<div className="inventory__container">
				<div className="inventory__container-title">Инвентарь</div>
				<div className="inventory__container-content">
					{itemList}
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

const mapStateToProps = (state) => {
	return {
		inventory: state.inventory,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		inventoryToggled: (isOpen) => {
			dispatch({
				type: 'INVENTORY_TOGGLE',
				payload: isOpen,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
