import s from "./style.module.css";
export function MovieList() {
    return (
        <div className={s.main_container}>
            <div className={s.header}>
                <div className="row">
                    <div classname="col-4">
                        <div>LOGO</div>
                        <div>Subtitle</div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <input style={{ width: "100%" }} type="text" />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>TV Show Detail</div>
            <div className={s.recommended_tv_show}>Recommended Tv SHow</div>
        </div>
    )
}