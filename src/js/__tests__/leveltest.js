import fetchData from '../http';
import getLevel from '../level';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing fatchData c userID 1', () => {
  fetchData.mockReturnValue({});

  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('testing response status ok', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 20,
  });

  expect(getLevel()).toBe('Ваш текущий уровень: 20');
});

test('testing response status is not ok', () => {
  fetchData.mockReturnValue({});
  expect(getLevel()).toBe('Информация об уровне временно недоступна');
});
// Принимает значение, которое будет
// возвращаться при каждом вызове имитационной функции.
// mock.mockReturnValue(42);
// mock(); // 42
// Имитационные функции также известны как "шпионы", потому что они
// позволяют вам следить за поведением функции, которая вызывается/
// косвенно каким-либо другим кодом, а не только тестировать выходные
// данные. Вы можете создать фиктивную функцию с помощью jest.fn().
// Если реализация не задана, имитационная функция вернется undefined при вызове.