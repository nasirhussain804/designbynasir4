import type {
  LegalSection,
  NavLink,
  ProcessStep,
  Project,
  Service,
  ToolGroup,
} from '@/types'

export const site = {
  name: 'Design by Nasir',
  designer: 'Nasir Hussain',
  monogram: 'DBN',
  eyebrow: 'Graphic Designer - Karachi, PK',
  positioning:
    'Brand identities, cover art and campaigns built to be heard, not just seen.',
  availability: 'Booking new projects',
  email: 'hello@designbynasir.com',
  location: 'Karachi, Pakistan',
  replyTime: 'Replies within 48 hours',
  url: 'https://designbynasir.vercel.app',
} as const

export const navLinks: readonly NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export const projects: readonly Project[] = [
  {
    id: 'northline-identity',
    index: '01',
    title: 'Northline - Brand Identity Suite',
    category: 'Brand Identity',
    year: '2026',
    image: '/images/brand-identity.jpg',
    alt: 'Flat-lay of a printed brand identity suite - business cards, letterhead and a logo sheet in charcoal and orange',
    wide: true,
  },
  {
    id: 'midnight-frequencies',
    index: '02',
    title: 'Midnight Frequencies - Cover Art',
    category: 'Album Art',
    year: '2025',
    image: '/images/album-cover.jpg',
    alt: 'A vinyl record sleeve and booklet with abstract geometric cover artwork in ink black and orange',
  },
  {
    id: 'karachi-sound-week',
    index: '03',
    title: 'Karachi Sound Week - Poster Series',
    category: 'Poster Design',
    year: '2025',
    image: '/images/poster-series.jpg',
    alt: 'Three large printed event posters with bold abstract typographic shapes leaning against a dark studio wall',
  },
  {
    id: 'lumen-social-kit',
    index: '04',
    title: 'Lumen - Social Media Kit',
    category: 'Social Design',
    year: '2026',
    image: '/images/social-kit.jpg',
    alt: 'Overhead photograph of several phones displaying dark social media post designs on an ink-black surface',
  },
  {
    id: 'atlas-identity',
    index: '05',
    title: 'Atlas - Logo Exploration Sheet',
    category: 'Logo Design',
    year: '2025',
    image: '/images/logo-exploration.jpg',
    alt: 'A large sheet of paper covered in dozens of rough pencil and ink logo mark sketches on a dark studio desk',
  },
  {
    id: 'pulse-title-sequence',
    index: '06',
    title: 'Pulse - Title Sequence Stills',
    category: 'Motion Design',
    year: '2026',
    image: '/images/motion-still.jpg',
    alt: 'A still frame from a dark motion-design animation with abstract shapes and orange light streaks',
  },
]

export const servicesIntro = {
  heading: 'What I make',
  subheading:
    'Five things, done properly. Every project starts with the question underneath the brief - what should this make someone feel.',
}

export const services: readonly Service[] = [
  {
    index: '01',
    title: 'Brand Identity Systems',
    range: '$800-$3,500',
    summary:
      'The whole visual language of a business - mark, colour, type, layout and the rules that keep it consistent.',
    deliverables: [
      'Primary logo, secondary marks and a favicon set',
      'Colour system with accessible contrast pairs',
      'Type scale and pairing guidance',
      'Stationery: business cards, letterhead, email signature',
      'A compact brand guide the team can actually follow',
    ],
    timeline: '3-5 weeks',
  },
  {
    index: '02',
    title: 'Album & Cover Art',
    range: '$250-$900',
    summary:
      'Cover artwork that holds up at 3000px on a store page and at 64px in a queue. Mood first, then craft.',
    deliverables: [
      'Front and back cover artwork at print resolution',
      'Streaming-ready square masters',
      'Social and canvas crops for release rollout',
      'Editable source files with layers named properly',
    ],
    timeline: '1-2 weeks',
  },
  {
    index: '03',
    title: 'Social Media Design Kits',
    range: '$400-$1,200',
    summary:
      'A template system so the feed looks deliberate every week, not just in launch week.',
    deliverables: [
      'Post, carousel and story templates',
      'Editable files for a non-designer to reuse',
      'Caption and headline layout rules',
      'Ad creative variants tested at three sizes',
    ],
    timeline: '2-3 weeks',
  },
  {
    index: '04',
    title: 'Poster & Print Design',
    range: '$200-$750',
    summary:
      'Loud, physical, readable across a room. Built to the printer spec so nothing surprises on press.',
    deliverables: [
      'Event, campaign or retail posters',
      'Flyers, menus and large-format artwork',
      'Print-ready PDFs with bleed and crop marks',
      'Proofing against the printer requirements',
    ],
    timeline: '1-2 weeks',
  },
  {
    index: '05',
    title: 'Motion & Animated Visuals',
    range: '$350-$1,500',
    summary:
      'Short, sharp animation - a logo sting, a title sequence, an animated post - where timing does the work.',
    deliverables: [
      'Animated logo stings and transitions',
      'Title sequence frames and animated cuts',
      'Animated social posts and story assets',
      'Render masters sized for each platform',
    ],
    timeline: '2-4 weeks',
  },
]

