import { useEffect, useState } from 'react'
import { useCat } from "../hooks/useCat"
import { ICat } from '../interfaces';

import '../styles/gatinhos.scss';

export const Home = () => {
  const { getAll } = useCat();
  const [gatinhos, setGatinhos] = useState<ICat[]>([]);

  useEffect(() => {
    getAll().then(response => setGatinhos(response));
  }, [getAll])
  return (
    <main>
      <div className="gatinhoRow">{
        gatinhos.map((gatinho) => (
          (
            <div className="gatinho--item">
              <img className="imgGatinho" src={`${gatinho.url}`} alt='Foto Gatinho Fofo' />
            </div>
          )
        ))}
      </div>
    </main>
  );
};



