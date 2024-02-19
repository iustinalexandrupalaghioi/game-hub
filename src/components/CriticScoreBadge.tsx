import { Badge } from "@chakra-ui/react"

interface Props {
    score: number;
}
const CriticScoreBadge = ({score}: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'
  return (
    <Badge fontSize='14px' paddingX='10px' borderRadius='4px' colorScheme={color}>{score}</Badge>
  )
}

export default CriticScoreBadge