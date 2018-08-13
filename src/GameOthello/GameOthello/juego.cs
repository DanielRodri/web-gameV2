using System;
using System.Collections.Generic;
using System.Text;

namespace GameOthello
{
    class juego
    {
        int[,] matriz;

        public void crearTablero(int tam)
        {
            matriz = new int[tam, tam];


            for (int f = 0; f < tam; f++)
            {
                for (int c = 0; c < tam; c++)
                {
                    if ((tam / 2) == f & (tam / 2) == c)
                    {
                        matriz[f, c] = 2;

                    }
                    else if ((tam / 2) == f & (tam / 2) - 1 == c)
                    {
                        matriz[f, c] = 1;

                    }

                    else if ((tam / 2) - 1 == f & (tam / 2) == c)
                    {
                        matriz[f, c] = 1;

                    }

                    else if ((tam / 2) - 1 == f & (tam / 2) - 1 == c)
                    {
                        matriz[f, c] = 2;

                    }
                    else
                    {
                        matriz[f, c] = 0;
                    }


                }
            }
        }
        public void imprimir(int tam)
        {
            Console.Write("   " + "0" + "  " + "1" + "  " + "2" + "  " + "3" + "  " + "4" + "  " + "5" + "  " + "6" + "  " + "7" + "\n");
            for (int f = 0; f < tam; f++)
            {
                Console.Write(f + "  ");
                for (int c = 0; c < tam; c++)
                {
                    Console.Write(matriz[f, c] + "  ");
                }
                Console.WriteLine("\n");
            }
        }

        public void movimiento(int fila, int columna, int ficha)
        {
            if (matriz[fila, columna] == 0)
            {
                if (ficha == 1)
                {
                    String jugada = movFichaVerifica(fila, columna, 2);
                    Console.WriteLine(jugada);
                }
                else
                {
                    String jugada = movFichaVerifica(fila, columna, 1);
                    Console.WriteLine(jugada);
                }
            }
            else
            {
                Console.WriteLine("Esa posicion ya esta ocupada por una ficha");
            }

        }

        public String movFichaVerifica(int fila, int columna, int fichaC)
        {
            int f = fila, c = columna, ficha;
            if (fichaC == 1)
            {
                ficha = 2;

            }
            else
            {
                ficha = 1;

            }

            if (fila != 0 & columna != 0)
            {
                if (matriz[fila - 1, columna - 1] == fichaC)
                {
                    while (f != 0 || c != 0)
                    {
                        f--;
                        c--;
                    }


                    while (f < fila & c < columna)
                    {
                        if (matriz[f, c] == ficha)
                        {
                            matriz[fila, columna] = ficha;
                            while (f != fila & c != columna)
                            {
                                f++;
                                c++;
                                matriz[f, c] = ficha;
                                return "El movimiento es valido";
                            }
                        }
                        f++;
                        c++;
                    }

                }
            }

            if (fila != 0)
            {
                f = fila;
                c = columna;
                if (matriz[fila - 1, columna] == fichaC)
                {
                    f=0;
                    
                    while (f < fila)
                    {
                       
                        if (matriz[f, c] == ficha)
                        {
                            matriz[fila, columna] = ficha;
                            while (f != fila)
                            {
                                f++;
                                matriz[f, c] = ficha;
                                return "El movimiento es valido";
                            }
                        }
                        f++;
                    }

                }
            }

            if (fila != 0 & columna != matriz.Length)
            {
                f = fila;
                c = columna;

                if (matriz[fila - 1, columna + 1] == fichaC)
                {
                    while (f != 0 || c != matriz.Length)
                    {
                        f--;
                        c++;
                    }


                    while (f < fila & c < columna)
                    {
                        if (matriz[f, c] == ficha)
                        {
                            matriz[fila, columna] = ficha;
                            while (f != fila & c != columna)
                            {
                                f++;
                                c--;
                                matriz[f, c] = ficha;
                                return "El movimiento es valido";
                            }
                        }
                        f++;
                        c--;
                    }

                }
            }

            if (columna != 0)
            {
                f = fila;
                c = columna;

                if (matriz[fila, columna - 1] == fichaC)
                {
                    while (columna == 0)
                    {
                        c--;
                    }


                    while (f < fila & c < columna)
                    {
                        if (matriz[f, c] == ficha)
                        {
                            matriz[fila, columna] = ficha;
                            while (c != columna)
                            {
                                c++;
                                matriz[f, c] = ficha;
                                return "El movimiento es valido";
                            }
                        }
                        c++;
                    }

                }
            }

            if (columna != matriz.Length)
            {
                f = fila;
                c = columna;
                if (matriz[fila, columna + 1] == fichaC)
                {
                    while (c != matriz.Length)
                    {
                        c++;
                    }

                    while (true)

                        while (c < columna)
                        {
                            if (matriz[f, c] == ficha)
                            {
                                matriz[fila, columna] = ficha;
                                while (c != columna)
                                {
                                    c--;
                                    matriz[f, c] = ficha;
                                    return "El movimiento es valido";
                                }
                            }
                            c--;
                        }

                }
            }

            if (fila != matriz.Length & columna != 0)
            {
                f = fila;
                c = columna;
                if (matriz[fila + 1, columna - 1] == fichaC)
                {
                    while (f == matriz.Length || c == 0)
                    {
                        f++;
                        c--;
                    }


                    while (f < fila & c < columna)
                    {
                        if (matriz[f, c] == ficha)
                        {
                            matriz[fila, columna] = ficha;
                            while (f != fila & c != columna)
                            {
                                f--;
                                c++;
                                matriz[f, c] = ficha;
                                return "El movimiento es valido";
                            }
                        }
                        f--;
                        c++;
                    }

                }
            }

            if (fila != matriz.Length)
            {
                f = fila;
                c = columna;
                if (matriz[fila + 1, columna] == fichaC)
                {
                    while (f == matriz.Length)
                    {
                        f++;
                    }


                    while (f < fila)
                    {
                        if (matriz[f, c] == ficha)
                        {
                            while (f != fila)
                            {
                                matriz[fila, columna] = ficha;
                                f--;
                                matriz[f, c] = ficha;
                                return "El movimiento es valido";
                            }
                        }
                        f--;
                    }

                }
            }

            if (fila != matriz.Length & columna != matriz.Length)
            {
                f = fila;
                c = columna;

                if (matriz[fila + 1, columna + 1] == fichaC)
                {
                    while (f == matriz.Length || c == matriz.Length)
                    {
                        f++;
                        c++;
                    }


                    while (f < fila & c < columna)
                    {
                        if (matriz[f, c] == ficha)
                        {
                            while (f != fila & c != columna)
                            {
                                matriz[fila, columna] = ficha;
                                f--;
                                c--;
                                matriz[f, c] = ficha;
                                return "El movimiento es valido";
                            }
                        }
                        f--;
                        c--;
                    }

                }
            }

            return "El movimiento es invalido";


        }


    }



}
