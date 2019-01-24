const fs = require('fs')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
let cardData;

fs.readFile('./data/card-data.json', 'utf8', function (err, data) {
	if(err) throw err;
	cardData = JSON.parse(data)
})

app.get('/table', (req, res) => {
				res.set({
							'Access-Control-Allow-Origin': ['*'],
							'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
								})
				res.json(cardData)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))