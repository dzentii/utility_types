  // Задание 1: Получаем список ключей интерфейса Car
interface Car {
    model: string;
    price: number;
    dynamic_1: Record<string, string>; // Используется Record
    dynamic_2: { [index: string]: number }; // Используется  [index: type]
    tuple: [string, number, string]; // Типизирован кортеж
  }
  
const myCar = {
    model: "Tesla",
    price: 100000,
    dynamic_1: { key_1: "a", key_2: "b", key_3: "c" },
    dynamic_2: { key_1: 1, key_2: 2, key_3: 3 },
    tuple: ["start", 42, "end"] as [string, number, string],
  };

  // Получение типа объекта через `typeof`
  type CarType = typeof myCar;

  // Извлечение ключей через `keyof`
  type CarKeys = keyof CarType;
  const keys: CarKeys[] = ['model', 'price', 'dynamic_1', 'dynamic_2', 'tuple'];
  
  console.log('Ключи интерфейса Car:', keys);
  
  // Задание 2: Перегрузка функции add
  function add(a: string, b: string): string;
  function add(a: number, b: number): number;
  function add(a: string, b: number): string;
  function add(a: number, b: string): string;
  
  function add(a: string | number, b: string | number): string | number {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }
  
  // Примеры использования функции add
  console.log(add(1, 2)); // 3
  console.log(add('1', '2')); // "12"
  console.log(add(1, '2')); // "12"
  console.log(add('1', 2)); // "12"
  
  // Задание 3: Утилитарные типы
  // Partial - делает все свойства необязательными
  type PartialCar = Partial<Car>;

  // Readonly - делает все свойства только для чтения
  type ReadonlyCar = Readonly<Car>;

  // Pick - выбирает только указанные свойства
  type CarModelAndPrice = Pick<Car, 'model' | 'price'>;

  // Omit - исключает указанные свойства
  type CarWithoutTuple = Omit<Car, 'tuple'>;

  // Required - делает все свойства обязательными
  type RequiredCar = Required<Car>;

  // Record - создает тип с указанными ключами и типом значений
  type CarDynamicKeys = Record<'key1' | 'key2', string>;

  // Extract - извлекает типы, которые можно присвоить другому типу
  type StringProps = Extract<Car[keyof Car], string>;

  // Exclude - исключает типы, которые можно присвоить другому типу
  type NonStringProps = Exclude<Car[keyof Car], string>;