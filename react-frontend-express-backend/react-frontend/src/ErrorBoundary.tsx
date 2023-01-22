import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null | undefined
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: _ };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  
  refreshPage() {
    console.warn("Reloading whole addin due to an unhandled error")
    window.location.reload();
  }


  public render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Sorry.. there was an error</h1>;
          <div>
            <p>Technical information: {this.state.error?.message}</p>
            <pre>Stack Trace: {this.state.error?.stack}</pre>
          </div>
          <button onClick={this.refreshPage}>Reload Webapp</button>
        </>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;