using System;
using BDH.IoC;
using BDH.Metadata;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.DependencyInjection;
using WebBDH.Models;

namespace WebBDH.Responsitories
{
  public partial class BDHContext : DbContext
    {
        //public BDHContext()
        //{
        //}
        private readonly IServiceProvider _serviceProvider;
        public BDHContext(DbContextOptions<BDHContext> options)
            : base(options)
        {
            _serviceProvider = Container.Services;
            if(_serviceProvider==null) 
                _serviceProvider= new ServiceCollection().BuildServiceProvider();
        }

        public virtual DbSet<AccountAdmin> AccountAdmin { get; set; }
        public virtual DbSet<Brand> Brand { get; set; }
        public virtual DbSet<Image> Image { get; set; }
        public virtual DbSet<LoaiDay> LoaiDay { get; set; }
        public virtual DbSet<MatDongHo> MatDongHo { get; set; }
        public virtual DbSet<Product> Product { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\MSSQL;Database=BDH;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var dbDescription = _serviceProvider.GetService<IDbDescription>();
            dbDescription = new SqlServerDescription();
            modelBuilder.Entity<AccountAdmin>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreateBy).HasMaxLength(50);

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.LastUpdateBy).HasMaxLength(50);

                entity.Property(e => e.LastUpdateTime).HasColumnType("datetime");

                entity.Property(e => e.Password)
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Phone)
                    .HasMaxLength(20)
                    .IsFixedLength();

                entity.Property(e => e.UserName)
                    .HasMaxLength(80)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.Property(e => e.CreateBy).HasMaxLength(50);

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.LastUpdateBy).HasMaxLength(50);

                entity.Property(e => e.LastUpdateTime).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            modelBuilder.Entity<Image>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CreateBy).HasMaxLength(50);

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateBy).HasMaxLength(50);

                entity.Property(e => e.LastUpdateTime).HasColumnType("datetime");

                entity.Property(e => e.Path)
                    .HasColumnName("path")
                    .HasMaxLength(255)
                    .IsFixedLength();

                entity.Property(e => e.Stt).HasColumnName("stt");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithMany(p => p.Image)
                    .HasForeignKey(d => d.IdProduct)
                    .HasConstraintName("FK_Image_Product1");
            });

            modelBuilder.Entity<LoaiDay>(entity =>
            {
                entity.Property(e => e.CreateBy).HasMaxLength(50);

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.LastUpdateBy).HasMaxLength(50);

                entity.Property(e => e.LastUpdateTime).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            modelBuilder.Entity<MatDongHo>(entity =>
            {
                entity.Property(e => e.CreateBy).HasMaxLength(50);

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.LastUpdateBy).HasMaxLength(50);

                entity.Property(e => e.LastUpdateTime).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Color).HasMaxLength(50);

                entity.Property(e => e.CreateBy).HasMaxLength(50);

                entity.Property(e => e.CreateTime).HasColumnType("datetime");

                entity.Property(e => e.IdMatDh).HasColumnName("IdMatDH");

                entity.Property(e => e.LastUpdateBy).HasMaxLength(50);

                entity.Property(e => e.LastUpdateTime).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(255);

                entity.HasOne(d => d.IdBrandNavigation)
                    .WithMany(p => p.Product)
                    .HasForeignKey(d => d.IdBrand)
                    .HasConstraintName("FK_Product_Brand");

                entity.HasOne(d => d.IdLoaiDayNavigation)
                    .WithMany(p => p.Product)
                    .HasForeignKey(d => d.IdLoaiDay)
                    .HasConstraintName("FK_Product_LoaiDay");

                entity.HasOne(d => d.IdMatDhNavigation)
                    .WithMany(p => p.Product)
                    .HasForeignKey(d => d.IdMatDh)
                    .HasConstraintName("FK_Product_MatDongHo");
            });
            ApplyConfiguration(modelBuilder, dbDescription);
            OnModelCreatingPartial(modelBuilder);
            
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
