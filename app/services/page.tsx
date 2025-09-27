import services from "../../data/services.json";

type Service = {
  id: number;
  title: string;
  description: string;
  status: "draft" | "published";
};

export default function ServicesPage() {
  // Apply type assertion to imported JSON
  const typedServices = services as Service[];

  // Filter only published services
  const published = typedServices.filter((s) => s.status === "published");

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      {published.length > 0 ? (
        <ul className="grid gap-6 md:grid-cols-2">
          {published.map((s) => (
            <li
              key={s.id}
              className="rounded-lg border p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-gray-600">{s.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No services available at the moment.</p>
      )}
    </main>
  );
}
