'use strict';

let dropDownMenu = (event, element) => {
    event.preventDefault();
    event.stopPropagation();
    element.getElementsByClassName('checkout--menu')[0].classList.toggle('checkout--active');
    element.getElementsByClassName('checkout--menu')[0].parentElement.parentElement.classList.toggle('active');

    document.body.addEventListener('click', () => {
        element.getElementsByClassName('checkout--menu')[0].classList.remove('checkout--active');
        element.getElementsByClassName('checkout--menu')[0].parentElement.parentElement.classList.remove('active');
    });
}
let collapseDescription = (btnElement) => {
    const descriptionElement =  document.getElementsByClassName('description')[0];
    const textElement = document.getElementsByClassName('text')[0];
    const scrollHeight = +textElement.scrollHeight;
    if (!descriptionElement.classList.contains('open')) {
        descriptionElement.style.maxHeight = `${scrollHeight}px`;
        descriptionElement.classList.add('open');
        btnElement.textContent = 'COLLAPSE';
    } else {
        descriptionElement.classList.remove('open');
        descriptionElement.style.maxHeight = '162px';
        btnElement.textContent = 'READ MORE';
    }
}

new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
        labels: ["5", "4", "3", "2", "1"],
        datasets: [
            {
                label: "",
                backgroundColor: ["#57bb8a", "#9ace6a", "#ffcf02", "#ff9f02", "#ff6f31"],
                data: [5, 4, 3, 2, 1]
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        legend: {
            display: false
        },
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false,
                title: {
                    display: false,
                }
            }
        },
        responsive: true,
    },
});
