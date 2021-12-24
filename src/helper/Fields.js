import types from "./data.json";


export function getFieldsNewBuilding(type){
    switch(type){
        case types.category.lager:
        case types.category.industribyggnad:
        case types.category.skola:
        case types.category.forskola:
            return [
                {
                    label: "Lokalarea",
                    id: "lokalarea",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal RWC",
                    id: "rwc",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal WC",
                    id: "wc",
                    placeholder: "0"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Total BTA",
                    id: "bta",
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
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal WC",
                    id: "wc",
                    placeholder: "0"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Total BTA",
                    id: "bta",
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
                    label: "Yta for idrottshall nklusive omkladningsrum",
                    id: "yta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal RWC",
                    id: "rwc",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Dusch and WC",
                    id: "wc",
                    info: "Antal dusch och wc. Summera antal dusch i duschrum,\n separata dusch och wc och skriva det totala antalet här.",
                    placeholder: "0"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Kvm ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Total BTA",
                    id: "bta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
            ];
        case types.category.flerbostadshus:
            return [
                {
                    label: "Boarea",
                    id: "boarea",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Lokalarea",
                    id: "lokalarea",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal lagenheter",
                    id: "lagenheter",
                    placeholder: "0"
                },
                {
                    label: "Antal badrum",
                    id: "badrum",
                    placeholder: "0"
                },
                {
                    label: "Antal WC",
                    id: "wc",
                    placeholder: "0"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Total BTA",
                    id: "bta",
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
                    id: "boarea",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal lagenheter",
                    id: "lagenheter",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal bodrum",
                    id: "bodrum",
                    placeholder: "0"
                },
                {
                    label: "Antal WC",
                    id: "wc",
                    placeholder: "0"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "0"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Total BTA",
                    id: "bta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
            ];
        case types.category.vardboende:
            return [
                {
                    label: "Kvadratmeter pa vardboendet",
                    id: "kvadratmeter",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal lagenheter",
                    id: "lagenheter",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "LOA",
                    id: "loa",
                    placeholder: "0"
                },
                {
                    label: "Antal WC",
                    id: "wc",
                    placeholder: "0"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "0"
                },
                {
                    label: "Antal bodrum",
                    id: "bodrum",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Total BTA",
                    id: "bta",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser",
                    placeholder: "0"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
            ];
        case types.category.studentlagenheter:
            return [
                {
                    label: "Boarea",
                    id: "boarea",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Lokalarea",
                    id: "lokalarea",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal lagenheter",
                    id: "lagenheter",
                    placeholder: "0"
                },
                {
                    label: "Antal badrum",
                    id: "badrum",
                    placeholder: "0"
                },
                {
                    label: "Antal WC",
                    id: "wc",
                    placeholder: "0"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Total BTA",
                    id: "bta",
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
                    id: "boarea",
                    info: "Total m2 hotell, inkl reception, lobby, restaurang del mm.",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Lokalarea",
                    id: "lokalarea",
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
                    id: "wc",
                    placeholder: "0"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Total BTA",
                    id: "bta",
                    placeholder: "0"
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser",
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
        case types.rebuildingType.endast:
            return [
                {
                    label: "Antal bodrum",
                    id: "bodrum",
                    placeholder: 0
                },
                {
                    label: "Antal WC",
                    id: "wc",
                    placeholder: 0
                },
                {
                    label: "Antal lagenhetter",
                    id: "lagenhetter",
                    placeholder: 0
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
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
                    id: "boarea",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "Lokalarea",
                    id: "lokalarea",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "Antal lagenhetter",
                    id: "lagenhetter",
                    placeholder: 0
                },
                {
                    label: "Antal bodrum",
                    id: "bodrum",
                    placeholder: 0
                },
                {
                    label: "Antal WC",
                    id: "wc",
                    placeholder: 0
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "m",
                    superscript: 2,
                    info: "Avser allmänna utrymmen och där byter man alltid \nstammar/ledningar, pris per m2 mörk BTA är  indikerad i kalkylen"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "Total BTA",
                    id: "bta",
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
                    label: "Lokalarea",
                    id: "lokalarea",
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
                    label: "Kvm Mork bruttoarea",
                    id: "mork",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "m",
                    superscript: 2
                },
                {
                    label: "Total BTA",
                    id: "bta",
                    placeholder: "m",
                    superscript: 2
                },
            ];
    }
}