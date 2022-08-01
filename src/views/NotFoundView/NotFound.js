import { Link } from 'react-router-dom';

import {
  NotFoundWrapper,
  NotFoundTitle,
  NotFoundSubTitle,
  NotFoundGoHome,
} from './NotFound.styled';
import NotFound from '../../image/404-not-found-removebg-preview.png';

export default function NotFoundView() {
  return (
    <NotFoundWrapper image={NotFound}>
      <NotFoundTitle>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
      </NotFoundTitle>
      <NotFoundSubTitle>
        Let's go{' '}
        <Link to="/">
          <NotFoundGoHome>home</NotFoundGoHome>
        </Link>{' '}
        and try from there.
      </NotFoundSubTitle>
    </NotFoundWrapper>
  );
}
