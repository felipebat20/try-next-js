
import TopicCard from '@/components/topics/cards/card';

import { Flavor as FlavorProps } from '@/interface/Flavor.interface';

interface Props {
  flavors: FlavorProps[];
}

export default function TopicCards({ flavors }: Props) {
  const topicCards = flavors.map((flavor) => (<TopicCard key={flavor.id} flavor={flavor} />));

  return (
    <div className='flex flex-col gap-2.5'>
      { topicCards }
    </div>
  );
}