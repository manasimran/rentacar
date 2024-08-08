import * as React from 'react';
import { Gauge, gaugeClasses, } from '@mui/x-charts';



export default function PieActiveArc() {
    return (<Gauge
        value={75}
        startAngle={0}
        cornerRadius={30}
        endAngle={360}

        innerRadius="80%"
        outerRadius="100%"

        height={500}
        width={400}
        sx={(theme) => ({
            [`& .${gaugeClasses.valueArc}`]: {
                fill: '#000CFF',
            },
            [`& .${gaugeClasses.valueText}`]: {
                fontSize: 50,
              },
        })}
    />
    );
}