export const capabilities: readonly string[] = [
  'Brand Identity',
  'Cover Art',
  'Posters',
  'Social Kits',
  'Motion',
  'Art Direction',
]

export const aboutPreview = {
  heading: 'Design that earns its noise',
  body: 'Independent, Karachi-based, working with clients worldwide. No account managers, no handoffs - you talk to the person doing the work.',
  caption: 'Nasir Hussain - Studio, Karachi',
  image: '/images/about-portrait.jpg',
  imageAlt:
    'Nasir Hussain working late at a desk in a dark studio, lit by a warm orange lamp',
}

export const aboutIntro =
  'I am Nasir Hussain, a graphic designer working out of Karachi. I build visual identities and campaign work for musicians, small brands and people with something to say - the kind of design that gets noticed in a crowded feed and still holds up when you look closely.'

export const aboutStory: readonly string[] = [
  'I started with posters. Cheap paper, one colour, taped to a wall on a street where nobody was looking for art. That constraint taught me the thing I still design by: if it does not read from across the room, the detail does not matter.',
  'Today the work is broader - identity systems, record sleeves, social kits, motion - but the standard has not moved. Every piece has to survive being glanced at, because that is how almost everyone will meet it.',
  'I work directly with the people I design for. You will not be handed to an account manager, and you will not get a deck explaining a decision I could have just made. I ask a lot of questions up front, show work early, and tell you honestly when something is not working.',
]

export const processSteps: readonly ProcessStep[] = [
  {
    index: '01',
    title: 'Conversation',
    description:
      'A short call or a long email. I want the audience, the deadline, the budget and what has already been tried and failed.',
  },
  {
    index: '02',
    title: 'Direction',
    description:
      'Two or three distinct visual directions, deliberately different from each other. You pick one - or we combine the strongest parts.',
  },
  {
    index: '03',
    title: 'Build',
    description:
      'The chosen direction is developed properly: type, colour, layout, variants, and the edge cases that break a system.',
  },
  {
    index: '04',
    title: 'Handover',
    description:
      'Final files, organised and named, plus a short guide so the work stays consistent after I am off the project.',
  },
]

