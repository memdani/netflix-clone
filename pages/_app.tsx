import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  
    <div>
      <div>
      <RecoilRoot>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </RecoilRoot>
      </div>
      
    </div>
    //HOC---- higher order component ---- wraps the entire application inside a component
    
    
  )
}

export default MyApp
