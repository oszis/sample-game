<h1>Визуальная новелла для обката React, Redux и Electron.</h1>

<h2>Шаблоны json файла:</h2>

<h3>Главный шаблон</h3>

```
{
    roomsList: Array(Objects),
    currentRoom: Number,
    inventory: Array(Objects),
    messages: Array(Objects),
    gameRoutes: Array(Objects), 
    settings: Object,
    loadGame: Boolean,
    userData: {
        Time: String,
        Date: String
    }
}
```

<h4>Шаблон комнаты</h4>

```
{
    name: String,
    id: Number,
    dialogsList: Array(Objects),
    itemsList: Array(Objects),
    charactersList: Array(Objects),
    RoomLinks: Array(Objects)
}
```

<h5>dialogsList</h5>

```
dialogsList: [
    {
        constant: bool,
        done: bool,
        charactersList: Array(String),
        replicsList: Array(String)        
    }
]
```

<h5>charactersList</h5>

```
charactersList: [
    {
        id: Number,
        active: bool,
        image: String,
        name: String
    }
]
```

<h5>replicsList</h5>

```
replicsList: [
    {
        author: String,
        replic: String,
        hasAnswer: bool,
        answerList: Array(Objects)
    }
]
```

<h5>answerList</h5>

```
answerList: [
    {
        text: String,
        goto: Number,
        key: Number
    }
]
```

<h4>Шаблон инвентаря</h4>
```
inventory: [
    {
        id: Number,
        image: String,
        name: String,
        description: String
    } 
]
```

<h4>Шаблон сообщений (messages)</h4>

```
messages: [
    {
        id: Number,
        Title: String,
        Content: String
    }
]
```

<h4>Шаблон путей сюжета (gameRoutes)</h4>

```
gameRoutes: [
    {
        id: Number,
        name: String,
        steps: Array(Numbers),
        currentStep: Number
    }
]
```
