import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <div
      className="relative"
      style={{
        height: '100dvh',
        background: '#000000',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        overflow: 'hidden',
      }}
    >

      {/* ── Background effects — próprio overflow:hidden para conter flashes ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />
        <div className="bg-blob bg-blob-4" />

        {/* Camera flashes — left photographers */}
        <div className="flash" style={{ width: 220, height: 220, top: '5%',  left: '-10%', animationDuration: '4.6s', animationDelay: '0.0s', zIndex: 1 }} />
        <div className="flash" style={{ width: 160, height: 160, top: '38%', left: '-4%',  animationDuration: '3.9s', animationDelay: '1.4s', zIndex: 1 }} />
        <div className="flash" style={{ width: 260, height: 260, top: '70%', left: '-12%', animationDuration: '5.3s', animationDelay: '0.7s', zIndex: 1 }} />

        {/* Camera flashes — right photographers */}
        <div className="flash" style={{ width: 200, height: 200, top: '12%', right: '-8%',  animationDuration: '4.2s', animationDelay: '2.1s', zIndex: 1 }} />
        <div className="flash" style={{ width: 180, height: 180, top: '52%', right: '-5%',  animationDuration: '5.7s', animationDelay: '0.4s', zIndex: 1 }} />
        <div className="flash" style={{ width: 240, height: 240, top: '75%', right: '-10%', animationDuration: '3.6s', animationDelay: '1.8s', zIndex: 1 }} />

        {/* Camera flash — crowd / overhead */}
        <div className="flash" style={{ width: 320, height: 320, top: '80%', left: '30%',   animationDuration: '6.1s', animationDelay: '2.8s', zIndex: 1 }} />

        {/* Brand watermark NAMING.svg — 45° */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/naming.svg"
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute"
          style={{
            width: '560%',
            maxWidth: '3200px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            opacity: 0.028,
            filter: 'blur(10px)',
            zIndex: 1,
          }}
        />
      </div>

      {/* ── Film grain ── */}
      <div aria-hidden className="grain-overlay" style={{ zIndex: 2 }} />

{/* ── Logo — grid row 1, z-index 9999, bloom livre de qualquer overflow ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: 'clamp(0.5rem, 3vh, 3.5rem) 1.5rem 0.5rem',
          pointerEvents: 'none',
        }}
      >
        <div className="logo-wrapper anim-fade-in delay-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="MELFIORE"
            className="logo-glow"
            style={{
              width: 'min(24rem, calc(100vw - 3rem))',
              height: 'auto',
              display: 'block',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>
      </div>

      {/* ── Main content — grid row 2 ── */}
      <main
        className="relative flex flex-col items-center justify-center px-6 text-center"
        style={{ zIndex: 3 }}
      >
        <h1
          className="headline-glow font-black anim-fade-up delay-200"
          style={{
            fontSize: 'clamp(1rem, 2.34vw, 1.3rem)',
            maxWidth: '32rem',
            marginBottom: '0.5rem',
            lineHeight: 1.75,
            letterSpacing: '0.08em',
          }}
        >
          junte-se a milhares de pessoas<br />
          que aguardam saber<br />
          quem é ela.
        </h1>
        <p
          className="font-medium anim-fade-up delay-350 subheadline-glow"
          style={{
            color: '#7A1A1A',
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            lineHeight: 1.65,
            letterSpacing: '0.035em',
            opacity: 0.68,
            maxWidth: '26rem',
            marginBottom: '0.75rem',
          }}
        >
          obtenha acesso antecipado<br />
          &amp; atualizações exclusivas
        </p>
        <div className="w-full anim-fade-up delay-500" style={{ maxWidth: '22rem' }}>
          <WaitlistForm />
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        className="relative flex items-center justify-center anim-fade-in delay-650"
        style={{ zIndex: 3, background: 'transparent', padding: '8px 24px calc(12px + env(safe-area-inset-bottom, 0px))' }}
      >
        <p
          style={{
            color: '#7A4848',
            fontSize: '10px',
            fontWeight: 200,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            textAlign: 'center',
            lineHeight: 1.65,
            opacity: 0.5,
          }}
        >
          MELFIORE © 2026 .TBF. inc. All rights reserved<br />
          .THE FIORE DAILY. intimacy wellness club .TBF.ORIGINAL LABEL<br />
          RUA PAMPLONA, 145, JARDIM PAULISTA, SÃO PAULO, SP, 01.405-900
        </p>
      </footer>

    </div>
  )
}
