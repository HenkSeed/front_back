const working = function() {
	let request = new XMLHttpRequest();
		request.open("GET", "http://localhost:3000/people");
		request.setRequestHeader("Content-type", 'application/json; charset=utf-8');
		request.send();
		const resp = function() {if (request.readyState === 4 && request.status == 0) {
				alert("If it's TRUE");
				data = JSON.parse(request.response);
			} else {
				console.error("Что-то пошло не так");
				data = JSON.parse(request.response);
			}};
		request.addEventListener('readyStateChange', alert(readyStateChange));
		console.log(readyStateChange);
	};

	working();

// window.addEventListener("DOMContentloaded", working());
// 	function init() {
// 		let request = new XMLHttpRequest();
// 		request.open("GET", "http://localhost:3000/people");
// 		request.setRequestHeader("Content-type", 'application/json; charset=utf-8');
// 		request.send();

// 		request.addEventListener('readyStateChange', function () {
// 			if (request.readyState === 4 && request.status == 200) {
// 				let data = JSON.parse(request.response);
// 				console.log(data);
// 			} else {
// 				console.error("Что-то пошло не так");
// 			}
// 		});
// 	}

// 	init();
// });
