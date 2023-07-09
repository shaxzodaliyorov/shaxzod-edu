import { Box, Heading,Text } from "@chakra-ui/react"
import { SectionTitleProps } from "./section-title.props"


const SectionTitle = ({ title, subtitle, ...props }: SectionTitleProps) => {
   return (
      <Box {...props} my={5} >
         <Heading color={"green.500"} >{title}</Heading>
         <Text fontSize={"lg"} >{subtitle}</Text>
      </Box>
   )
}

export default SectionTitle