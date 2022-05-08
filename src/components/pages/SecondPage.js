import { Helmet } from "react-helmet";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const SecondPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Second Page"
                />
                <title>Second page</title>
            </Helmet>
          <ErrorBoundary>
            It's a second page!
          </ErrorBoundary>
        </>
    )
}

export default SecondPage;