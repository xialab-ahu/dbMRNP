import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import HomeLayout from 'layouts/HomeLayout';
import { SearchConfigProvider } from 'contexts/SearchConfig';
import { AlertProvider } from 'contexts/Alert';

import {
    Loading, Home, Contact, Submit, DataBrowse, Download, GenomeBrowserList, GenomeBrowser,
    Search, Statistics, Tools, Help, Detail
} from 'views';
import theme from 'theme';

/* 
interface Props extends RouteComponentProps { }
function RouteWithSubRoutes(route: any) {
    return (
        <Route
            path={route.path}
            render={(props: Props) => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
} 
*/

class App extends React.Component<{}, {}> {
    public render() {
        return (

            <Router>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="App">
                        <AlertProvider>
                            <Switch>
                                <Route path={['/', '/home']} exact>
                                    <HomeLayout>
                                        <React.Suspense fallback={<Loading />}>
                                            <Route path="/" exact component={Home} />
                                        </React.Suspense>
                                    </HomeLayout>
                                </Route>
                                <Route>
                                    <MainLayout>
                                        <React.Suspense fallback={<Loading />}>
                                            <SearchConfigProvider>
                                                <Switch>
                                                    <Route path="/databrowse/" component={DataBrowse} />
                                                    <Redirect from="/search/" to="/search/taxonomy/" exact />
                                                    <Route path="/search/" component={Search} />
                                                    <Route path="/tools/" component={Tools} />
                                                    <Route exact path="/genomebrowse/" component={GenomeBrowserList} />
                                                    <Route path="/genomebrowse/:species/" component={GenomeBrowser} />
                                                    <Route path="/download/" component={Download} />
                                                    <Route path="/statistics/" component={Statistics} />
                                                    <Route path="/contact/" component={Contact} />
                                                    <Route path="/submit/" component={Submit} />
                                                    <Route path="/help/" component={Help} />
                                                    {/* <Route path="/result" component={Result} /> */}
                                                    <Route path="/detail/:id/" component={Detail} />
                                                </Switch>
                                            </SearchConfigProvider>
                                        </React.Suspense>
                                    </MainLayout>
                                </Route>
                            </Switch>
                        </AlertProvider>
                    </div>
                </ThemeProvider>
            </Router>
        );
    }

}

export default App;
