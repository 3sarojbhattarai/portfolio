import type { Metadata } from "next"
import PageShell from "../../components/PageShell"
import LinkCard from "../../components/LinkCard"
import { GitHubIcon, SubstackIcon, TwitterIcon } from "../../components/icons"

export const metadata: Metadata = {
  title: "Contact | Saroj Bhattarai",
  description: "Get in touch with Saroj Bhattarai.",
}

const channels = [
  { name: "Twitter / X", href: "https://twitter.com/3sarojbhattarai", label: "@3sarojbhattarai", description: "Send me a message about a role or project.", icon: <TwitterIcon /> },
  { name: "GitHub", href: "https://github.com/3sarojbhattarai", label: "github.com/3sarojbhattarai", description: "See my code and open an issue on any project.", icon: <GitHubIcon /> },
  { name: "Substack", href: "https://sarojbhattarai.substack.com/", label: "sarojbhattarai.substack.com", description: "Read and subscribe to my writing.", icon: <SubstackIcon /> },
]

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let’s work together."
      intro="Hiring, or have a project in mind? I’d love to hear about it. Reach out on any of these and I’ll get back to you."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {channels.map((channel) => <LinkCard key={channel.href} {...channel} />)}
      </div>
    </PageShell>
  )
}
