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
                    id: "bathNumber",
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
                    id: "loa",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal RWC",
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
        case types.category.idrottshall:
            return [
                {
                    label: "Yta för idrottshall inklusive omklädningsrum",
                    id: "boa",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal RWC",
                    id: "bathNumber",
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
        default:
            return [];
    }
}

export function getFieldsRebuilding(type){
    switch(type){
        case types.category.apartment1:
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
                    id: "apartmentNumber",
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
        case types.category.apartment2:
        case types.category.apartment3:
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
                    id: "apartmentNumber",
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
        case types.category.apartment4:
        case types.category.office1:
        case types.category.office2:
        case types.category.office3:
        case types.category.office4:
        case types.category.trade1:
        case types.category.trade2:
        case types.category.trade3:
        case types.category.trade4:
            return [
                {
                    label: "LOA",
                    id: "loa",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "Antal WC/Dusch",
                    id: "bathNumber",
                    placeholder: 0
                },
                {
                    label: "Antal WC/RWC",
                    id: "toiletNumber",
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