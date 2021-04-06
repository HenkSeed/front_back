window.addEventListener('DOMContentLoaded', () => {
	function init() {
		getResource('http://localhost:3000/people')
			.then((data) => createCards(data))
			.catch((err) => console.error(err));
		this.remove();
	}

	async function getResource(url) {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
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
