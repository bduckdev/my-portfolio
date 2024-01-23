import Header from "./Header";
import { ThemeProvider } from "@/components/theme-provider";
function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Header />
            <div className="grid place-items-center h-screen">
                <h1 className="text-xl">sadfldsafjkdsa</h1>
            </div>
        </ThemeProvider>
    );
}

export default App;
