import Thanks from './thanks';
import LightPrayer from './light-prayer';
import Examination from './examination';
import Sorrow from './sorrow';
import Resolution from './resolution';
import React from 'react';

export default ({ theme }) => {
    return (
        <section>
            <Thanks />
            <LightPrayer />
            <Examination />
            <Sorrow />
            <Resolution />
        </section>
    );
};
