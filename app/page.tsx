import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Placeholder para o conteúdo da página */}
        <div style={{ height: '200vh', padding: '40px' }}>
          <h1>Conteúdo da Página Principal</h1>
          <p>Role para baixo para ver o header fixo em ação.</p>
        </div>
      </main>
    </>
  );
}