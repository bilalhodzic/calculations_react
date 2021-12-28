
import { ReactComponent as OmbyIcon1 } from "../../images/OmbyIcon1.svg";
import { ReactComponent as PipeIcon } from "../../images/PipeIcon.svg";
import { ReactComponent as TrunkIcon } from "../../images/TrunkIcon.svg";
import { ReactComponent as ValveIcon } from "../../images/ValveIcon.svg";
import { ReactComponent as PlanIcon } from "../../images/PlanIcon.svg";
import { ReactComponent as NewIcon } from "../../images/NewIcon.svg";
import { ReactComponent as SketchIcon } from "../../images/SketchIcon.svg";
import { ReactComponent as DesignIcon } from "../../images/DesignIcon.svg";
import { ReactComponent as ToolboxIcon } from "../../images/ToolboxIcon.svg";
import { ReactComponent as InteriorIcon } from "../../images/InteriorIcon.svg";
import { ReactComponent as HelmetIcon } from "../../images/HelmetIcon.svg";
import { ReactComponent as DocumentIcon } from "../../images/DocumentIcon.svg";
import CardRows from "./CardRows";

import types from "../../helper/data.json";

const ombyList = [
    {
        category: "random vrijednost",
        icon: (
            <OmbyIcon1
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Stambyte, renovering av badrum och wc, byte av samtliga avlopps - och vattenledningar",
    },
    {
        category: "random vrijednost",
        icon: (
            <PipeIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Stambyte inkl kök, renovering av badrum, wc och kök, byte av samtliga avlopps - och",
    },
    {
        category: "random vrijednost",
        icon: (
            <TrunkIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Total invändig ombyggnad, allt nytt invändigt, badrum, kök, golv, målning väggar, nya",
    },
    {
        category: "random vrijednost",
        icon: (
            <ValveIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Total invändig ombyggnad, allt nytt invändigt, badrum, kök, golv, målning väggar, nya",
    },
];
const kontorList = [
    {
        category: "random vrijednost",
        icon: (
            <PlanIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Nya invändiga ytskikt, nya pentry, rwc, wc, belysning, ej installationer",
    },
    {
        category: "random vrijednost",
        icon: (
            <NewIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "50 % installationer, nya invändiga ytskikt, nya pentry, rwc, wc, belysning",
    },
    {
        category: "random vrijednost",
        icon: (
            <SketchIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Samtliga installationer, nya invändiga ytskikt, nya pentry, rwc, wc, belysning, helt nya installationer",
    },
    {
        category: "random vrijednost",
        icon: (
            <DesignIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Total ombyggnad kontor inkl samtliga installationer samt utvändigt fasad, tak, fönster m m (nya invändiga...)",
    },
];
const handelList = [
    {
        category: "random vrijednost",
        icon: (
            <ToolboxIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Ombyggnad handel (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, ej installationer)",
    },
    {
        category: "random vrijednost",
        icon: (
            <InteriorIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: " Ombyggnad handel inkl 50 % installationer (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, 50 % installationer)",
    },
    {
        category: "random vrijednost",
        icon: (
            <HelmetIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Ombyggnad handel inkl samtliga installationer (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, helt nya installationer)",
    },
    {
        category: "random vrijednost",
        icon: (
            <DocumentIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Total ombyggnad handel inkl samtliga installationer samt utvändigt fasad, tak, fönster m m ",
    },
]

export default function BetweenStepRebuilding (props) {
    const data = props.data;
    const setData = props.setData;

    let items = [];
    if(data.category === types.rebuilding.omby){
        items = ombyList;
    }else if(data.category === types.rebuilding.kontor){
        items = kontorList;
    }else if(data.category === types.rebuilding.handel){
        items = handelList;
    }

    const handleClickPaper = (prop) => {
        data.rebuildingCategory = prop;
        setData(data);
    };

    return <CardRows data={data} handleClickPaper={handleClickPaper} items={items} />
}
