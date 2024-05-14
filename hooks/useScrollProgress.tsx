import React, {useState, useEffect} from "react";


const useScrollProgress = ()=>{
    const [completion, setCompletion] = useState(0);

    useEffect(()=>{
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollableDistance = document.body.scrollHeight - window.innerHeight;

            if (scrollableDistance > 0) {
                const progress = (currentProgress / scrollableDistance) * 100;
                setCompletion(parseInt(progress.toFixed(2)));
            }
        };
        window.addEventListener("scroll", updateScrollCompletion);

        return ()=>{
            removeEventListener("scroll", updateScrollCompletion)
        }
    },[])

            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;
    return completion
}

export default useScrollProgress