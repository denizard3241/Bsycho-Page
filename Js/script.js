const personagem = document.querySelector('.personagem');

        const jump = () => {
            personagem.classList.add('jump');

            setTimeout(() => {
                personagem.classList.remove('jump');
            }, 500);
        }

        const moveLeft = () => {
            const currentPosition = parseInt(window.getComputedStyle(personagem).getPropertyValue('left'));
            personagem.style.left = (currentPosition - 10) + 'px'; // Ajuste a velocidade de movimento para a esquerda
            personagem.classList.add('move-left'); // Adiciona a classe de movimento para a esquerda
            setTimeout(() => {
                personagem.classList.remove('move-left'); // Remove a classe de movimento para a esquerda após um tempo
            }, 300);
        }

        const moveRight = () => {
            const currentPosition = parseInt(window.getComputedStyle(personagem).getPropertyValue('left'));
            personagem.style.left = (currentPosition + 10) + 'px'; // Ajuste a velocidade de movimento para a direita
            personagem.classList.add('move-right'); // Adiciona a classe de movimento para a direita
            setTimeout(() => {
                personagem.classList.remove('move-right'); // Remove a classe de movimento para a direita após um tempo
            }, 300);
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === ' ') jump(); // Salto
            if (event.key === 'ArrowLeft') moveLeft(); // Movimento para a esquerda
            if (event.key === 'ArrowRight') moveRight(); // Movimento para a direita
        });