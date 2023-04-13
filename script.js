//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'The Rolling Stones', 'Aerosmith'];

// function to remove articles from band names
function removeArticles(name) {
  // regular expression to match articles
  let regex = /^(a|an|the)\s/i;
  return name.replace(regex, '');
}

// sort the band names without articles in lexicographic order
bandNames.sort((a, b) => {
  let nameA = removeArticles(a).toUpperCase();
  let nameB = removeArticles(b).toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

// display the sorted band names in an unordered list
let ul = document.getElementById('band');
for (let i = 0; i < bandNames.length; i++) {
  let li = document.createElement('li');
  li.textContent = bandNames[i];
  ul.appendChild(li);
}

