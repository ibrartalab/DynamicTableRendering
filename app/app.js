let table = document.querySelector("table");
    let btn = document.querySelector(".button");

    //Toaster error
    function toasterToggle() {
      let toaster = document.querySelector("#toast");
      toaster.classList.toggle("hidden");
    }

    btn.addEventListener("click", function () {
      let text = document.querySelector(".textbox");
      let thead = table.getElementsByTagName("thead")[0];
      let tbody = table.getElementsByTagName("tbody")[0];
      let loader = document.querySelector(".progressBox");

      loader.style.display = "block";

      //Add validation on textarea
      if (!text.value) {
        toasterToggle();
        loader.style.display = "none";
        return;
      }
      setTimeout(() => {
        loader.style.display = "none";

        if (text.value.includes("cctv")) {
          console.log("exist");

          // Clear existing headers
          thead.innerHTML = "";
          tbody.innerHTML = "";

          Object.keys(CCTV[0]).forEach((key) => {
            let th = document.createElement("th");
            th.innerHTML = key;
            thead.appendChild(th);
          });

          CCTV.forEach((item) => {
            const newRow = tbody.insertRow();
            Object.values(item).forEach((value) => {
              let cell = newRow.insertCell();
              cell.innerHTML = value;
            });

          
          });
        } else if (text.value.includes("redlight")) {
          console.log("exist");

          // Clear existing headers
          thead.innerHTML = "";
          tbody.innerHTML = "";
          Object.keys(REDLIGHT[0]).forEach((key) => {
            let th = document.createElement("th");
            th.innerHTML = key;
            thead.appendChild(th);
          });

          REDLIGHT.forEach((item) => {
            const newRow = tbody.insertRow();
            Object.values(item).forEach((value) => {
              let cell = newRow.insertCell();
              cell.innerHTML = value;
            });
          });
          
        } else {
          tbody.innerHTML = "Out of the scoop";
          tbody.style.fontSize = "15px";

          console.log("not exist");
        }
        text.value = " ";
      }, 1000);
    });