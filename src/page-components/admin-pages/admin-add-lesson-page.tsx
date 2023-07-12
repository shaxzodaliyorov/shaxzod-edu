import {
	Button,
	Card,
	CardBody,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import { RiDragDropLine } from 'react-icons/ri';
import { SectionTitle } from '../../components';
const AdminAddLessonPage = () => {
	return (
		<>
			<SectionTitle title='Mern Stack' subtitle='' />
			<Card>
				<CardBody>
					<TableContainer>
						<Table variant='simple' size={'sm'}>
							<Thead>
								<Tr>
									<Th>Tr</Th>
									<Th>№</Th>
									<Th>Lesson</Th>
									<Th isNumeric></Th>
									<Th isNumeric></Th>
								</Tr>
							</Thead>
							<Tbody>
								{[1, 2, 3, 4].map((item, index) => (
									<Tr key={index}>
										<Td>
											<RiDragDropLine />
										</Td>
										<Td>{index + 1}</Td>
										<Td>#1 dars</Td>
										<Td></Td>
										<Td isNumeric>
											<Button colorScheme={'blue'} variant={'outline'}>
												<FaPen />
											</Button>
										</Td>
										<Td isNumeric>
											<Button colorScheme={'red'} variant={'outline'}>
												<AiFillDelete />
											</Button>
										</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				</CardBody>
			</Card>
		</>
	);
};

export default AdminAddLessonPage;
