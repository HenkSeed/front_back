window.addEventListener('DOMContentLoaded', () => {
	function init() {
		fetch('http://localhost:3000/people')
			.then((data) => data.json())
			.then((data) => createCards(data))
			.catch((err) => console.error(err));
		this.remove();
	}

	function createCards(response) {
		response.forEach((item) => {
			let card = document.createElement('div');

			card.classList.add('card');
			let icon;
			if (item.sex === 'male') {
				icon = 'icons/mars.png';
			} else {
				icon = 'icons/female.png';
			}

			card.innerHTML = `
        <img src = "${item.photo}" alt = "person">
        <div class = "name">${item.name} ${item.surname}</div>
        <div class = "sex">
          <img src = ${icon} alt = ${item.sex}>
        </div>
        <div class = "age">${item.age}</div>
      `;
			document.querySelector('.app').appendChild(card);
		});
	}
	document
		.querySelector('button')
		.addEventListener('click', init, { once: true });
});
