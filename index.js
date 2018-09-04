/* eslint-disable no-var, vars-on-top */

function parseIFrame(iframeStr) {
  if (iframeStr.length < 1 || !iframeStr.includes('src="')) {
    alert('Enter a valid iframe element');
    return '';
  }
  const splitStr = iframeStr.split('src="')[1];
  const endIdx = splitStr.indexOf('"');
  return splitStr.slice(0, endIdx);
}

window.onload = function() {
  var mp3 = document.getElementById('mashup');
  var playButton = document.getElementsByClassName('btn-container')[0];
  var slideSrc = document.getElementById('slideSrc');
  var container = document.getElementById('container');

  playButton.addEventListener('click', () => {
    var src = parseIFrame(slideSrc.value);
    if (src.length === 0) return;
    container.classList.add('hidden');

    var iframeDom = document.createElement('iframe');
    iframeDom.id = 'slideshow';
    iframeDom.src = src;
    iframeDom.frameborder = '0';
    iframeDom.width = window.innerWidth;
    iframeDom.height = window.innerHeight;
    iframeDom.setAttribute('allowFullScreen', 'true');
    iframeDom.setAttribute('mozallowfullscreen', 'true');
    iframeDom.setAttribute('webkitallowfullscreen', 'true');
    iframeDom.onload = function onIframeLoad() {
      mp3.play();
    };

    document.body.appendChild(iframeDom);
  });
};
