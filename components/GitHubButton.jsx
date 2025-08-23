import { Github } from "lucide-react";

export default function GitHubButton() {
  return (
    <a
      href="https://github.com/daireks-dev"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition transform hover:scale-110 hover:rotate-6"
    >
      <Github className="h-7 w-7" />
    </a>
  );
}
