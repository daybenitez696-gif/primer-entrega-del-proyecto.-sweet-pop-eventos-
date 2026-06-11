document.addEventListener("DOMContentLoaded", () => {

    const contadores = document.querySelectorAll(".contador");

    contadores.forEach(contador => {

        const objetivo = parseInt(contador.dataset.target);
        let actual = parseInt(contador.textContent);

        const actualizar = () => {

            if (actual < objetivo) {

                actual++;

                contador.textContent = actual;

                setTimeout(actualizar, 30);
            }

        };

        actualizar();

    });

});