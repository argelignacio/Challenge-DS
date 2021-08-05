import { Path } from 'react-konva'
const { parseSync } = require('svgson')

const SvgToImg = (image) => {
  const svg = parseSync(image.image)
  let i = 0
  return (
    <svg>
      {svg.children.map((path) => (
        <Path
          key={i++}
          stroke={path.attributes.stroke}
          opacity={parseFloat(path.attributes.opacity)}
          fill={path.attributes.fill}
          data={path.attributes.d}
        />
      ))}
    </svg>
  )
}

export default SvgToImg
