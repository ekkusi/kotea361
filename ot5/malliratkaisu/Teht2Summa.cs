using System;

public class Summa
{
    public static void Main()
    {
        int[] luvut = { 9, -2, 3, 13, 7, 8, 25 };
        Console.Write("Luvut, joista summa lasketaan: ");
        for (int i = 0 ; i < luvut.Length; i++) {
            Console.Write(luvut[i] + " ");
        }
        Console.WriteLine();
        int summa = LaskeSumma(luvut);
        if (summa == 63)
        {
            Console.WriteLine("Laskettu summa: " + summa + ". Oikein!");
        }
        else
        {
            Console.WriteLine("Laskettu summa: " + summa + ". Väärin! Olisi pitänyt olla: " + 63);
        }
    }

    /// <summary>
    /// Lasketaan kokonaislukutaulukosta lukujen summa.
    /// </summary>
    /// <param name="luvut">Kokonaislukutaulukko</param>
    public static int LaskeSumma(int[] luvut)
    {
        int summa = 0;
        foreach (int luku in luvut)
        {
          summa += luku;
        }
        return summa;
    }
}

