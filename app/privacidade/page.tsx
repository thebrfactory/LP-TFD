import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade — MELFIORE',
  description: 'Como a MELFIORE coleta, usa e protege seus dados pessoais.',
  robots: { index: false, follow: false },
}

export default function Privacidade() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        background: '#000000',
        color: '#E8E8E8',
        fontFamily: 'var(--font-brother, sans-serif)',
        padding: 'clamp(2rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '720px',
        margin: '0 auto',
        lineHeight: 1.75,
      }}
    >
      <Link
        href="/"
        style={{
          display: 'inline-block',
          marginBottom: '2.5rem',
          color: '#FFF004',
          fontSize: '0.85rem',
          letterSpacing: '0.08em',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}
      >
        ← voltar
      </Link>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="MELFIORE"
        style={{
          width: 'min(16rem, 60vw)',
          height: 'auto',
          display: 'block',
          marginBottom: '0.5rem',
        }}
      />
      <h2
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          fontWeight: 300,
          color: '#CC2020',
          letterSpacing: '0.05em',
          marginBottom: '2.5rem',
        }}
      >
        Política de Privacidade
      </h2>

      <p style={{ color: '#7A4848', fontSize: '0.85rem', marginBottom: '2.5rem' }}>
        Última atualização: maio de 2026
      </p>

      {[
        {
          title: '1. Quem somos',
          content: 'A MELFIORE é operada pela .TBF. inc., empresa responsável pelo tratamento dos seus dados pessoais nesta plataforma. Endereço: Rua Pamplona, 145, Jardim Paulista, São Paulo, SP, 01.405-900. Contato: contato@melfiore.com',
        },
        {
          title: '2. Quais dados coletamos',
          content: 'Coletamos apenas os dados que você nos fornece voluntariamente ao se cadastrar na lista de espera: (a) Nome; (b) Endereço de e-mail. Não coletamos dados sensíveis, documentos de identidade, dados de pagamento ou informações de localização.',
        },
        {
          title: '3. Para que usamos seus dados',
          content: 'Seus dados são utilizados exclusivamente para: (a) Mantê-lo informado sobre o lançamento da MELFIORE; (b) Enviar comunicações de pré-lançamento, novidades e acesso antecipado; (c) Cumprir obrigações legais aplicáveis.',
        },
        {
          title: '4. Base legal (LGPD)',
          content: 'O tratamento dos seus dados é fundamentado no seu consentimento livre, informado e inequívoco, nos termos do art. 7º, inciso I da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD). Você pode revogar seu consentimento a qualquer momento.',
        },
        {
          title: '5. Compartilhamento de dados',
          content: 'Seus dados são processados pela Brevo (Sendinblue SAS, França), nossa plataforma de e-mail marketing, atuando como operadora de dados sob contrato de processamento que garante conformidade com a LGPD e o GDPR europeu. Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.',
        },
        {
          title: '6. Por quanto tempo guardamos seus dados',
          content: 'Seus dados são mantidos enquanto você permanecer na lista de espera ou até que você solicite a exclusão. Após o lançamento da MELFIORE, você poderá optar por continuar recebendo comunicações ou ter seus dados removidos.',
        },
        {
          title: '7. Seus direitos',
          content: 'Como titular de dados, você tem direito a: confirmar a existência do tratamento; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a eliminação dos seus dados; revogar o consentimento; obter informações sobre o compartilhamento. Para exercer qualquer direito, envie um e-mail para contato@melfiore.com.',
        },
        {
          title: '8. Segurança',
          content: 'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida. As comunicações são transmitidas com criptografia (HTTPS/TLS).',
        },
        {
          title: '9. Cookies',
          content: 'Esta página não utiliza cookies de rastreamento ou analytics. Cookies técnicos essenciais podem ser utilizados para o funcionamento básico do formulário.',
        },
        {
          title: '10. Contato e encarregado de dados (DPO)',
          content: 'Para dúvidas, solicitações ou reclamações sobre o tratamento dos seus dados, entre em contato: contato@melfiore.com. Você também pode registrar reclamações perante a Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd.',
        },
      ].map(({ title, content }) => (
        <section key={title} style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#CC2020',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem',
            }}
          >
            {title}
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#A0A0A0' }}>{content}</p>
        </section>
      ))}

      <div style={{ borderTop: '1px solid #1A1A1A', marginTop: '3rem', paddingTop: '1.5rem' }}>
        <p style={{ fontSize: '0.8rem', color: '#555555', textAlign: 'center', letterSpacing: '0.05em' }}>
          MELFIORE © 2026 .TBF. inc. — Todos os direitos reservados
        </p>
      </div>
    </div>
  )
}
