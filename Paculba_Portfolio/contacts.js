 function openEmailModal(event) {
    event.preventDefault();
    document.getElementById('emailModal').style.display = 'flex';
}

function closeEmailModal() {
    document.getElementById('emailModal').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('emailModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listener for email link
document.addEventListener('DOMContentLoaded', function() {
    var emailLink = document.getElementById('emailLink');
    if (emailLink) {
        emailLink.addEventListener('click', openEmailModal);
    }
});

