function addEvent(){
  const title = document.getElementById("eventTitle").value;
  const time = document.getElementById("eventTime").value;

  if(!title || !time) return alert("Fill all fields");

  let events = JSON.parse(localStorage.getItem("events")) || [];
  events.push({title, time});
  localStorage.setItem("events", JSON.stringify(events));

  renderEvents();
}

function renderEvents(){
  const container = document.getElementById("eventsContainer");
  if(!container) return;

  container.innerHTML = "";
  let events = JSON.parse(localStorage.getItem("events")) || [];

  events.forEach(e=>{
    container.innerHTML += `
      <div class="card">
        <h3>${e.title}</h3>
        <p>${e.time}</p>
      </div>
    `;
  });
}

window.onload = renderEvents;
