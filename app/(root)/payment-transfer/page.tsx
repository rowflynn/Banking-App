import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

export const runtime = 'edge';

const Transfer = async () => {
    const loggedIn = await getLoggedInUser();
  
    if (!loggedIn || !loggedIn.$id) {
      return <p>Please log in to view your accounts.</p>;
    }
  
    const accounts = await getAccounts({ 
      userId: loggedIn.$id
    });
  
  if(!accounts) return;
  
  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  )
}

export default Transfer