import React from 'react';
import CharacterAnimation from './character-animation';
import DialogWindow from '../dialog-window';

const CharacterRender = (props) => {
	const { dialog, style, dataLoaded, showDialogWindow } = props.character;
	const onShowDialogWindow = props.onShowDialogWindow;

	if (!dataLoaded) return null;

	const dialogWindow = (showDialogWindow && dialog) ?
		<DialogWindow dialog={dialog}/> : null;

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
