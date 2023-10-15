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
            <div className={s.main_container}>{renderList()}</div>
            <div style={{ display: "flex", justifyContent: "center" }}

            ></div>
        </>
    )
}