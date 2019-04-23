import React from 'react';
import CharacterAnimation from './character-animation';
import DialogWindow from '../dialog-window';

const CharacterRender = (character) => {
	const { dialog, style, showDialogWindow,dataLoaded } = character;

	if (!dataLoaded) return null;

	const dialogWindow = (showDialogWindow && dialog) ?
		<DialogWindow dialog={dialog}/> : null;

	const characterBlock = (
		<div
			className="character__image"
			style={style}
			onClick={showDialogWindow}>
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
