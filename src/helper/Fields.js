import types from "./types.json";


export default function getFields(type){
    switch(type){
        case types.lager:
        case types.industribyggnad:
        case types.skola:
        case types.forskola:
            return [
                {
                    label: "Lokalarea",
                    id: "lokalarea",
                    placeholder: "㎡",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Antal RWC",
                    id: "rwc",
                    placeholder: "㎡",
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
                    placeholder: "㎡",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus",
                    placeholder: "㎡",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Total BTA",
                    id: "bta",
                    placeholder: "㎡",
                    superscript: 2,
                    isRight: true
                },
            ];
        case types.parkeringshus:
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
        case types.idrottshall:
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
                    info: "Antal dusch och wc. Summera antal dusch i duschrum, separata dusch och wc och skriva det totala antalet här.",
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
        case types.flerbostadshus:
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
        case types.radhus:
        case types.villor:
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
        case types.vardboende:
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
        case types.studentlagenheter:
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
        case types.hotell:
            return [
                {
                    label: "Boarea",
                    id: "boarea",
                    info: "Total m2 hotell, inkl reception, lobby, restaurang del mm.",
                    placeholder: "㎡",
                    superscript: 2,
                    isRight: true
                },
                {
                    label: "Lokalarea",
                    id: "lokalarea",
                    info: "Endast om det är lokal som inte tillhör hotellet, såsom separat handelslokal, kontor mm.",
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