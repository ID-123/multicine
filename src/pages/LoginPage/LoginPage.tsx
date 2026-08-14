import { Form } from "react-router";

export function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="w-full max-w-md">
        <h2>Login</h2>
        <Form method="post" className="flex flex-col gap-4">
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Password
            <input type="password" name="password" required />
          </label>
          <button type="submit">Login</button>
        </Form>
      </section>
    </main>
  );
}
