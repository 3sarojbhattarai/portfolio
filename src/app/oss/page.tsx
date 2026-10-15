import type { Metadata } from "next"
import PageShell from "../../components/PageShell"
import LinkCard from "../../components/LinkCard"
import { pageMetadata } from "../../lib/seo"
import { GitHubIcon } from "../../components/icons"

export const metadata: Metadata = pageMetadata({
  title: "Open Source",
  description: "Open source projects by Saroj Bhattarai: gantry, treefile, applytics, sarhash and sarhash-core.",
  path: "/oss",
})

const repos = [
  { name: "gantry", description: "A Docker tool for inspecting and managing a local Docker daemon." },
  { name: "treefile", description: "Generate copyable directory tree structures in multiple formats." },
  { name: "applytics", description: "A lightweight, open-source Google Analytics alternative with more features." },
  { name: "sarhash", description: "Bindings for sarhash-core, a modular Rust library for secure password operations." },
  { name: "sarhash-core", description: "A modular Rust library designed for secure password operations." },
]

export default function OssPage() {
  return (
    <PageShell
      eyebrow="Open Source"
      title="Built in the open."
      intro="Projects I’ve created and maintain on GitHub. Contributions, issues and stars are always welcome."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map(({ name, description }) => (
          <LinkCard
            key={name}
            name={name}
            description={description}
            href={`https://github.com/3sarojbhattarai/${name}`}
            label={`github.com/3sarojbhattarai/${name}`}
            icon={<GitHubIcon />}
          />
        ))}
      </div>
    </PageShell>
  )
}
