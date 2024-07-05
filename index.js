const updateTime = () => {
  const date = new Date();

  const currentTime = date.getUTCHours().toString().padStart(2, '0') + ':' +
                      date.getUTCMinutes().toString().padStart(2, '0') + ':' +
                      date.getUTCSeconds().toString().padStart(2, '0');

  document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTime;
};

const updateDay = () => {
  const date = new Date();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[date.getUTCDay()];

  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
};

updateDay()
updateTime()

// Update time every second
setInterval(updateTime, 1000);
