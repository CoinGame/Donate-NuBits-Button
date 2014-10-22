//bitcoinate {{ VERSION }} by Adrian Sieber (adriansieber.com)

!function(window, document) {

	var style = document.createElement('style')

	style.type = 'text/css'
	style.innerHTML = '{{ CSS }}'
	document.getElementsByTagName('head')[0].appendChild(style)

	document.addEventListener('DOMContentLoaded', function() {

		var buttons = document.getElementsByClassName('donate-nubits'),
			sentence = 'Please donate NuBits to: ',
			data,
			i

		for(i = 0; i < buttons.length; i++) {

			buttons[i].title = sentence + buttons[i].dataset.address

			buttons[i].innerHTML = '<span></span>Donate NuBits'

			buttons[i].addEventListener('click', function() {
				data = this.dataset

				if(data.type == 'URI')
					window.location.href = 'NuBits:' + data.address
						+ '?amount=' + data.address
						+ '&label=' + data.label
				else
					window.prompt(sentence, data.address)

			}, false)
		}

	}, false)

}(window, document)
