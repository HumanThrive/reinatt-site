// The six selected works on the home page. Each entry feeds one row of the list and one case sheet.
// The key names the cover symbol (#cv-<key>), the case sheet (#tpl-<key>) and the deep link (/#case-<key>).

export interface CasePart {
  label: string;
  text: string;
}

export interface CaseLink {
  href: string;
  text: string;
  external: boolean;
}

export interface Work {
  key: string;
  title: string;
  /** The one line under the title in the list. */
  summary: string;
  year: string;
  /** The small capitals line at the top of the case sheet. */
  meta: string;
  parts: CasePart[];
  links: CaseLink[];
  note?: string;
}

export const works: Work[] = [
  {
    key: "lucy",
    title: "Lucy",
    summary: "A team of AI agents that plan, write and review production code. It runs my client work.",
    year: "2026",
    meta: "2026 · My own system · Bangkok",
    parts: [
      { label: "The job", text: "Run my client work with AI agents, without losing control of it." },
      { label: "What I built", text: "A team of AI agents on Claude Code that plan, write and review production code in parallel, each in its own role." },
      { label: "What happened", text: "I use it to deliver client work every day." },
      { label: "Built with", text: "Claude Code · Git worktrees · Python · Markdown" },
    ],
    links: [
      { href: "/ai/", text: "How I govern AI agents →", external: false },
    ],
  },
  {
    key: "vision",
    title: "Factory vision",
    summary: "An on-device app that reads a machine's display and checks each reading, with a model I trained.",
    year: "2025",
    meta: "2025 · Client project",
    parts: [
      { label: "The job", text: "Read a machine's results off its screen, and check every part against the limits for that product." },
      { label: "What I built", text: "An on-device camera app. A model I trained on images I labelled finds each reading, OCR reads it, and the app checks it against the product's limits." },
      { label: "What it shows", text: "AI built into the software itself, rather than in a chat window." },
      { label: "Built with", text: "Python · YOLOv8 · EasyOCR · PyTorch · OpenCV · Label Studio · Raspberry Pi 5" },
    ],
    links: [],
    note: "The client stays confidential.",
  },
  {
    key: "operations",
    title: "Operations platform",
    summary: "The back office, customer app and API a business runs on every day.",
    year: "2025–",
    meta: "2025 – now · Independent · Bangkok",
    parts: [
      { label: "The job", text: "Be a business's software partner, from the first conversation to daily use." },
      { label: "What I built", text: "The back office the staff run the business from. A customer app that opens inside LINE. The API behind both." },
      { label: "How I build it", text: "With AI. A team of AI agents I designed writes and reviews the code. I also help the team run AI on their own machines." },
      { label: "What happened", text: "The team runs the business on it every day. The daily data reconciliation the operators did by hand went from hours to a minute. I've designed and built it since January 2025." },
      { label: "Built with", text: "Laravel · PHP · PostgreSQL · Nuxt · Vue · Tailwind · LINE LIFF · Docker" },
    ],
    links: [],
    note: "The client stays confidential. I'm happy to walk through the work on a call.",
  },
  {
    key: "omise",
    title: "Omise payments",
    summary: "Payment plugins for WooCommerce, Magento and OpenCart.",
    year: "2015–20",
    meta: "2015 – 2020 · Omise · Bangkok",
    parts: [
      { label: "The job", text: "Get a payment gateway into the online shops merchants already use." },
      { label: "What I built", text: "The official plugins for WooCommerce, Magento and OpenCart, and the PHP library behind them." },
      { label: "What happened", text: "Over 2,000 stores run the WooCommerce plugin today. I'm its top contributor of all time." },
      { label: "Built with", text: "PHP · WordPress · WooCommerce · Magento · OpenCart" },
    ],
    links: [
      { href: "https://github.com/omise/omise-woocommerce/graphs/contributors", text: "Contributors on GitHub ↗", external: true },
      { href: "https://wordpress.org/plugins/omise/", text: "The plugin on WordPress.org ↗", external: true },
    ],
  },
  {
    key: "fan",
    title: "Fan commerce, Japan",
    summary: "Merch, memberships and gacha for music artists' fan clubs.",
    year: "2021–24",
    meta: "2021 – 2024 · Hivelocity · Tokyo, remote",
    parts: [
      { label: "The job", text: "Help music artists sell to their fan clubs." },
      { label: "What I built", text: "Merch stores, memberships and gacha on EC-CUBE, and the sites for character pop-up cafés." },
      { label: "What happened", text: "Close to three years with a Tokyo team, fully remote. I owned the sales reports the business ran on." },
      { label: "Built with", text: "EC-CUBE · PHP · Laravel · WordPress · WooCommerce" },
    ],
    links: [],
  },
  {
    key: "games",
    title: "Learning games",
    summary: "Live multiplayer games for a kids' camp, built at 21.",
    year: "2013",
    meta: "2013 – 2014 · Cubic Creative · Bangkok",
    parts: [
      { label: "The job", text: "Build the games for a camp where children learn by playing." },
      { label: "What I built", text: "Group Minesweeper on iPads, with every move synced live. And a Civilization-style game played across the whole camp." },
      { label: "What happened", text: "I was 21 and had never built either. I learned both by building them." },
      { label: "Built with", text: "Node.js · Real-time sync" },
    ],
    links: [],
  },
];
