import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const pData = [24, 13, 38, 29, 28, 12, 0];
const xLabels = [
    'Mo',
    'Di',
    'Mi',
    'Do',
    'Fr',
    'Sa',
    'So',
];

export default function SimpleBarChart() {
    return (
        <BarChart
            width={500}
            height={300}
            series={[
                { data: pData, label: 'Patienten', id: 'pvId' }
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
    );
}
