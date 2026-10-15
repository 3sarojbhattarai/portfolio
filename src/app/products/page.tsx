import type { Metadata } from "next"
import PageShell from "../../components/PageShell"
import LinkCard from "../../components/LinkCard"

export const metadata: Metadata = {
  title: "Products | Saroj Bhattarai",
  description: "Products built by Saroj Bhattarai.",
}

const products = [
  { name: "stools", href: "https://stools.saroj3.com.np/", label: "stools.saroj3.com.np", icon: "/products/stools.svg" },
  { name: "Nepal Income Tax Calculator", href: "https://taxcalculator.saroj3.com.np/", label: "taxcalculator.saroj3.com.np", icon: "/products/taxcalculator.svg" },
  { name: "Dev Tools", href: "https://devtools.saroj3.com.np/", label: "devtools.saroj3.com.np", icon: "/products/devtools.svg" },
]

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Products"
      title="Things I’ve shipped."
      intro="Live products I’ve designed, built and maintain end to end."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => <LinkCard key={product.href} {...product} />)}
      </div>
    </PageShell>
  )
}
