import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default ScrollToTop;
// ce composant assure que la page sera toujours positionnée en haut lorsque l'utilisateur navigue entre les différentes pages d'une application web.