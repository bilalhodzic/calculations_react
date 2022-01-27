import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardRows from "./CardRows";

import { SchoolIcon } from "../svgIcons/SchoolIcon";
import { HotelIcon } from "../svgIcons/HotelIcon";
import { ReactComponent as FlerbostadhusIcon } from "../../images/FlerbostadshusIcon.svg";
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
import { ReactComponent as OfficeIcon } from "../../images/OfficeIcon.svg";
import { ReactComponent as TradeIcon } from "../../images/TradeIcon.svg";

import types from "../../helper/data.json";
import { useTranslation } from "react-i18next";

export default function Step1(props) {
    const data = props.data;
    const { t, i18n } = useTranslation();

    const handleClickPaper = (prop) => {
        //setting the state property from parent component
        props.handleChange("category", prop);
    };

    const items = getData(data.type, t);

    return (
        <CardRows
            data={data}
            handleClickPaper={handleClickPaper}
            items={items}
        />
    );
}

function getData(type, t) {
    switch (type) {
        case types.types.new_production.id:
            return [
                {
                    category: types.category.flerbostadshus,
                    icon: (
                        <FlerbostadhusIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: t("Flerbostadshus.1"),
                },
                {
                    category: types.category.radhus,
                    icon: (
                        <RadhusIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: t("Radhus.1"),
                },
                {
                    category: types.category.villor,
                    icon: (
                        <VillorIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: t("Villor.1"),
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
                    label: t("Vardboende.1"),
                },
                {
                    category: types.category.hotell,
                    icon: (
                        <HotelIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: t("Hotell.1"),
                },
                {
                    category: types.category.studentbostader,
                    icon: (
                        <StudentlagenheterIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: t("Studentbostader.1"),
                },
                {
                    category: types.category.kontor,
                    icon: (
                        <OfficeIcon 
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}                   
                        />
                    ),
                    label: "Kontor"
                },
                {
                    category: types.category.handel,
                    icon: (
                        <TradeIcon 
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}                   
                        />
                    ),
                    label: "Handel"
                },
                {
                    category: types.category.lager,
                    icon: (
                        <LagerIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: t("Lager.1"),
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
                    label: t("Industribyggnad.1"),
                },
                {
                    category: types.category.skola,
                    icon: (
                        <SchoolIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: t("Skola.1"),
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
                    label: t("Forskola.1"),
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
                    label: t("Parkeringhus.1"),
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
                    label: t("Idrottshall.1"),
                },
            ];
        default:
            return [
                {
                    category: types.category.ombyggnad,
                    icon: (
                        <TubesIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: "Bostäder",
                },
                {
                    category: types.category.kontor,
                    icon: (
                        <WorkIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: "Kontor",
                },
                {
                    category: types.category.handel,
                    icon: (
                        <ShopIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: "Handel",
                },
                {
                    category: types.category.skola,
                    icon: (
                        <SchoolIcon
                            color="#21344d"
                            size={80}
                            style={{ paddingTop: 10 }}
                        />
                    ),
                    label: "Skola",
                },
            ];
    }
}
