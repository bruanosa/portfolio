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