window.onload = function () {
    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("location").value = localStorage.getItem("location") || "";
    document.getElementById("occupation").value = localStorage.getItem("occupation") || "";
    document.getElementById("skills").value = localStorage.getItem("skills") || "";
    document.getElementById("experience").value = localStorage.getItem("experience") || "";
};

function saveProfileChanges() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;
    const occupation = document.getElementById("occupation").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("location", location);
    localStorage.setItem("occupation", occupation);
    localStorage.setItem("skills", skills);
    localStorage.setItem("experience", experience);

    window.location.href = "profile.html";
}
