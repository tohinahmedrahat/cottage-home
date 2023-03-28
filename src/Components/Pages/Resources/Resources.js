import React from 'react';
import useTitle from '../../Hooks/useTitle';
import ResourceBanner from './ResourceBanner';
import ResourcesCard from './ResourcesCard';

const Resources = () => {
    useTitle('Resources');
    window.scrollTo(0, 0);
    return (
        <div>
            <ResourceBanner>

            </ResourceBanner>

            <ResourcesCard>

            </ResourcesCard>
        </div>
    );
};

export default Resources;