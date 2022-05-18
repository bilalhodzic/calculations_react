
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
import { ReactComponent as SchoolIcon } from "../../images/SchoolIcon.svg";
import { ReactComponent as School2Icon } from "../../images/School2Icon.svg";
import CardRows from "./CardRows";

import types from "../../helper/data.json";

const ombyList = [
    {
        category: types.category.apartment1,
        icon: (
            <OmbyIcon1
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Stambyte",
        info: "Stambyte, renovering av badrum och wc, byte av samtliga avlopps- och vattenledningar inom fastigheten"
    },
    {
        category: types.category.apartment2,
        icon: (
            <PipeIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Stambyte + kök",
        info: "Stambyte inkl kök, renovering av badrum, wc och kök, byte av samtliga avlopps- och vattenledningar inom fastigheten"
    },
    {
        category: types.category.apartment3,
        icon: (
            <TrunkIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Stambyte + allt invändigt",
        info: "Total invändig ombyggnad, allt nytt invändigt, badrum, kök, golv, målning väggar, nya lägenhetsdörrar, nya installationer VS, vent, el styr m m" 
    },
    {
        category: types.category.apartment4,
        icon: (
            <ValveIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Stambyte + allt invändigt och utvändigt",
        info: "Total invändigt och utvändigt ombyggnad, allt nytt invändigt, badrum, kök, golv, målning väggar, nya lägenhetsdörrar, nya installationer VS, vent, el styr, nya fönster, fasader, tak m m"
    },
];
const kontorList = [
    {
        category: types.category.office1,
        icon: (
            <PlanIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Nya invändiga ytskikt och utrustning i lokaler (ej installationer)",
        info: "Ombyggnad kontor (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, ej installationer)"
    },
    {
        category: types.category.office2,
        icon: (
            <NewIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Nya invändiga ytskikt och utrustning i lokaler med ca 50 % nya installationer",
        info: "Ombyggnad kontor inkl 50 % installationer (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, 50 % installationer)"
    },
    {
        category: types.category.office3,
        icon: (
            <SketchIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Nya invändiga ytskikt och utrustning i lokaler inkl samtliga installationer",
        info: "Ombyggnad kontor inkl samtliga installationer (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, helt nya installationer)"
    },
    {
        category: types.category.office4,
        icon: (
            <DesignIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Nya invändiga och utvändiga ytskikt och utrustning i lokaler inkl samtliga installationer",
        info: "Total ombyggnad kontor inkl samtliga installationer samt utvändigt fasad, tak, fönster m m (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, helt nya installationer, nya fönster, tak, fasad m m)"
    },
];
const handelList = [
    {
        category: types.category.trade1,
        icon: (
            <ToolboxIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Nya invändiga ytskikt och utrustning i lokaler (ej installationer)",
        info: "Ombyggnad handel (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, ej installationer)"
    },
    {
        category: types.category.trade2,
        icon: (
            <InteriorIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Nya invändiga ytskikt och utrustning i lokaler med ca 50 % nya installationer",
        info: "Ombyggnad handel inkl 50 % installationer (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, 50 % installationer)"
    },
    {
        category: types.category.trade3,
        icon: (
            <HelmetIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Nya invändiga ytskikt och utrustning i lokaler inkl samtliga installationer",
        info: "Ombyggnad handel inkl samtliga installationer (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, helt nya installationer)"
    },
    {
        category: types.category.trade4,
        icon: (
            <DocumentIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Nya invändiga och utvändiga ytskikt och utrustning i lokaler inkl samtliga installationer",
        info: "Total ombyggnad handel inkl samtliga installationer samt utvändigt fasad, tak, fönster m m (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, helt nya installationer, nya fönster, tak, fasad m m)"
    },
]
const schoolList = [
    {
        category: types.category.school1,
        icon: (
            <SchoolIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Total renovering invändigt och utvändigt, inkl samtliga installationer, fasad, tak m m",
        //info: "Ombyggnad handel (nya invändiga ytskikt, nya pentry, rwc, wc, belysning, ej installationer)"
    },
    {
        category: types.category.school2,
        icon: (
            <School2Icon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Total renovering invändigt och utvändigt, 50 % installationer, fasader, tak m m"
    }
];

export default function BetweenStepRebuilding (props) {
    const data = props.data;

    let items = [];
    if(data.category === types.category.ombyggnad){
        items = ombyList;
    }else if(data.category === types.category.kontor){
        items = kontorList;
    }else if(data.category === types.category.handel){
        items = handelList;
    }else if(data.category === types.category.skola){
        items = schoolList;
    }

    const handleClickPaper = (prop) => {
        props.handleChange("category", prop);
    };

    return <CardRows data={data} handleClickPaper={handleClickPaper} items={items} offset={2} betweenStep={true} />
}
