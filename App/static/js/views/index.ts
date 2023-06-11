import React from 'react';
import Loading from './Loading';
const Home = React.lazy(() => import('./Home'));
const DataBrowse = React.lazy(() => import('./DataBrowse'));
const Search = React.lazy(() => import('./Search'));
const GenomeBrowserList = React.lazy(() => import('./GenomeBrowserList'));
const GenomeBrowser = React.lazy(() => import('./GenomeBrowser'));
const Download = React.lazy(() => import('./Download'));
const Statistics = React.lazy(() => import('./Statistics'));
const Contact = React.lazy(() => import('./Contact'));
const Help = React.lazy(() => import('./Help'));
const Detail = React.lazy(() => import('./Detail'));
const Tools = React.lazy(() => import('./Tools'));
const Submit = React.lazy(() => import('./Submit'));


export {
    Loading, Home, DataBrowse, Search, GenomeBrowserList, GenomeBrowser,
    Download, Statistics, Contact, Help, Detail, Tools, Submit
}