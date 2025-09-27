type Service = {
  id: number;
  title: string;
  description: string;
  status: "draft" | "published";
};

async function getServices(): Promise<Service[]> {
  const res = await fetch("http://localhost:3000/services.json", {
    next: { revalidate: 60 }, // ISR
  });
  return res.json();
}


export default async function ServicesPage() {
  const services = await getServices();
  const published = services.filter((s) => s.status === "published");

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
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
    </main>
  );
}