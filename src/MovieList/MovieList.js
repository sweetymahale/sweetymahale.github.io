import { useEffect, useState } from "react";
import s from "./style.module.css";
import { TVShowAPI } from './tv-show';
import { BASE_URL } from "./config";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./TVShowDetail/TVShowDetails";
import { Logo } from "./Logo/Logo";
import { TVShowList } from './TVShowList/TVShowList'
import logoImg from "./img/logo.png";

export function MovieList() {
    const [currentTvShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    useEffect(() => {
        fetchPopulars();

    }, []);
    useEffect(() => {
        if (currentTvShow) {
            fetchRecommendations(currentTvShow.id);
        }
    }, [currentTvShow]);

    async function fetchPopulars() {
        const popularTVShowList = await TVShowAPI.fetchPopulars();
        if (popularTVShowList.length > 0)
            setCurrentTVShow(popularTVShowList[0

            ]);
    }
    async function fetchRecommendations(tvShowId) {
        const recommendationListResp = await TVShowAPI.fetchRecommendations(
            tvShowId
        );
        if (recommendationListResp.length > 0) {
            setRecommendationList(recommendationListResp.slice(0, 10));
        }
    }
    function updateCurrentTVShow(tvShow) {
        setCurrentTVShow(tvShow);
    }

    async function fetchByTitle(title) {
        const searchResponse = await TVShowAPI.fetchByTitle(title);
        if (searchResponse.length > 0) {
            setCurrentTVShow(searchResponse[0]);
        }
    }
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
            <div className={s.recommended_shows}>
                {currentTvShow && (
                    <TVShowList
                        onClickItem={updateCurrentTVShow}
                        tvShowList={recommendationList}
                    />
                )}
            </div>
        </div>
    )
}
export default MovieList;