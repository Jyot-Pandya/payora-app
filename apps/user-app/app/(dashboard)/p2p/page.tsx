import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'P2P Transfer | Payora',
	description: 'Fast and safe P2P transfers with Payora digital wallet application',
};

import { SendCard } from '../../../components/SendCard';

export default function () {
	return (
		<div className="w-full">
			<div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
				<span className="text-blue-600">Payora </span>P2P Transfer
			</div>
			<SendCard />
		</div>
	);
}
