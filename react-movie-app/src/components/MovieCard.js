

const MovieCard = ({name,desc,image,rate}) => {

    return (
            <div className='row mt-5'>
                <div className='card' style={{ width: '18rem' }}>
                    <img src={`https://image.tmdb.org/t/p/w1280${image}`} className='card-img-top' alt={`https://image.tmdb.org/t/p/w1280${image}`} />
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>
                        <p>{rate}</p>
                        <p className='card-text'>
                            {desc}
                        </p>
                        
                    </div>
                </div>
            </div>
    );
};

export default MovieCard;
