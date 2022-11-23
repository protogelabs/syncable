import { useLayoutEffect, useState } from "react";

export type Accent= 'blue'|'dark'|'red'|'orange'|'pink'|'green';

export const useTheme = (currentAccent?:Accent) => {
    //If Current Theme is Not specified default will be light mode
    const [resolvedAccent, setAccent] = useState<Accent>(!currentAccent ? 'green' : currentAccent)
    
    //useLayoutEffect runs before the component is mounted, unlike useEffect
    //Hence my reason for choosing it
    useLayoutEffect(() => {
        //Sets the theme attribute of the body tag to the theme chosen
        document.body.setAttribute('Accent', resolvedAccent)
    }, [resolvedAccent])

    const toggleAccent = (newaccentcolor:Accent) => setAccent(newaccentcolor)
    
    //Returns an array containing the current theme and a function to change the current Theme
    return [resolvedAccent, toggleAccent]
}