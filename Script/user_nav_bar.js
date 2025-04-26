const userType = localStorage.getItem('userType');

if (userType === 'User') {
    const posted_job = document.getElementById('post_job');
    posted_job.style.display = 'none';
}
