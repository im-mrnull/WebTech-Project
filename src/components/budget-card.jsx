
import { CardTitle, Card, CardDescription} from './ui/card'
import { Progress } from './ui/progress'

export default function BudgetCard() {
    return (
        <Card className='rounded-xl h-[100px] w-[50%] text-left p-0 border-w-2 flex flex-col items-start'>
            <div className='bg-[#292524] w-full rounded-t-xl p-1'>
            <CardTitle className='text-xl p-2 pb-1'>Budget</CardTitle>
            <CardDescription className='text-sm pl-2 pb-2'>You have $500 left to spend this month</CardDescription>
            </div>
            <div className='flex flex-col items-center w-full rounded-b-xl p-1 bg-[#131212]'>
            <Progress value={30} className='w-[80%] m-5'/>
            <CardDescription className='text-sm pl-1 pb-2'>You can spend 10$ per day</CardDescription>
            </div>
        </Card>
    )
}