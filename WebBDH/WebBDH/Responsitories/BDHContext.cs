using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using WebBDH.Models;

namespace WebBDH.Responsitories
{
    public partial class BDHContext : DbContext
    {
        public BDHContext()
        {
        }

        public BDHContext(DbContextOptions<BDHContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Brand> Brand { get; set; }
        public virtual DbSet<Image> Image { get; set; }
        public virtual DbSet<LoaiDay> LoaiDay { get; set; }
        public virtual DbSet<MatDongHo> MatDongHo { get; set; }
        public virtual DbSet<Product> Product { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
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

                entity.HasOne(d => d.IdNavigation)
                    .WithOne(p => p.Image)
                    .HasForeignKey<Image>(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Image_Product");
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

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
