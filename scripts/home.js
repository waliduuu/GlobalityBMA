document.getElementById('animatedLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the link (redirecting immediately)
    var link = this;
    link.classList.add('clicked'); // Adds a class for styling or further animation
    setTimeout(function() {
        window.location.href = link.getAttribute('href'); // Redirects to the link after the animation duration
    }, 500); // Adjust this value to match the animation duration
});
