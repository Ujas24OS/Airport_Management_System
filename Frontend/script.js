let allVisitors = [];


// LOAD VISITORS
function loadVisitors() {

    fetch("http://localhost:3000/Visitors")
        .then(response => response.json())
        .then(data => {

            allVisitors = data;

            displayVisitors(allVisitors);

        })
        .catch(error => {
            console.error("Error loading visitors:", error);
        });
}


// DISPLAY VISITORS
function displayVisitors(visitors) {

    let table = document.getElementById("visitorData");

    table.innerHTML = "";

    if (visitors.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;">
                    No visitors found
                </td>
            </tr>
        `;

        return;
    }

    visitors.forEach(visitor => {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${visitor.visitor_id}</td>
            <td>${visitor.name}</td>
            <td>${visitor.phone}</td>
            <td>${visitor.id_type}</td>
            <td>${visitor.id_number}</td>
        `;

        table.appendChild(row);

    });
}


// REGISTER VISITOR

document
    .getElementById("visitorForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const visitor = {

            name: document.getElementById("name").value,

            phone: document.getElementById("phone").value,

            id_type: document.getElementById("id_type").value,

            id_number: document.getElementById("id_number").value

        };


        fetch("http://localhost:3000/Visitors", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(visitor)

        })

        .then(response => response.json())

        .then(data => {

            alert("Visitor registered successfully!");

            document
                .getElementById("visitorForm")
                .reset();

            loadVisitors();

        })

        .catch(error => {

            console.error(
                "Error registering visitor:",
                error
            );

            alert("Failed to register visitor.");

        });

    });


// SEARCH VISITORS
function searchVisitors() {

    let searchText =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();


    if (searchText === "") {

        displayVisitors(allVisitors);

        return;

    }


    let filteredVisitors = allVisitors.filter(visitor => {

        let name =
            String(visitor.name || "").toLowerCase();

        let phone =
            String(visitor.phone || "").toLowerCase();

        let idNumber =
            String(visitor.id_number || "").toLowerCase();


        return (
            name.includes(searchText) ||
            phone.includes(searchText) ||
            idNumber.includes(searchText)
        );

    });


    displayVisitors(filteredVisitors);

}


// Search button
document
    .getElementById("searchButton")
    .addEventListener("click", function() {

        searchVisitors();

    });


// Press Enter to search
document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            searchVisitors();

        }

    });


// Clear search
document
    .getElementById("clearButton")
    .addEventListener("click", function() {

        document
            .getElementById("searchInput")
            .value = "";

        displayVisitors(allVisitors);

    });


// LOAD FLIGHTS

function loadFlights() {

    fetch("http://localhost:3000/Flights")

        .then(response => response.json())

        .then(data => {

            let table =
                document.getElementById("flightData");

            table.innerHTML = "";


            data.forEach(flight => {

                let row =
                    document.createElement("tr");

                row.innerHTML = `
                    <td>${flight.flight_id}</td>
                    <td>${flight.flight_number}</td>
                    <td>${flight.destination}</td>
                    <td>${flight.departure_time}</td>
                `;

                table.appendChild(row);

            });

        })

        .catch(error => {

            console.error(
                "Error loading flights:",
                error
            );

        });

}




// START

loadVisitors();
loadFlights();


// LOAD GATES

function loadGates() {

    fetch("http://localhost:3000/Gates")

        .then(response => response.json())

        .then(data => {

            let table =
                document.getElementById("gateData");

            table.innerHTML = "";

            data.forEach(gate => {

                let row =
                    document.createElement("tr");

                row.innerHTML = `
                    <td>${gate.gate_id}</td>
                    <td>${gate.gate_name}</td>
                `;

                table.appendChild(row);

            });

        })

        .catch(error => {

            console.error(
                "Error loading gates:",
                error
            );

        });

}


// Load gates when page opens
loadGates();


// LOAD ENTRY LOGS

function loadEntryLogs() {

    fetch("http://localhost:3000/EntryLog")

        .then(response => response.json())

        .then(data => {

            let table =
                document.getElementById("entryData");

            table.innerHTML = "";

            data.forEach(entry => {

                let row =
                    document.createElement("tr");

                row.innerHTML = `
                    <td>${entry.entry_id}</td>
                    <td>${entry.visitor_id}</td>
                    <td>${entry.flight_id}</td>
                    <td>${entry.gate_id}</td>
                    <td>${entry.entry_time}</td>
                    <td>${entry.security_status}</td>
                `;

                table.appendChild(row);

            });

        })

        .catch(error => {

            console.error(
                "Error loading entry logs:",
                error
            );

        });

}

loadEntryLogs();


// DASHBOARD COUNTS

function updateDashboardCounts() {

    // Visitors
    fetch("http://localhost:3000/Visitors")
        .then(response => response.json())
        .then(data => {
            document.getElementById("visitorCount").innerText =
                data.length;
        });


    // Flights
    fetch("http://localhost:3000/Flights")
        .then(response => response.json())
        .then(data => {
            document.getElementById("flightCount").innerText =
                data.length;
        });


    // Gates
    fetch("http://localhost:3000/Gates")
        .then(response => response.json())
        .then(data => {
            document.getElementById("gateCount").innerText =
                data.length;
        });


    // Entry Logs
    fetch("http://localhost:3000/EntryLog")
        .then(response => response.json())
        .then(data => {
            document.getElementById("entryCount").innerText =
                data.length;
        });

}

updateDashboardCounts();


