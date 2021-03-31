window.addEventListener('DOMContentloaded', () => {
	/* Функция в фигурных скобках выполнится только после того, 
  как будет загружен DOM */
	function init() {
		let request = new XMLHttpRequest(); /* Создаем объект (запрос) и сохраняем в переменную request */
		request.open(
			/* Настраиваем получение клиентом данных с сервера */
			'GET' /* Используемый метод */,
			'http://localhost:3000/people' /* путь к данным на сервере */
		);
		request.setRequestHeader(
			'Content-type',
			'application/json; charset=utf-8'
		); /* Определяем заголовки передаваемых данных. Можно и без этого, но так надёжнее */
		request.send(); /* Отправляем запрос на сервер. Если бы это был POST запрос, то в скобках отправлялись бы данные, передаваемые на сервер */

		request.addEventListener('readyStateChange', function () {
			/* Ожидаем изменения состояния статуса запроса */
			if (request.readyState === 4 && request.status == 200) {
				/* Если запрос полностью передался (даже если есть ошибка) и (&&) данные переданы */
				let data = JSON.parse(
					request.response
				); /* Данные преобразуются из формата JSON в данные JS */
				console.log(data);
			} else {
				console.error('Что-то пошло не так');
			}
		});
	}

	init();
});
