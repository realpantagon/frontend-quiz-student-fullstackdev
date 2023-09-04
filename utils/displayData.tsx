import { FC } from "react";
import { Donation } from "./types";
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactQueryProviders from "./reactQueryProvider";

interface Props {
  donations: Donation | null;
}

const DonationList: FC<Props> = ({ donations }) => {
  if (!donations)
    return (
      <div className="border p-2 rounded text-sm text-red-300">No data</div>
    );

  return (
    <div className="border p-2 rounded text-sm text-green-600">
      {donations.firstName}:{donations.lastName}:{donations.amount}
    </div>
  );
};

export default DonationList;