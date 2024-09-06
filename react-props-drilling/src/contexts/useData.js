import { useContext } from "react"
import { DataContext } from "./DataContext"

const useData = () => {
    // This is where the state is passed to all areas of your application
    return useContext(DataContext);
};

export default useData;