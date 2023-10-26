import { useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import s from "./style.module.css";


export default function Windowing() {
    const [load, setLoad] = useState(false);
    const Row = ({ index, style }) => (
        <div
            style={{
                ...style,
                margin: 0,
                padding: 12
            }}
            className={s.list}
        >
            Block {index}
        </div>
    );
    const renderList = () => {
        return (<List
            height={300}
            itemCount={10000}
            itemSize={35}
            width={300}
        >
            {Row}
        </List>)
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Windowing Example</h1>
            <span style={{ width: "50%" }}>Implemented 'react-window' liabrary for rendering large list, it helps in improving page performance as we dont have to load thousands of records in UI </span>
            <div className={s.main_container}>{renderList()}</div>
            <div style={{ display: "flex", justifyContent: "center" }}

            ></div>
        </>
    )
}