import { Oval } from 'react-loader-spinner';

import { LoaderBox } from './Loader.styled';
import { Backdrop } from '../Modal/Modal.styled';

const Loader = ({ width = 50, height = 50 }) => {
  return (
    <Backdrop>
      <LoaderBox>
        <Oval
          ariaLabel="loading-indicator"
          width={width}
          height={height}
          strokeWidth={5}
          color="black"
          secondaryColor="red"
        />
      </LoaderBox>
    </Backdrop>
  );
};

export default Loader;
