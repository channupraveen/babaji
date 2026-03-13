import './globals.css';

export const metadata = {
  title: 'Ravi Swamy Foundation | Serve Humanity, Nourish Souls',
  description: 'Ravi Swamy Foundation — Annadanam, spiritual guidance, and humanitarian service. Serving society with compassion and devotion.',
  keywords: 'Ravi Swamy Foundation, Annadanam, spiritual service, seva, humanitarian, food distribution, Kalaburagi, donation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
