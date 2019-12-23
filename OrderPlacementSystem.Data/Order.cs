using System;
using System.Collections.Generic;
using System.Linq;

namespace OrderPlacementSystem.Data
{
    public class Order
    {
        public int OrderId { get; set; }

        public int SpecialId { get; set; }

        public DateTime CreatedTime { get; set; }

    }
}
