import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardRows from "./CardRows";

import { SchoolIcon } from "../svgIcons/SchoolIcon";
import { HotelIcon } from "../svgIcons/HotelIcon";
import { ReactComponent as FlerbostadhusIcon } from "../../images/FlerbostadhusIcon.svg";
import { ReactComponent as RadhusIcon } from "../../images/RadhusIcon.svg";
import { ReactComponent as VillorIcon } from "../../images/VillorIcon.svg";
import { ReactComponent as VardboendeIcon } from "../../images/VardboendeIcon.svg";
import { ReactComponent as StudentlagenheterIcon } from "../../images/StudentlagenheterIcon.svg";
import { ReactComponent as LagerIcon } from "../../images/LagerIcon.svg";
import { ReactComponent as IndustribyggnadIcon } from "../../images/IndustribyggnadIcon.svg";
import { ReactComponent as ForskolaIcon } from "../../images/ForskolaIcon.svg";
import { ReactComponent as ParkeringshusIcon } from "../../images/ParkeringshusIcon.svg";
import { ReactComponent as IdrottshallIcon } from "../../images/IdrottshallIcon.svg";
import { ReactComponent as TubesIcon } from "../../images/TubesIcon.svg";
import { ReactComponent as WorkIcon } from "../../images/WorkIcon.svg";
import { ReactComponent as ShopIcon } from "../../images/ShopIcon.svg";

import types from "../../helper/data.json";

const newProduction = [
    {
        category: types.category.flerbostadshus,
        icon: (
            <FlerbostadhusIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Flerbostadhus",
    },
    {
        category: types.category.radhus,
        icon: (
            <RadhusIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Radhus",
    },
    {
        category: types.category.villor,
        icon: (
            <VillorIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Villor",
    },
    {
        category: types.category.vardboende,
        icon: (
            <VardboendeIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Vardboende",
    },
    {
        category: types.category.hotell,
        icon: (
            <HotelIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Hotell",
    },
    {
        category: types.category.studentlagenheter,
        icon: (
            <StudentlagenheterIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Studentlagenheter",
    },
    {
        category: types.category.lager,
        icon: (
            <LagerIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Lager",
    },
    {
        category: types.category.industribyggnad,
        icon: (
            <IndustribyggnadIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Industribyggnad",
    },
    {
        category: types.category.skola,
        icon: (
            <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Skola",
    },
    {
        category: types.category.forskola,
        icon: (
            <ForskolaIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Forskola",
    },
    {
        category: types.category.parkeringshus,
        icon: (
            <ParkeringshusIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Parkeringshus",
    },
    {
        category: types.category.idrottshall,
        icon: (
            <IdrottshallIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Idrottshall",
    },
];
const rebuilding = [
    {
        category: types.rebuilding.omby,
        icon: (
            <TubesIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Ombyggnad bostäder",
    },
    {
        category: types.rebuilding.kontor,
        icon: (
            <WorkIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Kontor",
    },
    {
        category: types.rebuilding.handel,
        icon: (
            <ShopIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Handel",
    },
    {
        category: types.rebuilding.skola,
        icon: (
            <SchoolIcon color="#21344d" size={80} style={{ paddingTop: 10 }} />
        ),
        label: "Skola",
    },
];

export default function Step1(props) {
    const steps = props.steps;
    const data = props.data;
    const setData = props.setData;

    const handleClickPaper = (prop) => {
        //setting the state property from parent component
        data.category = prop;
        setData(data);
        props.handleChange("ProjectType", prop);
    };

    return (
        <CardRows
            data={data}
            handleClickPaper={handleClickPaper}
            items={
                data.type === types.types.new_production.id
                    ? newProduction
                    : rebuilding
            }
        />
    );
}
