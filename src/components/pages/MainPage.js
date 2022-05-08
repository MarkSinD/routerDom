import { Helmet } from "react-helmet";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";


const MainPage = () => {

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="First page"
                    />
                <title>First page</title>
            </Helmet>
            <ErrorBoundary>
              It's a first page!
            </ErrorBoundary>
        </>
    )
}

export default MainPage;