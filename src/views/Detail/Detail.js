import React, {Suspense} from 'react';
import "./Detail.css"
import RecommendationList from "../../components/RecommendationList/RecommendationList";
import DetailCard from "../../components/DetailCard/DetailCard";

const Detail = () => {
    return (
        <Suspense fallback={<h1>Loading</h1>}>
        <div className="container">
            <DetailCard/>
            <RecommendationList/>
        </div>
        </Suspense>
    );
};

export default Detail;