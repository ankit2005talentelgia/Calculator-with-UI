using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;
using WebApplication1.DTOs;
using System;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("/calculate")]
    public class CalculatorController:ControllerBase
    {
        private readonly CalculatorServices _service;
        public CalculatorController(CalculatorServices services)
        {
            _service = services;
        }



        [HttpPost]
        public IActionResult CalculateResult([FromBody] ExpDto expression)
        {
            try
            {
                Console.WriteLine("exp: " + expression.expression);
                double response= _service.EvaluateExpression(expression.expression);

                return Ok(new
                {
                    success = true,
                    data = response
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"error comes: {ex.Message}");
                throw;
            }
        }
    }
}
