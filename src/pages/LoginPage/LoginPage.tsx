import { Form, useActionData, useNavigation } from "react-router";

export function LoginPage() {
  const actionData = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="w-full max-w-md gap-1  m-1.5 p-2 flex flex-col">
        <h2 className="self-center">Login</h2>

        {actionData?.error && <p>{actionData.error}</p>}

        <Form method="post" className="flex flex-col gap-4">
          <label>
            Email
            <input className="border gap-1 ml-3" type="email" name="email" required />
          </label>
          <label>
            Password
            <input className="border gap-1 ml-3" type="password" name="password" required />
          </label>
          <button type="submit" disabled={isSubmitting} >{isSubmitting ? "Launching..." : "Login"}</button>
        </Form>
      </section>
    </main>
  );
}
