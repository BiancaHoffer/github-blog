import BarLoader from "react-spinners/BarLoader";
import { ContainerLoading } from "./styles";

export function LoadingHeader() {
    return (
        <ContainerLoading>
            <BarLoader
                color='#3294F8'
                aria-label="Loading Spinner"
                data-testid="loader"
                className="spinner"
                width={200}
            />
        </ContainerLoading>
    )
}



