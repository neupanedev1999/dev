import Theme from '../styles/theme'
export default function App({ Component, pageProps }) {
  return (
    <>
    <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8718363685404871"
     crossorigin="anonymous"></script>
      <title>
        Devraj Neupane| Tech Enthusiast | Information Security Researcher
      </title>
    </head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
