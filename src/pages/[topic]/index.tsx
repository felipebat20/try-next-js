import Image from 'next/image'
import { useRouter } from 'next/router'

interface TopicInterface {
  image_url: string
  name: string
  id: string
  description: string
}

export default function Topic() {
  const topic: TopicInterface = {
    image_url: 'https://assets.musicle.app/img/flavors/1001.png',
    name: 'Hip Hople',
    id: 'hiphople',
    description: "And you don't stople",
  };

  const router = useRouter();

  const { topic: topic_id} = router.query;


  return (
    <div className='py-8 bg-white h-screen w-full'>
      <header className='w-full flex justify-center my-8'>
        <Image
          src="https://assets.musicle.app/img/logo.svg"
          width={130}
          height={43}
          alt='logo'
        />

        <div>
          /
        </div>
      </header>

      <main className="max-w-[740px] flex flex-col justify-center mx-auto p-5">
        <h2 className='font-bold text-[22px] text-[#444] text-center'>
          Welcome to Musicle, the music-guessing game. It comes in several flavors - choose yours!
        </h2>

        <div className='flex flex-col'>
          <div
            className="h-16 rounded-md p-4 text-right flex align-center justify-end"
            style={{ backgroundImage: `linear-gradient( to top left, rgba(0,0,0,.9), rgba(255,255,255,.1) ), url(${topic.image_url})` }}
          >
            <div className='flex flex-col'>
              <em className='text-base leading-4 font-bold'>
                1001
              </em>

              <span className='text-sm'>
                Better hear before you die
              </span>
            </div>
          </div>
        </div>
      </main>

      <footer className='text-zinc-500 text-xs text-center py-10 px-8'>
        <p id="footer">
          Created by <a className='text-[#79928d] font-bold' href="https://twitter.com/adrianosbr">@adrianosbr</a>.
          Follow us on <a className='text-[#79928d] font-bold' href="https://twitter.com/musicleapp">@musicleapp</a>.
          Data and samples from the <a className='text-[#79928d] font-bold' href="https://developer.apple.com/documentation/applemusicapi/">Apple Music API</a>.<br />
          🛍 Visit our <a className='text-[#79928d] font-bold' href="/store">merchandising shop</a>!
        </p>
      </footer>
    </div>
  )
}
