import React from 'react';
import { Pfs } from './../models';

interface PfsProps {
    pfs: Pfs[];
};

const PfsSection = ({ pfs }: PfsProps) => {
    const renderedPfs = pfs.map((pfs: Pfs) =>
        <li className="experience-item">
            <ul className="details">
                {pfs.bullets.map((bullet) => {
                    return <li key={bullet}>{bullet}</li>;
                })}
            </ul>
        </li>
    );

    return (
        <div className="experience">
            <h2>Professional Summary</h2>
            <ul className="experience-list">
                {renderedPfs}
            </ul>
        </div>
    );
};

export default PfsSection;
