document.addEventListener("DOMContentLoaded", function () {
  // 1. Funcionalidade de mostrar/ocultar senha (para ambos os campos de senha)
  document.querySelectorAll(".toggle-password").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const targetId = this.dataset.target; // Pega o ID do input alvo do atributo data-target
      const passwordInput = document.getElementById(targetId);

      if (passwordInput) {
        const type =
          passwordInput.getAttribute("type") === "password"
            ? "text"
            : "password";
        passwordInput.setAttribute("type", type);
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
      }
    });
  });

  // 2. Máscaras para CPF e CEP
  const cpfInput = document.getElementById("cpf");
  const cepInput = document.getElementById("cep");

  if (cpfInput) {
    cpfInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito
      if (value.length > 11) value = value.slice(0, 11);

      if (value.length > 9) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
      } else if (value.length > 6) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})$/, "$1.$2.$3");
      } else if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d{3})$/, "$1.$2");
      } else if (value.length > 0) {
        value = value.replace(/^(\d{3})$/, "$1");
      }
      e.target.value = value;
    });
  }

  if (cepInput) {
    cepInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito
      if (value.length > 8) value = value.slice(0, 8);

      if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{3})$/, "$1-$2");
      }
      e.target.value = value;
    });
  }

  // 3. Funcionalidade do Custom Select (Dropdown de Cargo)
  const customSelectDisplay = document.querySelector(".custom-select-display");
  const customSelectOptions = document.querySelector(".custom-select-options");
  const customOptions = document.querySelectorAll(".custom-option");
  const hiddenSelect = document.getElementById("cargo-select");
  const selectedValueSpan = document.querySelector(".selected-value");

  if (
    customSelectDisplay &&
    customSelectOptions &&
    hiddenSelect &&
    selectedValueSpan
  ) {
    // Inicializa o valor exibido com o valor da opção selecionada no <select> original
    selectedValueSpan.textContent =
      hiddenSelect.options[hiddenSelect.selectedIndex].textContent;

    customSelectDisplay.addEventListener("click", function () {
      customSelectOptions.classList.toggle("open");
      this.classList.toggle("open"); // Adiciona/remove classe para girar a seta
    });

    // Fechar o dropdown ao clicar fora
    document.addEventListener("click", function (e) {
      if (
        !customSelectDisplay.contains(e.target) &&
        !customSelectOptions.contains(e.target)
      ) {
        customSelectOptions.classList.remove("open");
        customSelectDisplay.classList.remove("open");
      }
    });

    customOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const value = this.dataset.value;
        const text = this.textContent.trim(); // Pega o texto da opção, removendo espaços

        // Atualiza o select original
        hiddenSelect.value = value;

        // Atualiza o texto exibido
        selectedValueSpan.innerHTML = this.innerHTML; // Usa innerHTML para manter o ícone de cadeado

        // Remove a classe 'selected' de todas as opções e adiciona à clicada
        customOptions.forEach((opt) => opt.classList.remove("selected"));
        this.classList.add("selected");

        // Fecha o dropdown
        customSelectOptions.classList.remove("open");
        customSelectDisplay.classList.remove("open");
      });
    });

    // Opcional: Permitir navegação com teclado no custom select
    customSelectDisplay.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // Impede o scroll da página
        customSelectOptions.classList.toggle("open");
        this.classList.toggle("open");
      } else if (e.key === "Escape") {
        customSelectOptions.classList.remove("open");
        this.classList.remove("open");
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        // Lógica mais avançada para mover a seleção com as setas pode ser implementada aqui
      }
    });
  }

  // --- ESTE É O BLOCO QUE PRECISA SER ADICIONADO/VERIFICADO ---
  const cadastroForm = document.getElementById("cadastroForm");

  if (cadastroForm) {
    cadastroForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Aqui você adicionaria a lógica real de cadastro (ex: enviar dados para um servidor)
      alert(
        "Cadastro realizado com sucesso! Redirecionando para a tela de login..."
      );

      // Redireciona para a tela de login
      window.location.href = "index.html"; // Mude para o nome do seu arquivo de login se for diferente
    });
  }
  // --- FIM DO BLOCO ---
});
