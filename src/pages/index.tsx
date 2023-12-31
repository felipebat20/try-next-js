import { useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Flavor } from '@/libs/flavor';

import TopicCards from '@/components/topics/cards';
import { Flavor as FlavorInterface } from '@/interface/Flavor.interface';

import Image from 'next/image'



export const getStaticProps: GetStaticProps<{
  flavors: FlavorInterface[]
}> = async () => {
  const flavors = new Flavor();

  const flavors_data = await flavors.getAll();

  return { props: { flavors: flavors_data } }
}

export default function Page({ flavors }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='py-8 bg-white min-h-screen w-full'>
      <header className='w-full flex justify-center my-8'>
        <Image
          src="https://assets.musicle.app/img/logo.svg"
          width={130}
          height={43}
          alt='logo'
        />
      </header>

      <main className="max-w-[740px] flex flex-col justify-center mx-auto p-5">
        <h2 className='font-bold text-[22px] text-[#444] text-center'>
          Welcome to Musicle, the music-guessing game. It comes in several flavors - choose yours!
        </h2>

        <TopicCards flavors={flavors} />
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
