import React, { useState, useEffect } from 'react';

function App() {
  const [sticks, setSticks] = useState(25);
  const [pl1_sticks, setpl1Sticks] = useState(0);
  const [pl2_sticks, setpl2Sticks] = useState(0);
  const [pl1value, setpl1value] = useState(0);

  let getSticks = e => {
    e.preventDefault();
    if (isNaN(pl1value) || pl1value < 1 || pl1value > 3) {
      alert('Число должно быть от 1 до 3');
    } else {
      if (sticks === 2) {
        if (pl1value === 3) {
          alert('Введите верное число');
        } else if (pl1value === 1) {
          setpl2Sticks(pl2_sticks + 1);
        } else {
          setpl1Sticks(pl1_sticks + pl1value);
        }
      } else if (sticks === 1) {
        if (pl1value > 1) {
          alert('Введите верное число');
        } else {
          setpl1Sticks(pl1_sticks + pl1value);
        }
      } else {
        setpl1Sticks(pl1_sticks + pl1value);
        setpl2Sticks(pl2_sticks + Math.floor(Math.random() * 3) + 1);
      }
    }
  };

  useEffect(() => {
    if (sticks <= 0) {
      !(pl1_sticks % 2)
        ? alert('Победил Игрок № 1')
        : alert('Победил Игрок № 2');
      setSticks(0);
    }
  }, [sticks, pl1_sticks]);

  useEffect(() => {
    setSticks(25 - (pl1_sticks + pl2_sticks));
  }, [pl1_sticks, pl2_sticks]);

  /// формирование рандомного числа
  /// общее количество - рандом
  // инпут игрока
  // общее количество - инпут игрока

  return (
    <div className='container text-center pt-5'>
      <h1>Игра в спички</h1>
      <h3 className='text-info py-3'>Правила</h3>
      <p className='pb-5'>
        Из кучки, где имеется 25 спичек, каждый берёт себе по очереди одну, две
        или три спички. Выигрывает тот, у кого в конце игры – после того, как
        все спички будут разобраны, – окажется четное число спичек.
      </p>
      <h3 className='pb-5'>
        Количество спичек: <span className='text-danger'>{sticks}</span>
      </h3>
      <div className='row'>
        <form className='col'>
          <h4>Игрок № 1</h4>
          <p>
            Введите количество спичек от 1 до 3
            <input
              className='ml-3'
              type='number'
              min='1'
              max='3'
              onChange={e => setpl1value(+e.target.value)}
            ></input>
          </p>
          <h5>Cпичек: {pl1_sticks}</h5>
          <button onClick={getSticks} className='btn btn-outline-primary mt-3'>
            Взять спички
          </button>
        </form>
        <div className='col'>
          <h4>Игрок № 2</h4>
          <h5>Cпичек: {pl2_sticks}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
