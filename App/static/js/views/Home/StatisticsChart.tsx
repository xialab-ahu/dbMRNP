import React from 'react';
import { Pie, Bar } from '@ant-design/charts';
// import { DonutChart, Chart, Tooltip, Interval, Coordinate, Axis } from 'bizcharts';

interface Props {
    type: 'bar' | 'pie';
    data: Array<Record<string, any>>;
}

const colors = ['#a05195', '#665191', '#2f4b7c', '#0075e2', '#06acf1', '#0ce3ff', '#51f0e8', '#95fed0', '#bbee9e', '#e0de6d', '#f0c17f', '#ffa391', '#e78166', '#cf5f3b', '#f95d6a'];

const StatisticsChart: React.FC<Props> = ({ type, data }) => {
    if (type === 'pie') {
        return (
            <Pie
                height={400} autoFit data={data} padding="auto"
                angleField="value" colorField="name" color={colors} radius={0.7} innerRadius={0.55}
                label={{ type: 'spider', content: '{value}', labelHeight: 28 }}
                legend={{ position: 'bottom' }}
                interactions={[{ type: 'element-selected' }, { type: 'element-active' }]}
                statistic={{
                    title: { formatter: () => 'Total' },
                    content: { formatter: (datum, data) => data?.length.toString() as string }
                }}
            />
        )
    } else {
        return (
            <Bar
                height={400} autoFit data={data} padding="auto" appendPadding={8}
                xField="value" yField="name" seriesField="name" color={colors}
                yAxis={{
                    label: {
                        autoEllipsis: true, autoHide: false, style: { fontSize: 10 }
                    }
                }}
                meta={{ value: { type: 'log' } }}
                
            //scale={{ value: { type: 'log', base: 10 } }}
            />
        );
    }
}

export default React.memo(StatisticsChart);
