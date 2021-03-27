import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core';

const HomeLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const HomeLayoutWrapper = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const HomeLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const HomeLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const HomeLayout = () => (
  <HomeLayoutRoot>
    <HomeLayoutWrapper>
      <HomeLayoutContainer>
        <HomeLayoutContent>
          <Outlet />
        </HomeLayoutContent>
      </HomeLayoutContainer>
    </HomeLayoutWrapper>
  </HomeLayoutRoot>
);

export default HomeLayout;