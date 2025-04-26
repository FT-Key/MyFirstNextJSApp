import CustomersTable from "../ui/customers/table";

export default async function CustomersPage() {
  // Simulamos datos para probar
  const customers = [
    {
      id: "1",
      name: "Juan Pérez",
      email: "juan@example.com",
      total_invoices: 5,
      total_pending: "$200",
      total_paid: "$800",
      image_url: "/avatars_128x128/avatar_0.webp", // asegúrate de tener esta imagen en /public
    },
    {
      id: "2",
      name: "Ana Gómez",
      email: "ana@example.com",
      total_invoices: 3,
      total_pending: "$100",
      total_paid: "$500",
      image_url: "/avatars_128x128/avatar_1.webp",
    },
  ];

  return (
    <div className="p-4">
      <CustomersTable customers={customers} />
    </div>
  );
}
