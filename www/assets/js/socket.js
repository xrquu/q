const socket = io.connect("https://www.botcords.me");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })