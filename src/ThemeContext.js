import { createContext } from "react";


// const [theme, setTheme] = useState("darkBlue")


const ThemeContext = createContext(["green", ()=> {}])


export default ThemeContext