import type { Metadata } from "next"
import PageShell from "../../components/PageShell"
import LinkCard from "../../components/LinkCard"
import { GitHubIcon } from "../../components/icons"

export const metadata: Metadata = {
  title: "Open Source | Saroj Bhattarai",
  description: "Open source projects by Saroj Bhattarai.",
}

const repos = ["gantry", "treefile", "applytics", "sarhash", "sarhash-core"]

export default function OssPage() {
  return (
    <PageShell
      eyebrow="Open Source"
      title="Built in the open."
      intro="Projects I’ve created and maintain on GitHub. Contributions, issues and stars are always welcome."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((name) => (
          <LinkCard
            key={name}
            name={name}
            href={`https://github.com/3sarojbhattarai/${name}`}
            label={`github.com/3sarojbhattarai/${name}`}
            icon={<GitHubIcon />}
          />
        ))}
      </div>
    </PageShell>
  )
}
