import { useLayoutEffect, useState } from "react";

export type Theme = 'light'|'dark';

export const useTheme = (currentTheme?:Theme) => {
    //If Current Theme is Not specified default will be light mode
    const [resolvedTheme, setTheme] = useState<Theme>(!currentTheme ? 'light' : currentTheme)
    
    //useLayoutEffect runs before the component is mounted, unlike useEffect
    //Hence my reason for choosing it
    useLayoutEffect(() => {
        //Sets the theme attribute of the body tag to the theme chosen
        document.body.setAttribute('theme', resolvedTheme)
    }, [resolvedTheme])

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark':'light')
    
    //Returns an array containing the current theme and a function to change the current Theme
    return [resolvedTheme, toggleTheme]
}