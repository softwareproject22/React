import { Route, Routes } from 'react-router-dom';
import StatsbarLayout from '../../../components/Layout/StatsbarLayout';
import NumofIssue from './NumofIssue/NumofIssue';
import CountStatus from './CountStatus/CountStatus';
import CountTags from './CountTags/CountTags';

function Stats() {
  return (
    <StatsbarLayout>
        <Routes>
            <Route path='/' element={<NumofIssue/>}/>
            <Route path='/status' element={<CountStatus/>}/>
            <Route path='/tag' element={<CountTags/>}/>
        </Routes>
    </StatsbarLayout>
  );
}

export default Stats