import { CardContent1 } from '@/components/ui/base/card-content-1'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<main className='h-screen w-screen flex flex-col gap-8 items-center justify-center p-10'>
			<Button>Click me</Button>
			<CardContent1 />
		</main>
	)
}
