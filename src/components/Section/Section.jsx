import { Container } from 'components/Container';
import PropTypes from 'prop-types';
import { SectionEl } from './section.styled';

export default function Section({ children, id }) {
  return (
    <SectionEl id={id}>
      <Container>{children}</Container>
    </SectionEl>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};
