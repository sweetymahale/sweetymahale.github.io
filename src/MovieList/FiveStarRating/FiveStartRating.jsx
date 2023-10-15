import { StartFill, StartHalf, Star as StartEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStartRating({ rating }) {
    const starList = [];

    //store number of filled star
    const starFillCount = Math.floor(rating);
    //store yes/ no if there is half star
    const hasHalfStar = rating - parseInt(rating) >= 0.5;

    //store number of empty stars
    const emptyStartCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

    // pushed the filled star icons
    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={"star-fill" + i} />)
    }

    if (hasHalfStar) {
        starList.push(<StarHalf key={"star-half"} />)
    }
    //push empty star icons
    for (let i = 1; i <= emptyStartCount; i++) {
        starList.push(<StarEmpty key={"star-empty" + i} />)
    }
    //render star icon array
    return <div>{starList}</div>

}