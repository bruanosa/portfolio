import  React, {useState, useEffect, useRef} from 'react';

//custom react hook event listner
export function useEventListener(elementID, eventType, handler) {
   
    const handlerRef = useRef(handler); //object that persists across renders of the component

    useEffect(() => {
        handlerRef.current = handler;
    })

    useEffect(() => {
        function internalHandler(e) {
            return handlerRef.current(e);
        }
        document.getElementById(elementID).addEventListener(eventType, internalHandler);

        return () => document.getElementById(elementID).addEventListener(eventType, internalHandler);
    }, [eventType]);
}

export function useOnScreen(ref, options){
    //keeps track of ref visibility
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        //create our observer
        const observer = new IntersectionObserver(([entry]) =>{
            setVisible(entry.isIntersecting); //updates visibility
        }, options);

        //attaches observer to ref element
        if(ref.current){
            observer.observe(ref.current);
        }

        //unobserve when done
        return () => {observer.unobserve(ref.current);}
        
    }, []);

    //return elements visibility 
    return isVisible;
}