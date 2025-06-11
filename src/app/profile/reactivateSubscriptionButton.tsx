import { gql, useMutation } from '@apollo/client'
import moment from 'moment-timezone'
import { useNavigate } from 'react-router'


type Props = {
  viewer : {
    hasActiveSubscription: boolean;
    isTrial: boolean;
    isCancelled: boolean;
    subscriptionStartDate: string
    subscriptionEndDate: string
  }
}

const REACTIVATE_SUBSCRIPTION = gql`
  mutation ReactivateSubscription {
    reactivateSubscription {
      hasActiveSubscription
      isTrial
      isCancelled
      subscriptionStartDate
      subscriptionEndDate
    }
  }
`

export default function ReactivateSubscriptionButton(props: Props) {
  const navigate = useNavigate()
  const [reactivateSubscription, { loading }] = useMutation(REACTIVATE_SUBSCRIPTION)

  return (
    <>
      {loading && (
        <button
          disabled={true}
          className="mt-5 block w-full rounded-md bg-slate-950 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm border-0">
          <div className="flex justify-center items-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        </button>
      )}
      {
        !loading && <button
          onClick={() => handleReactivateSubscription()}
          className="mt-5 block w-full rounded-md bg-slate-950 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm border-0">
          Reactivate Subscription
        </button>
      }
      <p className="mt-6 text-xs/5 text-gray-600">Your subscription started on <b>{getLocalTimeFromString(props.viewer.subscriptionStartDate)}</b>, and will be active until <b>{getLocalTimeFromString(props.viewer.subscriptionEndDate)}</b>.</p>
    </>
  )

  function handleReactivateSubscription() {
    void reactivateSubscription({
      onCompleted: () => {
        navigate('/profile/update-subscription')
      }
    })
  }

  function getLocalTimeFromString(datetimeString: string, format: string = 'MMMM D, YYYY'): string {
    const clientTimezone = moment.tz.guess() // auto-detect user's timezone
    return moment(datetimeString).tz(clientTimezone).format(format)
  }
}
