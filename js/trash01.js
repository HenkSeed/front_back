	function init() {
		let request = new XMLHttpRequest(); 
		request.open(
			'GET',
			'http://localhost:3000/people');
			request.setRequestHeader(
				'Content-type',
				'application/json; charset=utf-8'
				); 
				request.send();
				
				request.addEventListener('readyStateChange', function () {
					if (request.readyState === 4 && request.status == 200) {
						let data = JSON.parse(
							request.response
							);
						} else {
              console.error('Что-то пошло не так');
						}
            console.log(data);
					});
				}
				
				init();
