class GameService {
	getDialog = () => {
		return [
			{
				author: 'char-1',
				replic: 'Первая реплика',
				hasAnswer: false,
			},
			{
				hasAnswer: true,
				answerList: [
					{
						text: 'Ответ, ведущий к 2 реплике',
						goto: 2,
						key: 1,
					},
					{
						text: 'Ответ, ведущий к 3 реплике',
						goto: 3,
						key: 2,
					},
					{
						text: 'Ответ, ведущий к 4 реплике',
						goto: 4,
						key: 3,
					},
				],
			},
			{
				author: 'char-1',
				replic: 'Вторая реплика',
				hasAnswer: false,
			},
			{
				author: 'char-1',
				replic: 'Третья реплика',
				hasAnswer: false,
			},
			{
				author: 'char-1',
				replic: 'Четвертая реплика',
				hasAnswer: false,
			},
		]
	}
}

export default GameService;
