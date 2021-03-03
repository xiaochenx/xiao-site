
function addingEventListener() {
    const intro = document.getElementById('intro');

    function clickAlert() {
        alert('I love coding!');
    }

    intro.addEventListener('click', clickAlert); 
}
addingEventListener();