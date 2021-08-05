import { Path } from 'react-konva'

const SvgToImg = (props) => {
  const svgActual = props.image
  let i = 0
  return (
    <div>
      {svgActual.children.map((path) => (
        <Path
          key={i++}
          stroke={path.attributes.stroke}
          opacity={parseFloat(path.attributes.opacity)}
          fill={path.attributes.fill}
          data={path.attributes.d}
        />
      ))}
    </div>
  )
}

export default SvgToImg
