import { useEffect, useState } from "react";
import s from "./style.module.css";
import { TVShowAPI } from './tv-show';
import { BASE_URL } from "../config";
import { BACKDROP_BASE_URL } from "../config";
import { TVShowDetail } from "./TVShowDetail/TVShowDetails";
import { Logo } from "./Logo/Logo";
import logoImg from "./img/logo.png";

export function MovieList() {
    const [currentTvShow, setCurrentTVShow] = useState();
    async function fetchPopulars() {
        const popularTVShowList = await TVShowAPI.fetchPopulars();
        if (popularTVShowList.length > 0)
            setCurrentTVShow(popularTVShowList[0

            ]);
    }
    useEffect(() => {
        fetchPopulars();

    }, []);
    console.log(currentTvShow);
    return (
        <div className={s.main_container}
            style={{
                background: currentTvShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
                    : "black"
            }}
        >
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo image={logoImg} title='WaytoWatch' subtitle="Find your favourite" />
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <input style={{ width: "100%" }} type="text" />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {currentTvShow && <TVShowDetail tvShow={currentTvShow} />}
            </div>
            <div className={s.recommended_tv_show}>Recommended Tv SHow</div>
        </div>
    )
}
export default MovieList;