"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    });

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Capturar cliques em links de âncora
    const handleClick = (e: Event) => {
        const target = e.target as HTMLAnchorElement;
        if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")!.substring(1);
        const el = document.getElementById(id);
        if (el) {
            lenis.scrollTo(el);
        }
        }
    };

    document.addEventListener("click", handleClick);

    return () => {
        document.removeEventListener("click", handleClick);
        lenis.destroy();
    };
    }, []);


  return <>{children}</>;
}
