class CouterElement extends HTMLElement {
    constructor() {
        super();
        const outterCounter = this.dataset.contador;
        this.contador = outterCounter || 0;
    }

    set initialValue(value) {
        console.log(value);
        this.contador = value;

        this.paragraph.textContent = this.contador;

    }

    connectedCallback() {
        this.innerHTML = `
            <button id="counterButtonRemove">-</button>
            <p id="showCounter">0</p>
            <button id="counterButtonAdd">+</button>
        `;

        this.paragraph = this.querySelector('#showCounter');
        this.paragraph.textContent = this.contador;

        const buttonAdd = this.querySelector('#counterButtonAdd');
        buttonAdd.addEventListener('click', () => {
            this.contador++;
            this.paragraph.textContent = this.contador;
        });

        const buttonRemove = this.querySelector('#counterButtonRemove');
        buttonRemove.addEventListener('click', () => {
            if (this.contador > 0)
                this.contador--;

            this.paragraph.textContent = this.contador;
        })
    }
}

customElements.define("x-counter", CouterElement);