import { FaHeart } from "react-icons/fa";

const MovieCard = ({name,image,rate}) => {

    return (
        <div className="col-lg-3 mt-5 d-flex align-items-stretch">
        <div className='card' style={{ width: '19rem' }}>
            <img src={`https://image.tmdb.org/t/p/w1280${image}`} className='card-img-top' alt={`https://image.tmdb.org/t/p/w1280${image}`} />
            <div className='card-body'>
                <h4 className='card-title'>{name}</h4>
                <p><FaHeart className = "icon"/>{rate}</p>
            </div>
        </div>
        </div>
    );
};

export default MovieCard;
