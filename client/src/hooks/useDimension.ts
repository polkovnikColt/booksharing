import {useState, useEffect} from 'react';

export function useWidth(innerDimension: number): number {
    const [dimension, setDimension] = useState(innerDimension);

    useEffect(() => {
        function handleDimension(): void {
            setDimension(window.innerWidth);
        }

        window.addEventListener('resize', handleDimension);
        // return cleanup() window.removeEventListener('resize',handleDimension);

    }, [])
    return dimension;
}

export function useHeight(innerDimension: number): number {
    const [dimension, setDimension] = useState(innerDimension);

    useEffect(() => {
        function handleDimension(): void {
            setDimension(window.innerHeight);
        }

        window.addEventListener('resize', handleDimension);
        // return cleanup() window.removeEventListener('resize',handleDimension);

    }, [])
    return dimension;
}