import { StarsType } from "../types/StarsType"
import { Star } from "./Star"

export const Stars = ({count}: StarsType) => {
    if (count < 1 || count > 5 ) {
        return null
    }

    const starsArray = [...Array(count)]

    return (
        <ul className="card-body-stars u-clearfix">
           {starsArray.map((_, index) => <Star key={index}/>)}
        </ul>
    )
}
