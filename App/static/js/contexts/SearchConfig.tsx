import React from 'react';
import { asyncFetchGet, SearchConfig } from 'api';

interface SelectOption {
    id: number;
    name: string;
}

interface TreeNode {
    name: string;
    value?: number;
    children?: Array<TreeNode>;
}

interface SearchConfigState {
    familySelections: Array<SelectOption>;
    familyIdToGenus: Map<number, Array<SelectOption>>;
    genusIdToVirus: Map<number, Array<SelectOption>>;
    taxonomyChartData: TreeNode;
    biosampleTypeSelections: Array<string>;
    biosampleTypeToTissueTypes: Map<string, Array<string>>;
    tissueTypeToHosts: Map<string, Array<string>>;
    virusList: Array<string>;
    hostList: Array<string>;
    assayList: Array<string>;
    cellTypeList: Array<string>;
    timeCourseList: Array<{ group: number; virus: string; host: string; time: string; expr: number; }>;
    speciesSelections: Array<SelectOption>;
    getVirusTaxonomy?: () => Promise<void>;
    getSampleInformation?: () => Promise<void>;
    getTimecourses?: () => Promise<void>;
    getSpeciesInfo?: () => Promise<void>;
}

type Action = {
    type: 'UPDATE' | 'CLEAR';
    payload: Partial<SearchConfigState>;
}

const defaultState = {
    familySelections: [],
    familyIdToGenus: new Map<number, Array<SelectOption>>(),
    genusIdToVirus: new Map<number, Array<SelectOption>>(),
    taxonomyChartData: { name: 'All viruses', children: [] },
    biosampleTypeSelections: [],
    biosampleTypeToTissueTypes: new Map<string, Array<string>>(),
    tissueTypeToHosts: new Map<string, Array<string>>(),
    speciesSelections: [],
    virusList: [], hostList: [], assayList: [], cellTypeList: [], timeCourseList: []
};


export const SearchConfigContext = React.createContext<SearchConfigState>(defaultState);


const searchConfigReducer: React.Reducer<SearchConfigState, Action> = (state, action) => {
    switch (action.type) {
        case 'CLEAR':
            return defaultState;
        default:
            return { ...state, ...action.payload }
    }
}


export const SearchConfigProvider: React.FC = ({ children }) => {
    const [config, dispatch] = React.useReducer(searchConfigReducer, defaultState);

    const getVirusTaxonomy = React.useCallback(async () => {
        const config: SearchConfig = await asyncFetchGet('search-config', {
            defer: 'sample_types,assay,cell_types,time_courses'
        });
        const familySelections = new Array<SelectOption>();
        const familyIdToGenus = new Map<number, Array<SelectOption>>();
        const genusIdToVirus = new Map<number, Array<SelectOption>>();
        const virusList = new Array<string>();
        const chartDataChildren: Array<TreeNode> = [];
        config.virus_taxonomy.forEach(({ genera, ...family }) => {
            familySelections.push({ id: family.id, name: family.name });
            const genusTree: Array<{ name: string; value: number; children: Array<{ name: string; value: number; }> }> = [];
            if (!familyIdToGenus.has(family.id)) familyIdToGenus.set(family.id, []);
            genera.forEach(({ viruses, ...genus }) => {
                genusTree.push({
                    name: genus.name, value: viruses.length,
                    children: viruses.map(v => ({ name: v.name, value: 1 }))
                });
                if (!genusIdToVirus.has(genus.id)) genusIdToVirus.set(genus.id, []);
                familyIdToGenus.get(family.id)!.push({ id: genus.id, name: genus.name });
                viruses.forEach(virus => { 
                    genusIdToVirus.get(genus.id)!.push(virus);
                    virusList.push(virus.name);
                });
            });
            chartDataChildren.push({ name: family.name, value: genera.length, children: genusTree });
        });
        dispatch({ type: 'UPDATE', payload: { 
            familySelections, familyIdToGenus, genusIdToVirus, virusList, 
            taxonomyChartData: { name: 'All viruses', children: chartDataChildren }
        } });
    }, [])

    const getSampleInformation = React.useCallback(async () => {
        const config: SearchConfig = await asyncFetchGet('search-config', {
            defer: 'virus_taxonomy,time_courses'
        });

        const biosampleTypeSelections: Array<string> = [];
        const biosampleTypeToTissueTypes = new Map<string, Array<string>>();
        const tissueTypeToHosts = new Map<string, Array<string>>();
        let hostList = new Array<string>();
        let assayList = config.assay;
        let cellTypeList = config.cell_types.sort();

        config.sample_types.forEach(({ name, tissue_types }) => {
            biosampleTypeSelections.push(name);
            biosampleTypeToTissueTypes.set(name, []);
            tissue_types.forEach(tissue_type => {
                biosampleTypeToTissueTypes.get(name)!.push(tissue_type.name);
                tissueTypeToHosts.set(`${name}.${tissue_type.name}`, tissue_type.hosts);
                hostList = hostList.concat(tissue_type.hosts);
            });
        })

        dispatch({ type: 'UPDATE', payload: { 
            biosampleTypeSelections, biosampleTypeToTissueTypes, tissueTypeToHosts,
            hostList, assayList, cellTypeList
        } });

    }, []);

    const getTimecourses = React.useCallback(async () => {
        const config: SearchConfig = await asyncFetchGet('search-config', {
            defer: 'virus_taxonomy,sample_types,assay,cell_types'
        });
        dispatch({ type: 'UPDATE', payload: { 
            timeCourseList: config.time_courses
        } });
    }, []);
    
    const getSpeciesInfo = React.useCallback(async() => {
        const speciesConfig = await asyncFetchGet('species-config');
        dispatch({ type: 'UPDATE', payload: { 
            speciesSelections: speciesConfig
        } });
    }, []);

    return (
        <SearchConfigContext.Provider
            value={{
                ...config,
                getVirusTaxonomy,
                getSampleInformation,
                getTimecourses,
                getSpeciesInfo
            }}
        >
            {children}
        </SearchConfigContext.Provider>
    );
}