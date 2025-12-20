interface LoadingScreenProps {
  message?: string;
  className?: string;
}

export default function LoadingScreen({
  message = "Chargement...",
  className = ""
}: LoadingScreenProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 ${className}`}>
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#095797] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}

