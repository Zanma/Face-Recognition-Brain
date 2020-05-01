import React from 'react';

const Rank = ({name, entries}) => {
    return(
        <div className='mt5'>
            <div className='white f2'>
                {`Hello ${name}, your current contribution is...`}
            </div>
            <div className='white f1 mt1'>
                {`# ${entries} `}
            </div>
        </div>
    );
}

export default Rank;