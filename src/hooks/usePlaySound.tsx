import { useEffect, useState } from "react";
function usePlaySound(audio : string) {
    const [audioTune, setAudioTune] = useState<HTMLAudioElement | null>(null);
    const [ isMuted, setIsMuted ] = useState<boolean>(false);

    useEffect(() => {
        setAudioTune(new Audio(audio));
    }, [audio]);

    useEffect(() => {
        audioTune?.load();
    }, [audioTune]);

    const playSound = () => {
        isMuted && audioTune?.play();
    }

    const muteSound = () => {
        audioTune?.pause();
        setIsMuted((muteValue) => !muteValue);
    }

    return { playSound, muteSound };
}

export default usePlaySound;