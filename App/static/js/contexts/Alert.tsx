import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertProps } from "@material-ui/lab";


interface AlertState {
    severity: AlertProps['severity'],
    message: string,
}

const defaultOptions: AlertState = {
    severity: 'info',
    message: ''
}

export const AlertContext = React.createContext<(options: AlertState) => void>(() => {});

export const AlertProvider: React.FC<{}> = ({ children }) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [options, setOptions] = React.useState<AlertState>(defaultOptions);

    const alert = (options: AlertState) => {
        setOptions({ ...options });
        setOpen(true);
    }

    return (
        <>
            <AlertContext.Provider
                value={alert}
            >
                {children}
            </AlertContext.Provider>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setOpen(false)}
            >
                <Alert
                    severity={options.severity}
                    onClose={() => setOpen(false)}
                >
                    {options.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export const useAlert = () => {
    const alert = React.useContext(AlertContext);
    return alert;
}
