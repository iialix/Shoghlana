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
  
      const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
      jobs.push(job);
      localStorage.setItem("jobs", JSON.stringify(jobs));
  
      window.location.href = "Search_page.html";
    });
  });
  