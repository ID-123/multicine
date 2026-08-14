type LoginPageProps = { setIsAuthenticated: (value: boolean) => void };

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  setIsAuthenticated(true);
  navigate("/dashboard");
}

export function LoginPage({ setIsAuthenticated }: LoginPageProps) {
  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
