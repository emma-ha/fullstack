const express = require('express')

const morgan = require('morgan')

const app = express()
app.use(express.json())

morgan.token('body', (request, response) => 
    request.method === 'POST' ? JSON.stringify(request.body): ''
)


app.use(morgan((tokens, req, res) => 
    [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms', tokens.body(req, res),
    ].join(' ')
))


const generateId = () => Math.floor((Math.random() * 100000) + 1);


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => { 
    const output = `
        <p>Phonebook has info for ${persons.length} people</p>

        ${new Date()}
    `
    response.send(output)

})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const per = persons.find(person => id === person.id)
    if(per){
        response.json(per)
    }else{
        response.status(404).end()
    }
})

app.post('/api/persons', (request, response) => {
    const bodyNa = request.body.name 
    const bodyNu = request.body.number

    if (!bodyNa || !bodyNu) {
        return response.status(400).json({ 
            error: 'The name or number is missing' 
        })
    }

    const f = persons.find(person => person.name === request.body.name)

    if(f){
        return response.status(400).json({ 
            error: 'name must be unique' 
        })
    }

    const person = {
        id: generateId(),
        name: request.body.name,
        number: request.body.number
    }
    
    persons = persons.concat(person)

    response.json(person)

})


app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })