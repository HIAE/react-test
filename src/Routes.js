import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense */
import PageLoader from './components/Common/PageLoader';
import Base from './components/Common/Layout/Base';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const Home = lazy(() => import('./components/Home'));
const Details = lazy(() => import('./components/Details'));

const Routes = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 500, exit: 500 };
  const animationName = 'rag-fadeIn';

  return (
   <Base>
      <TransitionGroup>
        <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
          <div>
            <Suspense fallback={<PageLoader />}>
              <Switch location={location}>
                <Route path="/home" component={waitFor(Home)} />
                <Route path="/details" component={waitFor(Details)} />
                <Redirect to="/home" />
              </Switch>
            </Suspense>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Base>
  );
};

export default withRouter(Routes);
