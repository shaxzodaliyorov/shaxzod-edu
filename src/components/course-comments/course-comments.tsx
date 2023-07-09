import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { BiMessageDetail } from "react-icons/bi";
import { useAppSelector } from "../../hooks/redux";
import CourseCommentItem from "../course-comment-item/course-comment-item";
import SectionTitle from "../section-title/section-title";
import CommentsModal from "./comments-modal";
import { CourseCommentItemProps } from "./course-comments.props";
const CourseComments = ({
  comments,
  getComments,
  setReadmore,
  readmore,
  isloading,
  setViewcomments,
}: CourseCommentItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAppSelector((state) => state.auth);
  const ReadMore = () => {
    setReadmore(readmore + 2);
    getComments();
    setViewcomments(true);
  };
  return (
    <Card w={"full"} mt={4}>
      <SectionTitle title="Sharhlar" subtitle="" ml={2} />
      <CardBody>
        {comments.map((item, index) => (
          <Box key={index} as="span">
            <CourseCommentItem comment={item} isloading={isloading} />
          </Box>
        ))}
        <HStack mt={4} justify="space-between">
          <Button onClick={ReadMore}>
            {isloading ? <Spinner /> : "Ko'proq"}
          </Button>
          <Button
            isDisabled={user ? false : true}
            onClick={onOpen}
            leftIcon={<BiMessageDetail />}
          >
            Izoh
          </Button>
        </HStack>
        <CommentsModal
          getComments={getComments}
          isOpen={isOpen}
          onClose={onClose}
        />
      </CardBody>
    </Card>
  );
};

export default CourseComments;
