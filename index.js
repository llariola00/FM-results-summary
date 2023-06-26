import data from './data.json' assert { type: 'json' }

document.getElementById('icon-reaction').src = data[0].icon
document.getElementById('stat-reaction').innerText = data[0].category
document.getElementById('score-reaction').innerText = data[0].score

document.getElementById('icon-memory').src = data[1].icon
document.getElementById('stat-memory').innerText = data[1].category
document.getElementById('score-memory').innerText = data[1].score

document.getElementById('icon-verbal').src = data[2].icon
document.getElementById('stat-verbal').innerText = data[2].category
document.getElementById('score-verbal').innerText = data[2].score

document.getElementById('icon-visual').src = data[3].icon
document.getElementById('stat-visual').innerText = data[3].category
document.getElementById('score-visual').innerText = data[3].score
