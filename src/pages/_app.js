import Theme from '../styles/theme'
export default function App({ Component, pageProps }) {
  return (
    <>
      <title>
        Devraj Neupane| Tech Enthusiast | Information Security Researcher
      </title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
