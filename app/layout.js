import './globals.css';

export const metadata = {
  title: 'Barbearia Monarch',
  description: 'Site conceito premium para barbearia com foco em agendamento pelo WhatsApp.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
