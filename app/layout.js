import './globals.css';
export const metadata = {
  title: 'Nestable | Find Your Next Property, Faster',
  description: 'Nestable is a modern property platform to search, view, and list homes for sale and rent, all in one clean place.',
  openGraph: { title: 'Nestable | Find Your Next Property, Faster', description: 'Nestable is a modern property platform to search, view, and list homes for sale and rent, all in one clean place.', type: 'website' },
};
export default function RootLayout({ children }) {
  return (<html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href='https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap' rel="stylesheet" />
  </head><body>{children}</body></html>);
}
