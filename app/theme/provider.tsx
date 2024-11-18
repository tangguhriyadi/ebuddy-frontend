import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";

export default function MUIThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
