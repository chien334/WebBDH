using System;
using System.Collections.Generic;

namespace WebBDH.Models
{
    public partial class Image
    {
        public long Id { get; set; }
        public string Path { get; set; }
        public int? Stt { get; set; }
        public long? IdProduct { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateTime { get; set; }
        public string LastUpdateBy { get; set; }
        public DateTime? LastUpdateTime { get; set; }

        public virtual Product IdNavigation { get; set; }
    }
}
