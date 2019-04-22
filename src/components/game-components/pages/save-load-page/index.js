import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SaveLoadPage extends Component {
	componentWillMount() {
		this.setState({
			loadGame: this.props.loadGame,
		});

		document.addEventListener('keydown', this.onEscKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onEscKeyPress);
	}

	onEscKeyPress = (e) => {
		if (e.key === 'Escape') {
			this.props.history.goBack();
		}
	};

	render() {
		return (
			<div className="save-load page">
				<div className="page__popup">
					Save Load. Тут будет страница с последними сохраненными играми, форма удаления/загрузки сохранения.
				</div>
			</div>
		);
	}
}

export default withRouter(SaveLoadPage);
