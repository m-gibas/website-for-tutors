import './Tile.css'

export interface TileProps {
    text: string
}

const Tile = ({ text }: TileProps) => {
  return (
    <div className="tile">
        <p>{text}</p>
    </div>
  )
}

export default Tile