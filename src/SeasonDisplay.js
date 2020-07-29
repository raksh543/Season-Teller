import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    Summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    Winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month>2 && month<9){
        return lat>0 ? 'Summer' : 'Winter'; //javascript ternary expression
    }else{
        return lat>0 ? 'Winter' : 'Summer'; //javascript ternary expression
    }
}

const SeasonDisplay = props => {

    //Jan=0, dec=11
    // april to sept is Summer
    //Otherwise winter

    const Season = getSeason(props.lat, new Date().getMonth());
    //either we can use simple if else statements or we can use js ternary expression as follows

    // const text = Season === 'Winter' ? 'Burr, it is chilly' : 'Let\'s hit the beach';
    // //one method
    // const icon = Season == 'Winter' ? <i class="snowflake icon"></i> : <i class="sun icon"></i>;

    // //second method
    // const iconImg = Season === 'Winter' ? 'snowflake' : 'sun';

    //destructuring
    const{text, iconName} = seasonConfig[Season]
    return(
        
        <div className={`season-display ${Season}`}>
            <i  className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            {/* {icon} */}
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;