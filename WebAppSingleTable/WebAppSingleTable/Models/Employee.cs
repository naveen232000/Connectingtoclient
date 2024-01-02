using System;
using System.Collections.Generic;

namespace WebAppSingleTable.Models
{
    public partial class Employee
    {
        public int Id { get; set; }
        public string? Fname { get; set; }
        public string? Lname { get; set; }
        public double? Salary { get; set; }
        public DateTime? Doj { get; set; }
    }
}
