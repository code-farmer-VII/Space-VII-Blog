import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>

      <div className='w-full bg-black rounded-lg flex-col md:flex-row justify-around items-center'>
        <div>
        <h1 className='text-center text-white text-4xl py-7 '>Share Your Idea</h1>
          <p className='px-8 text-center pb-6'>          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius suscipit, doloremque qui, dolor corporis rerum excepturi veritatis dicta vel minus dolorem! Corrupti, quod in voluptatibus id accusamus sint adipisci maiores.
          </p>
          <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="rounded-xl bg-[#e0f2fe] text-black hover:scale-105 transition-all ease-in-out">View Tickets</button>
        </Link>
      </div>
        </div>
          <Image 
          src={require("@/components/hero_image.png")}
          width={280}
          height={300}
          objectFit='cover'
          className='rounded-xl hidden md:inline-block'
        />
      </div>



      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
  )
}
