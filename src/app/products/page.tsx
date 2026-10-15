import type { Metadata } from "next"
import PageShell from "../../components/PageShell"
import LinkCard from "../../components/LinkCard"
import { pageMetadata } from "../../lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: "Products built and maintained by Saroj Bhattarai: fileworks, Nepal Income Tax Calculator and Dev Tools.",
  path: "/products",
})

const products = [
  { name: "fileworks", href: "https://fileworks.saroj3.com.np/", label: "fileworks.saroj3.com.np", icon: "/products/fileworks.svg" },
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
