USE [BDH]
GO

/****** Object:  View [dbo].[v_Product]    Script Date: 11/28/2020 11:56:06 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

create view [dbo].[v_Product]
as
select p.[Id]
      ,p.[Name]
      ,ld.[Name]as LoaiDay
      ,md.[Name]as MatDongHo
      ,p.[Description]
      ,p.[Price]
      ,p.[Color]
      ,p.[Weight]
      ,p.[Sex]
      ,b.[Name] as Brand from Product p
join Brand b on p.IdBrand= b.Id
join LoaiDay ld on p.IdLoaiDay= ld.Id
join MatDongHo md on p.IdMatDH = md.Id
GO


