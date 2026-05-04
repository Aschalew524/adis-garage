import { CustomerRoster } from "../components/CustomerRoster";
import { customers } from "../data/seed";

export function CustomersPage() {
  return (
    <section>
      <header className="page-head">
        <div>
          <h1>Customers</h1>
          <p>Search plates and vehicles, then select rows for pickup texts.</p>
        </div>
      </header>
      <CustomerRoster customers={customers} />
    </section>
  );
}
