document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const job = {
      title: document.getElementById("job_title").value,
      id: document.getElementById("ID").value,
      company: document.getElementById("company_name").value,
      description: document.getElementById("job_description").value,
      salary: document.getElementById("salary").value,
      experience: document.getElementById("years_of_experience").value,
      type: document.querySelector("input[list='job type']").value,
      status: document.querySelector("input[name='status']:checked")?.value || "Open"
    };


    const postedJobs = JSON.parse(localStorage.getItem("posted_jobs")) || [];
    postedJobs.push(job);
    localStorage.setItem("posted_jobs", JSON.stringify(postedJobs));

    const allJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    allJobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(allJobs));

    window.location.href = "Search_page.html";
  });
});
