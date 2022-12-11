import BackdropWrapper from '@components/common/backdrop-wrapper';
import { FC } from 'react';
import StyledSearchModal from './styles';

type SearchModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};
const SearchModal: FC<SearchModalProps> = ({ handleClose, isOpen }) => {
  return (
    <BackdropWrapper closeModal={handleClose}>
      <StyledSearchModal onClick={handleClose}>
        <h2>Search For Your City</h2>
      </StyledSearchModal>
    </BackdropWrapper>
  );
};

export default SearchModal;
