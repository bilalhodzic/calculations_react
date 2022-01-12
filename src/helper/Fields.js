import types from "./data.json";


export function getFieldsNewBuilding(type){
    switch(type){
        case types.category.varmlager:
        case types.category.kyllager:
        case types.category.kalllager:
        case types.category.industribyggnad:
        case types.category.skola:
        case types.category.forskola:
            return [
                {
                    label: "LOA",
                    id: "loa",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal RWC",
                    id: "rwc",
                    placeholder: "0",
                },
                {
                    label: "Antal WC",
                    id: "toiletNumber",
                    placeholder: "0"
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
            ];
        case types.category.parkeringshus:
            return [
                {
                    label: "Garageyta",
                    id: "garageyta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal RWC",
                    id: "rwc",
                    placeholder: "0"
                },
                {
                    label: "Antal WC",
                    id: "toiletNumber",
                    placeholder: "0"
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser",
                    placeholder: "0"
                },
            ];
        case types.category.idrottshall:
            return [
                {
                    label: "Yta för idrottshall inklusive omklädningsrum",
                    id: "yta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal RWC",
                    id: "rwc",
                    placeholder: "0"
                },
                {
                    label: "Antal duschar och WC:n",
                    id: "toiletNumber",
                    info: "Antal duschar och WC:n. Summera  det totala antalet duschar i duschrum,\nseparat duschar och wc:n.",
                    placeholder: "0"
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
            ];
        case types.category.flerbostadshus:
            return [
                {
                    label: "Boarea",
                    id: "boa",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "LOA",
                    id: "loa",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal lägenheter",
                    id: "apartmentNumber",
                    placeholder: "0"
                },
                {
                    label: "Antal badrum",
                    id: "badrum",
                    placeholder: "0"
                },
                {
                    label: "Antal WC",
                    id: "toiletNumber",
                    placeholder: "0"
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser",
                    placeholder: "0"
                },
            ];
        case types.category.radhus:
        case types.category.villor:
            return [
                {
                    label: "Boarea",
                    id: "boa",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal lägenheter",
                    id: "apartmentNumber",
                    placeholder: "0"
                },
                {
                    label: "Antal badrum",
                    id: "bathNumber",
                    placeholder: "0"
                },
                {
                    label: "Antal WC",
                    id: "toiletNumber",
                    placeholder: "0"
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "0"
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
            ];
        case types.category.vardboende:
            return [
                {
                    label: "Yta för vårdboendet",
                    id: "kvadratmeter",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal lägenheter",
                    id: "apartmentNumber",
                    placeholder: "0"
                },
                {
                    label: "LOA",
                    id: "loa",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal WC",
                    id: "toiletNumber",
                    placeholder: "0"
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "0"
                },
                {
                    label: "Antal badrum",
                    id: "bathNumber",
                    placeholder: "0"
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser",
                    placeholder: "0"
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
            ];
        case types.category.studentbostader:
            return [
                {
                    label: "Boarea",
                    id: "boa",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "LOA",
                    id: "loa",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal lägenheter",
                    id: "apartmentNumber",
                    placeholder: "0"
                },
                {
                    label: "Antal badrum",
                    id: "badrum",
                    placeholder: "0"
                },
                {
                    label: "Antal WC",
                    id: "toiletNumber",
                    placeholder: "0"
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser",
                    placeholder: "0"
                },
            ];
        case types.category.hotell:
            return [
                {
                    label: "Boarea",
                    id: "boa",
                    info: "Total m2 hotell, inkl reception, lobby, restaurang del mm.",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "LOA",
                    id: "loa",
                    info: "Endast om det är lokal som inte tillhör hotellet,\n såsom separat handelslokal, kontor mm.",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal uthyrningsrum",
                    id: "uthyrningsrum",
                    placeholder: "0"
                },
                {
                    label: "Antal badrum",
                    id: "badrum",
                    placeholder: "0"
                },
                {
                    label: "Antal WC",
                    id: "toiletNumber",
                    placeholder: "0"
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser",
                    placeholder: "0"
                },
            ];
        default:
            return [];
    }
}

export function getFieldsRebuilding(type){
    switch(type){
        case types.rebuildingType.endast:
            return [
                {
                    label: "Antal badrum",
                    id: "bathNumber",
                    placeholder: 0
                },
                {
                    label: "Antal WC",
                    id: "toiletNumber",
                    placeholder: 0
                },
                {
                    label: "Antal lagenhetter",
                    id: "lagenhetter",
                    placeholder: 0
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true,
                    info: "Avser allmänna utrymmen och där byter man alltid \nstammar/ledningar, pris per m2 mörk BTA är  indikerad i kalkylen"
                },
            ];
        case types.rebuildingType.byte:
        case types.rebuildingType.indvadigt:
            return [
                {
                    label: "Boarea",
                    id: "boa",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "LOA",
                    id: "loa",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "Antal lagenhetter",
                    id: "lagenhetter",
                    placeholder: 0
                },
                {
                    label: "Antal badrum",
                    id: "bathNumber",
                    placeholder: 0
                },
                {
                    label: "Antal WC",
                    id: "toiletNumber",
                    placeholder: 0
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "m",
                    superscript: 2,
                    info: "Avser allmänna utrymmen och där byter man alltid \nstammar/ledningar, pris per m2 mörk BTA är  indikerad i kalkylen"
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2
                },
            ];
        case types.rebuildingType.upprustning:
        case types.rebuildingType.helt:
        case types.rebuildingType.allt:
        case types.rebuildingType.ytskikt:
        case types.rebuildingType.ytskikt_helt:
        case types.rebuildingType.arbete:
        case types.rebuildingType.delvis:
            return [
                {
                    label: "LOA",
                    id: "loa",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "Antal WC/Dusch",
                    id: "dusch",
                    placeholder: 0
                },
                {
                    label: "Antal WC/RWC",
                    id: "rwc",
                    placeholder: 0
                },
                {
                    label: "Mork bruttoarea",
                    id: "darkBta",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "Ljus bruttoarea",
                    id: "lightBta",
                    placeholder: "m",
                    superscript: 2
                },
            ];
        default:
            return [];
    }
}