import { Form } from "react-router";

export function DashboardPage() {
  return (
    <div>
      <Form method="post" action="/logout">
        <button type="submit">LogOut</button>
      </Form>
      <h1>Dashboard</h1>
    </div>
  );
}
