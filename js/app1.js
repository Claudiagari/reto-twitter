window.addEventListener('load', function() {
  var btn = document.getElementById('btn');
  var textarea = document.getElementById('letters');
  textarea.addEventListener('keyup', function account() {
    var max = 140;
    var rest = '';
    var letters = document.getElementById('letters').value.length;
    rest = max - letters;
    document.getElementById('number').value = rest;
    number.innerHTML = rest;
  });
  btn.addEventListener('click', function() {
    var storyDiv = document.createElement('div');
    var container = document.createElement('p');
    storyDiv.classList.add('story');
    var time = moment().format('LT');
    container.innerHTML = time;
    var text = document.getElementById('letters').value;
    storyDiv.innerHTML = text;
    storyDiv.appendChild(container)
    document.body.appendChild(storyDiv);
    textarea.value = '';
    document.getElementById('number').textContent = '140';
  });
  
});