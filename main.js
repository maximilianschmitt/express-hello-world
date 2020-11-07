const express = require('express')

const PORT = process.env.PORT || 4000

const app = express()

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.get('/:message', (req, res) => {
	res.send('Your message: ' + req.params.message)
})

app.listen(PORT, (err) => {
	if (err) {
		throw err
	}

	console.log('Express server listening on port ' + PORT)
})
