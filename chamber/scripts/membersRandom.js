const membersList = [
    {
        id: 1,
        companyName: "VOLVO DO BRASIL VEICULOS LTDA",
        cnpj:"43.999.424/0001-14",
        address: "AVENIDA JUSCELINO K DE OLIVEIRA, 2600 - CIC, CURITIBA/PR"
    },
    {
        id: 2,
        companyName: "TROX DO BRASIL DIFUSAO DE AR ACUST FILTRAGEM VENT LTDA",
        cnpj:"76.881.093/0001-72",
        address: "RUA CYRO CORREIA PEREIRA, 300 - CIC, CURITIBA/PR"
    },
    {
        id: 3,
        companyName: "CBB INDUSTRIA E COMERCIO DE ASFALTOS E ENGENHARIA LTDA",
        cnpj:"82.381.815/0001-22",
        address: "RUA JOAO BETTEGA, 3500 - CIC, CURITIBA/PR"
    },
    {
        id: 4,
        companyName: "HCC INDUSTRIA E COMERCIO DE EQUIPAMENTOS AGRICOLAS LTDA",
        cnpj:"17.955.143/0001-50",
        address: "RUA DO SEMEADOR, 262 - CIC, CURITIBA/PR"
    },
    {
        id: 5,
        companyName: "SIM ESTEARINA INDUSTRIA E COMERCIO LTDA",
        cnpj: "04.942.328/0001-88",
        address: "RUA EMILIO ROMANI, 1900 - CIC, CURITIBA/PR"
    },
    {
        id: 6,
        companyName: "J.C.N. INDUSTRIA E COMERCIO DE EMBALAGENS LTDA",
        cnpj: "03.438.897/0001-28",
        address: "RUA JOSE ANTUNES FERREIRA, 184 - CIC, CURITIBA/PR"
    },
    {
        id: 7,
        companyName: "METALURGICA ANGELIN LTDA",
        cnpj: "82.054.701/0001-78",
        address: "RUA FRANCISCO SOBANIA, 1235 - CIC, CURITIBA/PR"
    },

]

function shuffleArray(arr, n) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, n);
}

const empresasSorteadas = shuffleArray(membersList, 3);

function createMemberDiv(company) {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("memberSpotlight");

    const companyName = document.createElement("h3");
    companyName.textContent = company.companyName;

    const cnpj = document.createElement("p");
    cnpj.textContent = `CNPJ: ${company.cnpj}`;

    const address = document.createElement("p");
    address.textContent = `Address: ${company.address}`;

    memberDiv.appendChild(companyName);
    memberDiv.appendChild(cnpj);
    memberDiv.appendChild(address);

    return memberDiv;
}

function addMemberSpotlights() {
    const memberSpotlightList = document.querySelector(".memberSpotlightList");
    if (!memberSpotlightList) {
        console.error("Element with id 'memberSpotlightList' not found.");
        return;
    }

    const empresasSorteadas = shuffleArray(membersList, 3);

    empresasSorteadas.forEach(empresa => {
        const memberDiv = createMemberDiv(empresa);
        memberSpotlightList.appendChild(memberDiv);
    });
}

addMemberSpotlights();