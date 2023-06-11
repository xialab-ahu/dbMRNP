import React from 'react';
import { Paper } from '@material-ui/core';


const VisitorStatistics: React.FC = () => {
    const ref = React.createRef<HTMLDivElement>();
    React.useEffect(() => {
        const refObj = ref.current!;
        const script = document.createElement('script');
        script.src = '//cdn.clustrmaps.com/map_v2.js?cl=cfd8dc&w=a&t=tt&d=B4Ac5dEh_jodXdhAmP39aaAXy_s5EhbGjszG6lpINbY&co=ffffff&cmo=00ab55&cmn=5be584&ct=000000';
        script.id = 'clustrmaps';
        script.type = 'text/javascript';
        script.async = true;
        refObj.appendChild(script);
        return () => {
            refObj.removeChild(script);
        }
    }, [ref])
    return (
        <Paper elevation={4} style={{ padding: 16 }}>
            <div ref={ref}></div>
        </Paper>
        
    );
}

export default VisitorStatistics