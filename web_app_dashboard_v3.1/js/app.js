/* --------- Dataset generation ----------- */
function createRandomArray(size, lowerBound, upperBound) {
    let result = [];
    for (let i = 0; i != size; i += 1) {
      result.push(Math.floor(Math.random() * upperBound) + lowerBound);
    }
  
    return result;
  }
  
  const weekly = createRandomArray(11, 500, 2000);
  const hourly = createRandomArray(23, 500, 2000);
  const daily = createRandomArray(7, 500, 2000);
  const monthly = createRandomArray(12, 500, 2000);
  
  let dataSet = {
    weekly: {
      labels: [
        '16-22',
        '23-29',
        '30-5',
        '6-12',
        '13-19',
        '20-26',
        '27-3',
        '4-10',
        '11-17',
        '18-24',
        '25-31'
      ],
      data: weekly
    },
    hourly: {
      labels: [
        '0-1',
        '2-3',
        '3-4',
        '5-6',
        '7-8',
        '9-10',
        '11-12',
        '13-14',
        '15-16',
        '17-28',
        '19-20',
        '21-22',
        '23-0'
      ],
      data: hourly
    },
    daily: {
      labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      data: daily
    },
    monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data: monthly
    }
  };
  
  /* --------- Traffic ---------- */
  
  const trafficChartWidget = document.getElementById('traffic-chart');
  
  let trafficData = {
    labels: dataSet.weekly.labels,
    datasets: [
      {
        data: dataSet.weekly.data,
        backgroundColor: 'rgba(116, 119, 191, .5)',
        borderWidth: '2',
        pointRadius: '10',
        pointStyle: 'circle',
        borderColor: 'rgba(116, 119, 191, 0.9)',
        pointBackgroundColor: 'white',
        pointHoverRadius: '15',
        pointHoverBackgroundColor: 'white'
      }
    ]
  };
  
  let trafficOptions = {
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            offsetGridLines: true
          },
          ticks: {
            min: 500,
            stepSize: 500
          }
        }
      ]
    }
  };
  
  let trafficChart = new Chart(trafficChartWidget, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });
  
  /*
   * Handling traffic Chart options events
   */
  
  document.querySelector('.traffic-options').addEventListener('click', e => {
    let options = document.querySelector('.traffic-options');
    if (e.target.tagName == 'A') {
      e.preventDefault();
      options.querySelector('.active').classList.remove('active');
      e.target.parentElement.classList.add('active');
  
      if (e.target.textContent.toUpperCase() === 'Hourly'.toUpperCase()) {
        trafficData.labels = dataSet.hourly.labels;
        trafficData.datasets[0].data = dataSet.hourly.data;
      } else if (e.target.textContent.toUpperCase() === 'Weekly'.toUpperCase()) {
        trafficData.labels = dataSet.weekly.labels;
        trafficData.datasets[0].data = dataSet.weekly.data;
      } else if (e.target.textContent.toUpperCase() === 'Monthly'.toUpperCase()) {
        trafficData.labels = dataSet.monthly.labels;
        trafficData.datasets[0].data = dataSet.monthly.data;
      } else if (e.target.textContent.toUpperCase() === 'Daily'.toUpperCase()) {
        trafficData.labels = dataSet.daily.labels;
        trafficData.datasets[0].data = dataSet.daily.data;
      } else {
        throw 'Invalid traffic option detected';
      }
      trafficChart.update();
    }
  });
  
  /* ----- Daily Chart ------ */
  
  const dailyChartWidget = document.getElementById('daily-chart');
  
  const dailyData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'Hit',
        data: dataSet.daily.data,
        backgroundColor: '#7477bf',
        borderWidth: 1
      }
    ]
  };
  
  const dailyOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: { display: false },
    maintainAspectRatio: false
  };
  
  let dailyChart = new Chart(dailyChartWidget, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
  });
  
  /* Demographic chart */
  
  const demographicChartWidget = document.getElementById('demographic-chart');
  
  const demographicData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [
      {
        label: '# of users',
        data: createRandomArray(3, 0, 2000),
        borderWidth: 0,
        backgroundColor: ['#7477bf', '#81c98f', '#74b1bf']
      }
    ]
  };
  
  const demographicOptions = {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    },
    maintainAspectRatio: false
  };
  
  let demographicChart = new Chart(demographicChartWidget, {
    type: 'doughnut',
    data: demographicData,
    options: demographicOptions
  });
  
  let numNotification = 2;

  /* --- Header event ---- */
  document.querySelector('#status-bell').addEventListener('click', e => {
    if (e.target.classList.contains('closebtn')) {
      e.target.parentElement.style.display = 'none';
      numNotification -= 1;
      if (numNotification <= 0) {
        document.querySelector('.status-bell-content').style.display = 'none';
      }
      return;
    }
    if (e.target.textContent.includes('Inbox')) {
      $.alert({
        title: 'Inbox',
        content: 'You are all caught up with new messages.',
        icon: 'fa fa-check-circle',
        type: 'green',
        useBootstrap: false
      });
    }
    if (e.target.textContent.includes('Pull')) {
      $.alert({
        title: 'Pull Requests',
        content: 'You have 2 active pull requests',
        icon: 'fa fa-code-branch',
        type: 'orange',
        useBootstrap: false
      });
    }
    if (numNotification > 0) {
      if (document.querySelector('.status-bell-content').style.display === 'block') {
        document.querySelector('.status-bell-content').style.display = 'none';
      } else {
        document.querySelector('.status-bell-content').style.display = 'block';
      }
    } else {
      document.querySelector('.status-bell-content').style.display = 'none';
    }
  });
  
  /*---- Sending Message ----*/
  document.querySelector('#send').addEventListener('click', e => {
    e.preventDefault();
    const sendTo = document.querySelector('#userField').value;
    const message = document.querySelector('#messageField').value;
  
    //Data Validation
    if (!sendTo || sendTo === '') {
      $.alert({
        title: 'Invalid Sender',
        content: 'Please select a recipient before sending message',
        icon: 'fa fa-warning',
        type: 'red',
        useBootstrap: false
      });
      return;
    } else if (listOfUsers.includes(sendTo) === false) {
      $.alert({
        title: 'Invalid Sender',
        content: sendTo + ' is not a valid user',
        icon: 'fa fa-warning',
        type: 'red',
        useBootstrap: false
      });
      return;
    }
    if (!message || message === '') {
      $.alert({
        title: 'Invalid Message',
        content: 'Please enter a message before sending message',
        icon: 'fa fa-warning',
        type: 'red',
        useBootstrap: false
      });
      return;
    }

    // Sends along the information
    $.alert({
      title: 'Success',
      content: 'Your message has been sent successfully',
      icon: 'fa fa-check-circle',
      type: 'green',
      useBootstrap: false
    });
  });
  
  /*---- settings ----*/
  
  var timeZone = document.querySelector('#timezone');
  var sendEmail = document.querySelector('#sendEmail');
  var profilePublic = document.querySelector('#profilePublic');
  
  function loadSettings() {
    if (localStorage['timeZone']) {
      timeZone.value = localStorage['timeZone'];
    }
    if (localStorage['sendEmail']) {
      sendEmail.checked = localStorage['sendEmail'] === 'true';
    }
    if (localStorage['profilePublic']) {
      profilePublic.checked = localStorage['profilePublic'] === 'true';
    }
  }
  
  function saveSettings() {
    localStorage['timeZone'] = timeZone.value;
    localStorage['sendEmail'] = sendEmail.checked;
    localStorage['profilePublic'] = profilePublic.checked;
  }
  
  document.querySelector('#save').addEventListener('click', e => {
    e.preventDefault();
    saveSettings();
  });
  document.querySelector('#cancel').addEventListener('click', e => {
    e.preventDefault();
    loadSettings();
  });
  
  loadSettings();
  /* TODO: Add AJAX call to backend to populate listofUsers */
  let listOfUsers = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'TC', 'All users'];
  
  $(function() {
    $('#userField').autocomplete({
      source: listOfUsers
    });
  });