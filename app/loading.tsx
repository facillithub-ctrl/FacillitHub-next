// Caminho: app/loading.tsx
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Loading() {
  // Você pode adicionar um esqueleto de layout aqui para uma melhor UX
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
        <LoadingSpinner />
    </div>
  )
}