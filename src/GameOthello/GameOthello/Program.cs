using System;

namespace GameOthello
{
    class Program
    {
        static void Main(string[] args)
        {
            juego Game = new juego();
            Game.crearTablero(8);
            Game.imprimir(8);

            while (true)
            {
                Console.WriteLine("********************************JUGADOR CON LA FICHA 1*****************************");
                Console.WriteLine("Digite un fila");
                int fila = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Digite una columna");

                int columna = Convert.ToInt32(Console.ReadLine());

                Game.movimiento(fila, columna, 1);

                Game.imprimir(8);

                Console.WriteLine("********************************JUGADOR CON LA FICHA 2*****************************");

                Console.WriteLine("Digite un fila");
                int fila2 = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Digite una columna");

                int columna2 = Convert.ToInt32(Console.ReadLine());

                Game.movimiento(fila2, columna2, 2);

                Game.imprimir(8);
            }
            

            Console.ReadKey();
        }
    }
}
