import dynamic from 'next/dynamic'
const SvgToImg = dynamic(() => import('../components/svgToImg'), { ssr: false })
const Canvas = dynamic(() => import('../components/Canvas'), { ssr: false })

export default function Home() {
  return <Canvas></Canvas>
}
Home.getInitialProps = async (ctx) => {
  const res = await fetch('')
  const json = await res.json()
  return { stars: json.stargazers_count }
}
