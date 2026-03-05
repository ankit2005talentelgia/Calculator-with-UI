using System;
using System.Collections.Generic;
using System.Globalization;


namespace WebApplication1.Services
{
    public class CalculatorServices
    {
        public double EvaluateExpression(string expression)
        {
            expression = expression.Replace(" ", "")
                       .Replace("\n", "")
                       .Replace("\r", "");
            //make two stacks one is for storing number and other is for storing operators
            Stack<double> numbers = new Stack<double>();
            Stack<char> operators = new Stack<char>();

            // traverse all the characters in the expression string
             for (int i = 0; i < expression.Length; i++)
             {
                //if the input is digit then check that number is from 1 to 9 or greater than nine
                if (char.IsDigit(expression[i]))
                {
                    string num = "";

                    // if number is greater than 9 then simply add until any operator is coming
                    while (i < expression.Length && (char.IsDigit(expression[i]) || expression[i] == '.'))
                    {
                       num += expression[i];
                       i++;
                    }
                    // now operator comes then push into number stack and go one digit previous so that i++ trigers and goes to operators
                    numbers.Push(double.Parse(num));
                    i--;
                }
                // if any operator comes 
                else if (IsOperator(expression[i]))
                {
                    // evaluate the expression until higher precedence evaluation is completed.
                    while (operators.Count > 0 && Precedence(operators.Peek()) >= Precedence(expression[i]))
                    {
                        Process(numbers, operators);
                    }
                    // and after evaluation push the incoming operator
                    operators.Push(expression[i]);
                    }
                }
            // if any operator is left then evaluate it
            while (operators.Count > 0)Process(numbers, operators);

            return numbers.Pop();
        }

        // this function is for evaluating the expression
        static void Process(Stack<double> numbers, Stack<char> operators)
        {
            double b = numbers.Pop();
            double a = numbers.Pop();
            char op = operators.Pop();

            switch (op)
            {
                case '+': numbers.Push(a + b); break;
                case '-': numbers.Push(a - b); break;
                case '*': numbers.Push(a * b); break;
                case '/': numbers.Push(a / b); break;
                case '%': numbers.Push(a % b); break;
            }
        }

        // this function check that string exp[i] is any operator or not
        static bool IsOperator(char c)
        {
            return c == '+' || c == '-' || c == '*' || c == '/' || c == '%';
        }

        // this function checks the operator's priority by modmas rule
        static int Precedence(char op)
        {
            if (op == '+' || op == '-') return 1;
            if (op == '*' || op == '/' || op == '%') return 2;
            return 0;
        }
    }
}