export const tools: readonly ToolGroup[] = [
  { label: 'Design', items: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'] },
  { label: 'Motion', items: ['After Effects', 'Premiere Pro'] },
  { label: 'Craft', items: ['Print production', 'Typography', 'Colour management'] },
]

export const contact = {
  heading: 'Tell me about the project',
  subheading:
    'The more context you give me - audience, deadline, budget range, what you have tried - the faster I can tell you whether I am the right fit.',
  envelopeLabel: 'Email',
  locationLabel: 'Studio',
  hoursLabel: 'Working hours',
  hours: 'Mon-Sat, 10:00-19:00 PKT',
}

export const stats = [
  { value: '9', label: 'Years designing' },
  { value: '120+', label: 'Projects shipped' },
  { value: '14', label: 'Countries worked with' },
  { value: '48h', label: 'Typical reply time' },
] as const

export const termsIntro =
  'These terms cover how Design by Nasir takes on and delivers design work. They apply to every project unless we agree something different in writing.'

export const termsUpdated = '13 September 2026'

export const termsSections: readonly LegalSection[] = [
  {
    heading: '1. Agreement to these terms',
    paragraphs: [
      'By commissioning work from Design by Nasir, or by using this website, you agree to these terms. If you are commissioning on behalf of a company, you confirm you have the authority to bind that company.',
      'Where a written project proposal conflicts with these terms, the proposal wins for that project.',
    ],
  },
  {
    heading: '2. Services and scope',
    paragraphs: [
      'Services offered include brand identity systems, album and cover art, social media design kits, poster and print design, and motion and animated visuals.',
      'Every project begins with a written scope setting out deliverables, the number of revision rounds, the timeline and the fee. Work outside that scope is a separate piece of work and will be quoted before it starts.',
    ],
  },
  {
    heading: '3. Fees and payment',
    paragraphs: [
      'Fees are quoted in US dollars unless agreed otherwise. Unless the proposal says otherwise, payment is split in two: 50% to book the project and begin work, and 50% on delivery.',
      'Work does not begin until the deposit is received. Final files are released once the balance is settled.',
      'Quotes are valid for 30 days. Bank charges and transfer fees are the client responsibility unless we agree otherwise.',
    ],
  },
  {
    heading: '4. Revisions and approvals',
    paragraphs: [
      'Each project includes a stated number of revision rounds, listed in the proposal. A revision round is one consolidated set of feedback on the current work.',
      'Additional rounds, or feedback that changes the agreed direction rather than refining it, are billed at an hourly rate agreed before that work begins.',
      'Silence is not approval. A project moves forward only on your written sign-off.',
    ],
  },
  {
    heading: '5. Intellectual property and usage rights',
    paragraphs: [
      'On receipt of full payment, you receive ownership of the final delivered design work, along with the usage rights listed in the proposal.',
      'Design by Nasir retains ownership of all concepts, drafts and working files that were not delivered, and of any reusable components, templates or methods used to produce the work.',
      'Unless the proposal grants exclusivity, I may reuse general techniques, layouts and knowledge gained on your project elsewhere.',
    ],
    bullets: [
      'Ownership transfers on final payment, not on delivery of drafts.',
      'Fonts and stock assets are licensed to you under their own terms and are never transferred as property.',
      'Exclusivity, if required, must be agreed in writing and is priced separately.',
    ],
  },
  {
    heading: '6. Client responsibilities',
    paragraphs: [
      'You agree to provide the content, assets, brand information and approvals needed to complete the project, and to respond to requests for feedback within a reasonable time.',
      'You confirm that any material you supply - text, images, logos, audio - is either owned by you or licensed for the use you are asking me to make of it. You are responsible for any claim arising from supplied material.',
      'Timelines assume prompt feedback. Delays in feedback move the delivery date, and I will tell you when a delay puts the schedule at risk.',
    ],
  },
  {
    heading: '7. Portfolio rights',
    paragraphs: [
      'Unless we agree otherwise in writing, I may show completed work in my portfolio, on this website and on social channels, and describe my role in it.',
      'If a project is confidential, tell me before work begins and I will keep it out of the portfolio.',
    ],
  },
  {
    heading: '8. Cancellation and refunds',
    paragraphs: [
      'You may cancel a project in writing at any time. Deposits are non-refundable, because they reserve studio time that cannot be resold.',
      'If a project is cancelled partway through, work completed up to that point is billed at the rates in the proposal and any balance is invoiced immediately.',
      'If I have to cancel a project for my own reasons, any work not yet delivered is refunded on a pro-rata basis.',
    ],
  },
  {
    heading: '9. Third-party assets',
    paragraphs: [
      'Fonts, stock photography, illustration and audio used in a project remain subject to their own licences. Where a licence is required for your use, I will tell you before it is used and you are responsible for holding that licence.',
      'If you need an asset excluded for licensing reasons, tell me and I will work around it.',
    ],
  },
  {
    heading: '10. Limitation of liability',
    paragraphs: [
      'Design work is delivered as a creative service. I do not warrant any particular commercial outcome, sales figure or audience response.',
      'My total liability for any project is limited to the fee paid for that project. I am not liable for indirect or consequential losses, including lost profit or lost opportunity.',
      'I am not responsible for errors introduced by third parties after handover, or for the output of printers, developers or platforms acting on my files without checking them first.',
    ],
  },
  {
    heading: '11. Confidentiality',
    paragraphs: [
      'I keep unreleased material, unreleased music, business plans and any information you mark confidential private, and I do not share it outside the project without your permission.',
      'This does not apply to information that is already public, or that I am legally required to disclose.',
    ],
  },
  {
    heading: '12. Governing law',
    paragraphs: [
      'These terms are governed by the laws of Pakistan. Any dispute will first be addressed through good-faith discussion between us before either party takes further steps.',
    ],
  },
  {
    heading: '13. Changes to these terms',
    paragraphs: [
      'These terms may be updated from time to time. The version published on this page at the time your project begins is the version that applies to it.',
    ],
  },
  {
    heading: '14. Contact',
    paragraphs: [
      'Questions about these terms, payments or a project in progress can be sent to hello@designbynasir.com.',
    ],
  },
]
