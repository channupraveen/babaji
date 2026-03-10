import './globals.css';

export const metadata = {
  title: 'Shree Babaji | Divine Blessings & Spiritual Wisdom',
  description: 'Experience inner peace, spiritual wisdom, and divine guidance through the teachings and presence of Shree Babaji.',
  keywords: 'Shree Babaji, spiritual, meditation, ashram, yoga, divine blessings, self-realization',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
