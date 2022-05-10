import types from "../../helper/data.json";

import { ReactComponent as VarmlagerIcon } from "../../images/VarmlagerIcon.svg";
import { ReactComponent as KallLagerIcon } from "../../images/KallLagerIcon.svg";
import { ReactComponent as KylLagerIcon } from "../../images/KylLagerIcon.svg";
import CardRows from "./CardRows";
import { useTranslation } from "react-i18next";

export default function BetweenStep(props) {
    const {t} = useTranslation();
    const data = props.data;

    const items = getData(t);

    const handleClickPaper = (prop) => {
        //setting the state property from parent component
        props.handleChange("category", prop);
    };

    return (
        <CardRows
            data={data}
            handleClickPaper={handleClickPaper}
            items={items}
            offset={3}
        />
    );
}

function getData(t){
    return [
        {
            category: types.category.varmlager,
            icon: (
                <VarmlagerIcon
                    color="#21344d"
                    size={80}
                    style={{ paddingTop: 10 }}
                />
            ),
            label: t("Varmlager.1"),
        },
        {
            category: types.category.kalllager,
            icon: (
                <KallLagerIcon
                    color="#21344d"
                    size={80}
                    style={{ paddingTop: 10 }}
                />
            ),
            label: t("Kalllager.1"),
        },
        {
            category: types.category.kyllager,
            icon: (
                <KylLagerIcon
                    color="#21344d"
                    size={80}
                    style={{ paddingTop: 10 }}
                />
            ),
            label: t("Kyllager.1"),
        },
    ];
}
