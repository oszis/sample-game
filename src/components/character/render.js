import React from 'react';
import CharacterAnimation from './character-animation';
import DialogWindow from '../dialog-window';

const CharacterRender = (props) => {
	const { dialog, style, dataLoaded, showDialogWindow } = props.character;
	const {onShowDialogWindow, onHideDialogWindow} = props;

	if (!dataLoaded) return null;

	const dialogWindow = (showDialogWindow && onHideDialogWindow && dialog) ?
		<DialogWindow {...dialog} onHideDialogWindow={onHideDialogWindow}/> : null;

	const characterBlock = (
		<div
			className="character__image"
			style={style}
			onClick={onShowDialogWindow}
			>
			Прототип персонажа
			<CharacterAnimation/>
		</div>);

	return (
		<div className="character">
			{characterBlock}
			{dialogWindow}
		</div>
	);
};

export default CharacterRender;
