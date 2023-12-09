import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: unknown = useRouteError();
  return (
    <div className="error-page">
      <h1>🫠</h1>
      <h1>A wild error has appeared!</h1>
      <p>
        <i>
          {(error as { statusText?: string; message?: string }).statusText ??
            (error as { statusText?: string; message?: string }).message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
