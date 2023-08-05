import { Flavor as FlavorProps } from '@/interface/Flavor.interface';

export default function TopicCard({ flavor }: { flavor: FlavorProps }) {
  const { id, name, desc } = flavor;

  return (
    <div
      className="h-16 rounded-md p-4 text-right flex align-center justify-end mx-2"
      style={{ backgroundImage: `linear-gradient( to top left, rgba(0,0,0,.9), rgba(255,255,255,.1) ), url(https://assets.musicle.app/img/flavors/${id}.png)` }}
    >
      <div className='flex flex-col'>
        <em className='text-base leading-4 font-bold'>
          { name }
        </em>

        <span className='text-sm'>
          { desc }
        </span>
      </div>
    </div>
  );
}