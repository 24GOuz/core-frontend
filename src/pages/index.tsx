import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState('.');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      switch (loading) {
        case '🌕':
          setLoading('🌖');
          break;
        case '🌖':
          setLoading('🌗');
          break;
        case '🌗':
          setLoading('🌘');
          break;
        case '🌘':
          setLoading('🌑');
          break;
        case '🌑':
          setLoading('🌒');
          break;
        case '🌒':
          setLoading('🌓');
          break;
        case '🌓':
          setLoading('🌔');
          break;
        case '🌔':
          setLoading('🌕');
          break;
        default:
          setLoading('🌕');
          break;
      }
    }, 640);

    return () => clearTimeout(timeoutId);
  }, [loading]);
  
  return (
    <main className="flex items-center justify-center h-screen">
      <h2 className="mb-3 text-5xl font-semibold">
        SOON{loading}
      </h2>
    </main>
  )
}
