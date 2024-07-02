import { useState, useEffect } from "react";

export function useDeviceTypeQuery() {
    const [isMobile, setIsMobile] = useState("");

    useEffect(() => {
        setIsMobile(window.innerWidth <= 720);
    });

    return isMobile
}