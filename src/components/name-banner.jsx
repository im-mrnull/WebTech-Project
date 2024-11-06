import names from './users'
import { CardTitle, Card} from './ui/card'



export default function NameBanner({name}) {
    var name = 'Shourya';
    return (
        <Card className='rounded-xl h-[100px] bg-[#292524] w-full text-center place-content-center border-w-2 transition-all hover:bg-[#524947]'>
        {names.map((user) => {
            if (user.name === name) {
                return (
                    <>
                        <CardTitle key={user.id}>Hello, {user.name}!</CardTitle>
                        <p>{user.email}</p>
                    </>
                )
            }
        })}
        </Card>
    )
}