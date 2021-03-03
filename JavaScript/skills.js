function addingEventListener() {
    const content = document.getElementById('content');

    function clickAlert() {
        alert('Always learning!');
    }

    content.addEventListener('click', clickAlert); 
}
addingEventListener();