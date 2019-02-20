import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphyIndex = (props) => {
    const {giphys} = props
    return (
        <div>
            {props.giphys.data && giphys.data.map((data, i) => <GiphysIndexItem key={i} giphy={data.images.fixed_height.url}/>)}
        </div>
    )
}
export default GiphyIndex;