
import type { SiteMeta } from "../types";

const meta: SiteMeta = {
  siteTitle: "Collins Portfolio",
  ownerName: "Collins",
  year: new Date().getFullYear(),
};

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t-4 border-[#00ff88] py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[#666] font-mono text-xs uppercase tracking-wider text-center md:text-left">
          © {meta.year} {meta.ownerName}. All rights reserved.
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a
            href="https://github.com/collocoder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] font-mono text-xs uppercase tracking-wider font-semibold transition-colors hover:text-[#00ff88] relative group"
          >
            GitHub
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#00ff88] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="https://linkedin.com/in/collinsmaina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] font-mono text-xs uppercase tracking-wider font-semibold transition-colors hover:text-[#00ff88] relative group"
          >
            LinkedIn
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#00ff88] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="mailto:itscollinsmaina@gmail.com"
            className="text-[#666] font-mono text-xs uppercase tracking-wider font-semibold transition-colors hover:text-[#00ff88] relative group"
          >
            Email
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#00ff88] transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </footer>
  );
}