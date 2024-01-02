using System;
using System.Collections.Generic;

namespace WebAPICoreMultiTable.Models
{
    public partial class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; } = null!;
        public double? Price { get; set; }
        public int? CatId { get; set; }

        public virtual Category? Cat { get; set; }
    }
}
