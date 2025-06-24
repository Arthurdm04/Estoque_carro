document.addEventListener("DOMContentLoaded", function () {
  // Dados de exemplo de veículos (em um projeto real, viriam de uma API)
  const vehiclesData = []; // Alterado para um array vazio, para começar sem veículos

  const vehiclesContainer = document.querySelector(".vehicle-cards-container");
  const noVehiclesMessage = document.querySelector(".no-vehicles-message");
  const searchInput = document.querySelector(".search-bar input");
  const tabButtons = document.querySelectorAll(".tab-button");

  let currentFilterAno = "Ano"; // Estado do filtro de ano
  let currentFilterMarca = "Audi"; // Estado do filtro de marca
  let currentSearchTerm = ""; // Estado do termo de busca
  let currentVehicleType = "Carros"; // Estado da aba selecionada (Carros ou Motos)

  // --- Funções de Renderização e Filtro ---

  function renderVehicles(filteredVehicles) {
    vehiclesContainer.innerHTML = ""; // Limpa os cards existentes

    if (filteredVehicles.length === 0) {
      noVehiclesMessage.style.display = "block";
    } else {
      noVehiclesMessage.style.display = "none";
      filteredVehicles.forEach((vehicle) => {
        const card = document.createElement("div");
        card.classList.add("vehicle-card");
        card.innerHTML = `
                        <img src="${vehicle.image}" alt="${vehicle.name}" class="vehicle-image">
                        <div class="vehicle-info">
                            <h3 class="vehicle-name">${vehicle.name}</h3>
                            <p class="vehicle-year">Ano ${vehicle.year}</p>
                            <p class="vehicle-price">R$${vehicle.price}</p>
                        </div>
                        <button class="btn-ver-mais">Ver Mais</button>
                    `;
        // Adicionar listener para o botão "Ver Mais"
        card.querySelector(".btn-ver-mais").addEventListener("click", () => {
          alert(`Detalhes de ${vehicle.name}: Preço R$${vehicle.price}`);
          // Em um projeto real, redirecionaria para a página de detalhes do veículo
        });
        vehiclesContainer.appendChild(card);
      });
    }
  }

  function applyFiltersAndSearch() {
    let filtered = vehiclesData.filter((vehicle) => {
      const matchesType = currentVehicleType === "Carros" ? true : false; // Lógica simples: apenas carros por enquanto
      const matchesSearch =
        vehicle.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(currentSearchTerm.toLowerCase());
      const matchesBrandFilter =
        currentFilterMarca === "Audi" || vehicle.brand === currentFilterMarca; // Audi é a opção padrão
      // Adicionar lógica para outros filtros aqui (ano, preço, etc.)

      return matchesType && matchesSearch && matchesBrandFilter;
    });

    // Aplicar ordenação baseada no filtro de ano/preço (exemplo simplificado)
    if (currentFilterAno === "Mais Barato") {
      filtered.sort(
        (a, b) =>
          parseFloat(a.price.replace(/\./g, "").replace(",", ".")) -
          parseFloat(b.price.replace(/\./g, "").replace(",", "."))
      );
    } else if (currentFilterAno === "Mais Caro") {
      filtered.sort(
        (a, b) =>
          parseFloat(b.price.replace(/\./g, "").replace(",", ".")) -
          parseFloat(a.price.replace(/\./g, "").replace(",", "."))
      );
    }
    // Mais lógicas de ordenação para outros filtros

    renderVehicles(filtered);
  }

  // --- Event Listeners ---

  // Tabs "Carros" / "Motos"
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      currentVehicleType = this.textContent; // Atualiza o tipo de veículo
      applyFiltersAndSearch();
    });
  });

  // Barra de Pesquisa
  searchInput.addEventListener("input", function () {
    currentSearchTerm = this.value;
    applyFiltersAndSearch();
  });

  // --- Custom Dropdowns (Filtros) ---
  document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
    const display = dropdown.querySelector(".dropdown-display");
    const optionsContainer = dropdown.querySelector(".dropdown-options");
    const selectedTextSpan = dropdown.querySelector(".selected-text");
    const hiddenSelect = dropdown.querySelector("select"); // Se houver um select oculto

    // Inicializa o texto exibido com o primeiro valor ou o valor selecionado
    if (hiddenSelect && hiddenSelect.value) {
      selectedTextSpan.textContent =
        hiddenSelect.options[hiddenSelect.selectedIndex].textContent;
    } else {
      // Caso não tenha select, use o primeiro option do custom-dropdown-options
      const firstOption = optionsContainer.querySelector(".dropdown-option");
      if (firstOption) selectedTextSpan.textContent = firstOption.textContent;
    }

    display.addEventListener("click", function () {
      optionsContainer.classList.toggle("open");
      display.classList.toggle("open");
    });

    optionsContainer.querySelectorAll(".dropdown-option").forEach((option) => {
      option.addEventListener("click", function () {
        const value = this.dataset.value;
        selectedTextSpan.textContent = this.textContent;

        // Atualiza o estado do filtro baseado no ID do dropdown
        if (dropdown.id === "filterAnoDropdown") {
          currentFilterAno = value;
        } else if (dropdown.id === "filterMarcaDropdown") {
          currentFilterMarca = value;
        }

        // Remove 'selected' de todas as opções e adiciona na clicada
        optionsContainer
          .querySelectorAll(".dropdown-option")
          .forEach((opt) => opt.classList.remove("selected"));
        this.classList.add("selected");

        optionsContainer.classList.remove("open");
        display.classList.remove("open");
        applyFiltersAndSearch(); // Aplica os filtros novamente
      });
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        optionsContainer.classList.remove("open");
        display.classList.remove("open");
      }
    });

    // Navegação com teclado
    display.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        optionsContainer.classList.toggle("open");
        display.classList.toggle("open");
      } else if (e.key === "Escape") {
        optionsContainer.classList.remove("open");
        display.classList.remove("open");
      }
    });
  });

  // Renderiza os veículos na carga inicial da página
  applyFiltersAndSearch();
});
