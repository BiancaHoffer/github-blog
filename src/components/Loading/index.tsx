import BarLoader from "react-spinners/BarLoader";
import { ContainerLoading } from "./styles";

interface LoadingProps {
    width: number;
}

export function Loading({ width }: LoadingProps) {
    return (
        <ContainerLoading>
            <BarLoader
                color='#3294F8'
                aria-label="Loading Spinner"
                data-testid="loader"
                className="spinner"
                width={width}
            />
        </ContainerLoading>

    )
}



