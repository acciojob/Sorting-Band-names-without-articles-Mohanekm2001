let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'The Who'];

// Function to strip articles from band names
function stripArticles(name) {
	return name.replace(/^(a |an |the )/i, '').trim();
}

// Sorting band names without articles in lexicographic order
bandNames.sort(function(a, b) {
	return stripArticles(a) > stripArticles(b) ? 1 : -1;
});

// Adding sorted band names to the unordered list with id 'band'
let ul = document.getElementById('band');
for (let i = 0; i < bandNames.length; i++) {
	let li = document.createElement('li');
	li.textContent = bandNames[i];
	ul.appendChild(li);
}
