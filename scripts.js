// Detect language and redirect 

var lang = window.navigator.language;
var langShort = lang.substring(0, 2);

switch (langShort) {
  case "en":
    // window.location.href = '';
    break;

  default:
  // window.location.href = '';
}


// Theme switcher

function switchTheme() {
  var switcher = document.getElementById("theme-checkbox");
  if (switcher.checked) {
    document.getElementById("page").classList.add('alt-theme');
  } else {
    document.getElementById("page").classList.remove('alt-theme');
  }
}

// Set active class for language selector

var langSelector = document.getElementById("lang-selector");
var lang = langSelector.getElementsByClassName("lang");
for (var i = 0; i < lang.length; i++) {
  lang[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Charts

const ctx = document.getElementById('uxSkills');
const uxSkills = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [
      'Research',
      'Testing',
      'UI',
      'IxD',
      'IA',
      'Writting'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [3, 3, 5, 5, 4, 4],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  },
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
      point: {
        radius: 4,
        borderWidth: 3,
      }
    },
    scales: {
      r: {
        ticks: {
          font: {
            size: 16
          }
        },
        angleLines: {
          lineWidth: 3
        },
        grid: {
          lineWidth: 3
        },
        suggestedMin: 1,
        suggestedMax: 5,
        pointLabels: {
          font: {
            size: 16
          }
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  }
});