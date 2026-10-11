import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = "¡Más de 360 Actividades de Matemáticas en el Mundo de Bloques!";
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-slate-900">
      <iframe
        src="/vendas/index.html?v=2"
        title="¡Más de 360 Actividades de Matemáticas en el Mundo de Bloques!"
        className="fixed inset-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
