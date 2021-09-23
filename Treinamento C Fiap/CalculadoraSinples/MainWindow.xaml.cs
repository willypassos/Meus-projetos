using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace variaveisAula01
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            // declaração de variaveis
            double n1, n2, resultado;

            // entrada de dados
            n1 = Convert.ToDouble(txtNumero1.Text);// efetuando a conversão da string
            n2 = Convert.ToDouble(txtNumero2.Text);

            //Efetuando o calculo
            resultado = n1 + n2;

            //Saida de dados
            lblResposta.Content = " O resultado da Soma é :" + resultado.ToString();







        }

        private void btnSubtrair_Click(object sender, RoutedEventArgs e)
        {
            double n1, n2, resultado;

            n1 = Convert.ToDouble(txtNumero1.Text);// efetuando a conversão da string
            n2 = Convert.ToDouble(txtNumero2.Text);

            //Efetuando o calculo
            resultado = n1 - n2;

            //Saida de dados
            lblResposta.Content = " O resultado da Subtração é : " + resultado.ToString();
        }

        private void btnMultiplicar_Click(object sender, RoutedEventArgs e)
        {
            double n1, n2, resultado;

            n1 = Convert.ToDouble(txtNumero1.Text);// efetuando a conversão da string
            n2 = Convert.ToDouble(txtNumero2.Text);

            //Efetuando o calculo
            resultado = n1 * n2;

            //Saida de dados
            lblResposta.Content = " O resultado da Multiplicação é : " + resultado.ToString();
        }

        private void btnDividir_Click(object sender, RoutedEventArgs e)
        {
            double n1, n2, resultado;

            n1 = Convert.ToDouble(txtNumero1.Text);// efetuando a conversão da string
            n2 = Convert.ToDouble(txtNumero2.Text);

            //Efetuando o calculo
            resultado = n1 / n2;

            //Saida de dados
            lblResposta.Content = " O resultado da Divisão é : " + resultado.ToString();
        }
    }
}
