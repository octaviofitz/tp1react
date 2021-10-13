import React from 'react';
import GenreInDb from '../components/GenreInDb';
import ContentRowMovies from '../components/ContentRowMovies';
import LastMovie from '../components/LastMovie';


function ContentRowTop() {
    return(
		<div className="row"> 
		<ContentRowMovies />
		<LastMovie />
		<GenreInDb />
		</div>	
	
    )
}
export default ContentRowTop;
				