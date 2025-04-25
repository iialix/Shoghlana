window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("profile-name").textContent = localStorage.getItem("name") || "Default Name";
    document.getElementById("profile-email").textContent = localStorage.getItem("email") || "email@example.com";
    document.getElementById("profile-location").textContent = localStorage.getItem("location") || "Unknown";
    document.getElementById("profile-occupation").textContent = localStorage.getItem("occupation") || "Occupation";
    document.getElementById("profile-skills").textContent = localStorage.getItem("skills") || "Skills";
    document.getElementById("profile-experience").textContent = localStorage.getItem("experience") || "0";
});
