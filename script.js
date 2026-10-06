function scrollToAgent() {

    document.getElementById("agent").scrollIntoView({
        behavior: "smooth"
    });

}


function generateProject() {

    const domain = document.getElementById("domain").value;
    const projectType = document.getElementById("projectType").value;
    const requirement = document.getElementById("requirement").value;

    const result = document.getElementById("result");


    if (domain === "" || projectType === "" || requirement.trim() === "") {

        result.innerHTML = `
            <h2>⚠️ Please complete all fields</h2>

            <p>
                Select a domain, project type and enter your project requirement.
            </p>
        `;

        return;
    }


    let projectName = "";

    if (domain === "Artificial Intelligence") {

        projectName = "AI Student Smart Assistant";

    } else if (domain === "Machine Learning") {

        projectName = "Student Performance Prediction System";

    } else if (domain === "Cyber Security") {

        projectName = "AI Cyber Security Awareness Assistant";

    } else if (domain === "Web Development") {

        projectName = "Smart Student Project Management System";

    } else if (domain === "IoT") {

        projectName = "Smart Campus IoT Monitoring System";

    } else if (domain === "Data Science") {

        projectName = "Student Data Analytics System";

    } else {

        projectName = "Smart Student Mobile Assistant";

    }


    result.innerHTML = `

        <h2>🎯 Generated Project</h2>

        <h3>Project Title</h3>

        <p>
            <b>${projectName}</b>
        </p>


        <h3>📚 Domain</h3>

        <p>${domain}</p>


        <h3>📌 Project Type</h3>

        <p>${projectType}</p>


        <h3>📝 Project Description</h3>

        <p>
            This project is designed to help students by providing
            an intelligent solution for academic requirements.
            The system can collect student requirements and generate
            useful project information in a structured format.
        </p>


        <h3>🎯 Objectives</h3>

        <ul>

            <li>Provide suitable project ideas.</li>

            <li>Help students understand project requirements.</li>

            <li>Generate project objectives.</li>

            <li>Suggest suitable technologies.</li>

            <li>Provide project development guidance.</li>

        </ul>


        <h3>⚙️ Main Modules</h3>

        <ul>

            <li>Student Requirement Module</li>

            <li>Project Idea Generator</li>

            <li>Technology Recommendation Module</li>

            <li>Project Planning Module</li>

            <li>Viva Question Generator</li>

        </ul>


        <h3>💻 Suggested Technologies</h3>

        <p>
            HTML, CSS, JavaScript, Python and AI/ML technologies
            can be used depending on the project requirements.
        </p>


        <h3>🔍 Student Requirement</h3>

        <p>
            ${requirement}
        </p>

    `;

}