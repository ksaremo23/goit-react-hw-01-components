//PROFILE
import { Profile } from './Profile/Profile'
import user from '../data/user.json'


//STATISTICS
import { Statistics } from './Statistics/Statistics'
import data from '../data/data.json'

//FRIENDLIST
import { FriendList } from './FriendList/FriendList'
import friends from '../data/friends.json'

//TRANSACTIONHISTORY
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transaction.json';

export const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}


