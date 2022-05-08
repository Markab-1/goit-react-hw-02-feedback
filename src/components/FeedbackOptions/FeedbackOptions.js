import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {  
    return (
        <div>
            <ul className={s.Statistics__list}>
                <li className={s.Statistics__item}>                     
                    <button type="button" className={s.Statistics__btn} onClick={onLeaveFeedback}>Good</button>
                </li>                
                <li className={s.Statistics__item}>                    
                    <button type="button" className={s.Statistics__btn} onClick={onLeaveFeedback}>Neutral</button>                    
                </li>                
                <li className={s.Statistics__item}>                    
                    <button type="button" className={s.Statistics__btn} onClick={onLeaveFeedback}>Bad</button>                    
                </li>                
            </ul>           
        </div>
    );
}

export default FeedbackOptions;