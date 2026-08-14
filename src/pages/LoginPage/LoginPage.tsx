import { Form } from "react-router";

export function LoginPage() {
  return (
    <section>
      <h1>Login</h1>

      <Form method="post">
        <input type="email" name="email" placeholder="Email" />

        <input type="password" name="password" placeholder="Password" />

        <button type="submit">Login</button>
      </Form>
    </section>
  );
}
