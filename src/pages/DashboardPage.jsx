// src/pages/DashboardPage.jsx
import StatsCards from '../components/StatsCards'
import ProvidersList from '../components/ProvidersList'
import OnboardingRequests from '../components/OnboardingRequests';
import EarningsChart from '../components/EarningsChart';
const DashboardPage = () => {
  return (
    <div className='w-full '>
      <StatsCards />
      <div className='flex flex-col'>
        <EarningsChart />
      <div className='flex items-center flex-wrap md:flex-nowrap gap-4'>
        <ProvidersList />
        <OnboardingRequests />
        
      </div>
      </div>
    </div>
  );
};

export default DashboardPage;
