const { useEffect } = require("react");

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Cottage Home Care Services`;
    }, [title])
}
export default useTitle;
