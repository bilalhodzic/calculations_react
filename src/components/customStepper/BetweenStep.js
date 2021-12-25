import types from "../../helper/data.json";

import { ReactComponent as VarmlagerIcon } from "../../images/VarmlagerIcon.svg";
import { ReactComponent as KallLagerIcon } from "../../images/KallLagerIcon.svg";
import { ReactComponent as KylLagerIcon } from "../../images/KylLagerIcon.svg";
import CardRows from "./CardRows";

const lagerTypes = [
    {
        category: types.category.varmlager,
        icon: (
            <VarmlagerIcon
                color="#21344d"
                size={80}
                style={{ paddingTop: 10 }}
            />
        ),
        label: "Varmlager",
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
        label: "Kall Lager",
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
        label: "Kyl/Frys Lager",
    },
];

export default function BetweenStep (props) {
    const data = props.data;
    const setData = props.setData;

    const handleClickPaper = (prop) => {
        //setting the state property from parent component
        data.category = prop;
        setData(data);
        props.handleChange("ProjectType", prop);
    };

    return <CardRows data={data} handleClickPaper={handleClickPaper} items={lagerTypes} />
}
