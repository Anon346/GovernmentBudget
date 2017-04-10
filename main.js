var values = {};
var percents = [18, 16, 15, 12, 11, 8, 7, 6, 5, 2];
var chart;
$(window).on('load', function() { var surplus = $('#surplus')[0], slides = [$('#ed')[0], $('#posted')[0], $('#fsclpol')[0], $('#hlth')[0],
	$('#env')[0], $('#socserv')[0], $('#natres')[0], $('#sca')[0],
	$('#transinfa')[0], $('#pubsafe')[0]];

	values = [$('#edVal')[0], $('#postedVal')[0], $('#fsclpolVal')[0], $('#hlthVal')[0],
		$('#envVal')[0], $('#socservVal')[0], $('#natresVal')[0], $('#scaVal')[0],
		$('#transinfaVal')[0], $('#pubsafeVal')[0]];

	//Creates Chart
	chart = new Chart($('#chart'),{
		type: 'pie',
    data: {
        labels: ['Education', 'Post-Secondary Education', 'Fiscal Policy', 'Health', 'Environment',
				 'Social Services', 'Natural Resources', 'Sports, Culture & Arts', 'Transport Infrastructure', 'Public Safety', 'Surplus'],
        datasets: [{
            label: 'Total',
            data: percents,
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(250, 4, 255, 0.4)',
								'rgba(255, 245, 0, 0.4)',
								'rgba(255, 159, 64, 0.4)',
								'rgba(51, 255, 0, 0.4)',
								'rgba(255, 0, 0, 0.4)',
								'rgba(0, 255, 247, 0.4)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(250, 4, 255, 1)',
								'rgba(255, 245, 0, 1)',
								'rgba(255, 159, 64, 1)',
								'rgba(51, 255, 0, 1)',
								'rgba(255, 0, 0, 1)',
								'rgba(0, 255, 247, 1)'
            ],
            borderWidth: 2

        }]
    },
		options: {
				legend: {
					display: true,
					onClick: function(event, legendItem) {},
					position: 'right',
					labels: {
						fontColor: '#dedede',
						fontFamily: 'Lato, sans-serif',
						fontSize: 15
					}

				}
		}
	});

});
var total = 0;

function valueChange() {
	percents = [];
	total = 0;
	//Remakes array of percents and ensures numbers are uniform.
	for(v in values) {
		var i = parseInt(values[v].value);
		console.log(i);
		if(i<1) {
			values[v].value=1;
			i=1;
		}
		if(i>90) {
			values[v].value=90;
			i=90;
		}
		percents.push(i);

		total += i<1 ? 1 : i;
	}
	console.log(percents);
	var splus = 100-total;
	var spn = document.getElementById('surplus');

	//Updates chart data
	chart.data.datasets[0].data = percents;
	chart.update();

	//Chooses colour and updates text of Surplus
	if(splus<50) spn.style.color = '#14b600';
	if(splus<0) spn.style.color = '#ba0000';
	if(splus>=20) spn.style.color = '#ecea00';
	surplus.innerHTML = splus + '%';
}
