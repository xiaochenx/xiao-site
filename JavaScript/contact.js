function addingEventListener() {
    const email = document.getElementById('email');

    function clickAlert() {
        alert('Shoot me an email!');
    }

    email.addEventListener('click', clickAlert); 
}
addingEventListener();