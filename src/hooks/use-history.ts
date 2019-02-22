import { useCallback, useEffect } from "react";

const useHistory = (dispatch: Function) => {
  const navigate = useCallback(() => {
    const hash = location.hash;
    const path = hash.replace(/^#\/?/, "") || "index";
    dispatch({ type: "route/navigate", payload: path });
  }, [dispatch]);
  // 変わるたびにやる
  useEffect(() => {
    window.addEventListener("popstate", navigate);
    return () => window.removeEventListener("popstate", navigate);
  }, [navigate]);
  // いっかいだけやる
  useEffect(() => navigate(), []);
};
export default useHistory;
