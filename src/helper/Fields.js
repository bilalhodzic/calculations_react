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
                    id: "lokalarea"
                },
                {
                    label: "Antal RWC",
                    id: "rwc"
                },
                {
                    label: "Antal WC",
                    id: "wc"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus"
                },
                {
                    label: "Total BTA",
                    id: "bta"
                },
            ];
        case types.parkeringshus:
            return [
                {
                    label: "Garageyta",
                    id: "garageyta"
                },
                {
                    label: "Antal RWC",
                    id: "rwc"
                },
                {
                    label: "Antal WC",
                    id: "wc"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus"
                },
                {
                    label: "Total BTA",
                    id: "bta"
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser"
                },
            ];
        case types.idrottshall:
            return [
                {
                    label: "Yta for idrottshall nklusive omkladningsrum",
                    id: "yta"
                },
                {
                    label: "Antal RWC",
                    id: "rwc"
                },
                {
                    label: "Dusch and WC",
                    id: "wc",
                    info: "Antal dusch och wc. Summera antal dusch i duschrum, separata dusch och wc och skriva det totala antalet här."
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork"
                },
                {
                    label: "Kvm ljus bruttoarea",
                    id: "ljus"
                },
                {
                    label: "Total BTA",
                    id: "bta"
                },
            ];
        case types.flerbostadshus:
            return [
                {
                    label: "Boarea",
                    id: "boarea"
                },
                {
                    label: "Lokalarea",
                    id: "lokalarea"
                },
                {
                    label: "Antal lagenheter",
                    id: "lagenheter"
                },
                {
                    label: "Antal badrum",
                    id: "badrum"
                },
                {
                    label: "Antal WC",
                    id: "wc"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus"
                },
                {
                    label: "Total BTA",
                    id: "bta"
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser"
                },
            ];
        case types.radhus:
        case types.villor:
            return [
                {
                    label: "Boarea",
                    id: "boarea"
                },
                {
                    label: "Antal lagenheter",
                    id: "lagenheter"
                },
                {
                    label: "Antal bodrum",
                    id: "bodrum"
                },
                {
                    label: "Antal WC",
                    id: "wc"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus"
                },
                {
                    label: "Total BTA",
                    id: "bta"
                },
            ];
        case types.vardboende:
            return [
                {
                    label: "Kvadratmeter pa vardboendet",
                    id: "kvadratmeter"
                },
                {
                    label: "Antal lagenheter",
                    id: "lagenheter"
                },
                {
                    label: "LOA",
                    id: "loa"
                },
                {
                    label: "Antal WC",
                    id: "wc"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork"
                },
                {
                    label: "Antal bodrum",
                    id: "bodrum"
                },
                {
                    label: "Total BTA",
                    id: "bta"
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus"
                },
            ];
        case types.studentlagenheter:
            return [
                {
                    label: "Boarea",
                    id: "boarea"
                },
                {
                    label: "Lokalarea",
                    id: "lokalarea"
                },
                {
                    label: "Antal lagenheter",
                    id: "lagenheter"
                },
                {
                    label: "Antal badrum",
                    id: "badrum"
                },
                {
                    label: "Antal WC",
                    id: "wc"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus"
                },
                {
                    label: "Total BTA",
                    id: "bta"
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser"
                },
            ];
        case types.hotell:
            return [
                {
                    label: "Boarea",
                    id: "boarea",
                    info: "Total m2 hotell, inkl reception, lobby, restaurang del mm."
                },
                {
                    label: "Lokalarea",
                    id: "lokalarea",
                    info: "Endast om det är lokal som inte tillhör hotellet, såsom separat handelslokal, kontor mm."
                },
                {
                    label: "Antal uthyrningsrum",
                    id: "uthyrningsrum"
                },
                {
                    label: "Antal badrum",
                    id: "badrum"
                },
                {
                    label: "Antal WC",
                    id: "wc"
                },
                {
                    label: "Kvm Mork bruttoarea",
                    id: "mork"
                },
                {
                    label: "Kvm Ljus bruttoarea",
                    id: "ljus"
                },
                {
                    label: "Total BTA",
                    id: "bta"
                },
                {
                    label: "Antal garageplatser",
                    id: "garageplatser"
                },
            ];
        default:
            return [];
    }
}