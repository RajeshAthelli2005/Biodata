// Biodata script.js
    let container = document.getElementById("biodata");
    container.style.backgroundColor="lightgray"
    container.style.fontFamily="Arial, sans-serif"
    // Heading
    let heading = document.createElement("h2");
    heading.textContent = "Personal Bio Data";
    container.appendChild(heading);
  


    // Image
    let image = document.createElement("img");
    image.src = "Passphoto_rajesh.jpg";
    image.alt = "Profile Picture";
    image.setAttribute("height","200px")
    image.setAttribute("width","150px")
    image.style.borderRadius="10px"
    container.appendChild(image);

    // Name and details
    const name = document.createElement("p");
    name.innerHTML = "<strong>Name:</strong> Rajesh Athelli";
    container.appendChild(name);

    const age = document.createElement("p");
    age.innerHTML = "<strong>Age:</strong> 20";
    container.appendChild(age);

    const address = document.createElement("p");
    address.innerHTML = "<strong>Address:</strong> Sangareddy, Telangana";
    container.appendChild(address);

    // Education Table
    let tableTitle = document.createElement("h3");
    tableTitle.textContent = "Educational Qualifications";

    container.appendChild(tableTitle);

    let table = document.createElement("table");
    let headerRow = table.insertRow();
    ["S.No", "Degree", "Institute", "Year"].forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });

    let data = [
      ["1", "B.Sc", "Osmania University", "2025"],
      ["2", "Intermediate", "Ujwala Junior College", "2022"],
      ["3", "SSC", "ZPHS Ananthasagar", "2020"]
    ];
    data.forEach(rowData => {
      const row = table.insertRow();
      rowData.forEach(cell => {
        const td = row.insertCell();
        td.textContent = cell;
      });
    });


    container.appendChild(table);

    // Skills Lista
    let skillsTitle = document.createElement("h3");
    skillsTitle.textContent = "Skills";
    skillsTitle.style.textDecoration="underline"
    container.appendChild(skillsTitle);

    let ul = document.createElement("ul");
    ["HTML", "CSS", "JavaScript", "SQL", "Python"].forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.style.color="blue"
      ul.appendChild(li);
    });
    container.appendChild(ul);

    // Footer
    let footer = document.createElement("p");
    footer.style.color="red"
    footer.innerHTML = "<em>Date: 12-June-2025</em>";
    container.appendChild(footer);
    

  