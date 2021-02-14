using System;
using System.Text;

public class Teht3VaihdaKirjaimet
{
    public static void Main()
    {
        string jono = "kisso korkoo liion kouos";
        Console.WriteLine("Jono aluksi: " + jono + ".");
        string muutettuJono = VaihdaKirjaimet(jono, 'o', 'a');
        string oikeaMuutos = "kissa karkaa liian kauas";
        if (muutettuJono == oikeaMuutos)
        {
            Console.WriteLine("Muutettu jono: " + muutettuJono + ". Oikein!");
        }
        else
        {
            Console.WriteLine("Muutettu jono: " + muutettuJono + ". Väärin! Olisi pitänyt olla: " + oikeaMuutos);
        }
    }

    /// <summary>
    /// Vaihdetaan merkkijonosta kaikki väärät kirjaimet oikeiksi.
    /// Ensimmäisenä parametrina annetusta merkkijonosta vaihtuu kaikki toisena parametrina annettua
    /// kirjainta vastaavat kirjaimet kolmantena parametrian annettuun kirjaimeen.
    /// </summary>
    /// <param name="jono">Muutettava jono</param>
    /// <param name="vaihdettava">Muutettava kirjain</param>
    /// <param name="korvaava">Kirjain, joksi muutetaan</param>
    public static string VaihdaKirjaimet(string jono, char vaihdettava, char korvaava)
    {
        StringBuilder muutettuJono = new StringBuilder(jono);
        int i = 0;
        while (i < muutettuJono.Length)
        {
            if (muutettuJono[i] == vaihdettava) muutettuJono[i] = korvaava;
            i++;
        }
        return muutettuJono.ToString();

    }
}

