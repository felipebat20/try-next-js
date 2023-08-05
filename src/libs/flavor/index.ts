import { Flavor as FlavorInterface } from '@/interface/Flavor.interface';

export class Flavor {
  getAll(): Promise<FlavorInterface[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const { flavors } = await (await fetch('https://data.musicle.app/flavors.json')).json();

        console.log(flavors);

        return resolve(flavors);
      } catch (err) {
        console.log(err)
      }
    });
  }
}