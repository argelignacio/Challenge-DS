import { Group, Path } from 'react-konva'

const SvgToImg = (props) => {
  const svgActual = props.image
  let i = 0
  return (
    <Group
      scaleX={0.5 / props.scale}
      scaleY={0.5 / props.scale}
      x={props.pos * 100}
      y={40}
      draggable={true}
    >
      {svgActual.children.map((path) => (
        <Path
          key={i++}
          data={path.attributes.d}
          data-ds-id={path.attributes['data-ds-id']}
          id={path.attributes.id}
          fill={path.attributes.fill}
          stroke={path.attributes.stroke}
          opacity={parseInt(path.attributes.opacity)}
          strokeWidth={path.attributes['stroke-width']}
          lineJoin={path.attributes['stroke-linejoin']}
          lineCap={path.attributes['stroke-linecap']}
          miterLimit={parseInt(path.attributes['stroke-miterlimit'])}
        />
      ))}
    </Group>
  )
}

export default SvgToImg
