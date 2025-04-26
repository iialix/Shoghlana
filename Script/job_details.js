document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }


    const jobTitle = getQueryParam("title") || "Job Title";
    const companyName = getQueryParam("company") || "Company Name";
    const jobId = getQueryParam("id") || "N/A";
    const salary = getQueryParam("salary") || "0000";
    const status = getQueryParam("status") || "Unknown";
    const experience = getQueryParam("experience") || "0";
    const description = getQueryParam("description") || "No description provided.";

    document.querySelector(".job_title").textContent = jobTitle;
    document.querySelector(".company_name").textContent = companyName;
    document.querySelector(".job_id").textContent = "ID: " + jobId;
    document.querySelector(".salary").textContent = "Salary: " + salary + "$";
    document.querySelector(".job_status").textContent = "Status: " + status;
    document.querySelector(".job_experience").textContent = "Experience required: " + experience + " Year(s)";
    document.querySelector(".job_description").textContent = "Job Description: " + description;

    const statusElement = document.querySelector(".job_status");
    const applyButton = document.querySelector(".apply_button");

    if (statusElement && applyButton) {
        const statusText = statusElement.textContent.toLowerCase();


        if (statusText.includes("closed")) {
            applyButton.style.display = "none";
        }


        const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
        const alreadyApplied = appliedJobs.some(job => job.title === jobTitle && job.company === companyName);

        if (alreadyApplied) {
            applyButton.style.display = "none";
        }


        applyButton.addEventListener("click", function () {
            const newJob = {
                title: jobTitle,
                company: companyName,
                salary: salary,
                experience: experience,
                status: status,
                description: description,
            };

            appliedJobs.push(newJob);
            localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

            applyButton.style.display = "none";
            window.location.href = "applied_jobs.html";
        });
    }
});

const userType = localStorage.getItem('userType');

if (userType === 'Admin') {
    const apply_button = document.getElementById('apply_button');
    apply_button.style.display = 'none';
}
