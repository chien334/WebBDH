USE [BDH]
GO

/****** Object:  View [dbo].[v_Product]    Script Date: 11/28/2020 11:56:06 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER view [dbo].[v_Product]
as
select p.[Id]
      ,p.[Name]
      ,ld.[Name]as IdLoaiDay
      ,md.[Name]as IdMatDH
      ,p.[Description]
      ,p.[Price]
      ,p.[Color]
      ,p.[Weight]
      ,p.[Sex]
      ,b.[Name] as IdBrand
	  ,ha.[path] from Product p
join Brand b on p.IdBrand= b.Id
join LoaiDay ld on p.IdLoaiDay= ld.Id
join MatDongHo md on p.IdMatDH = md.Id
left join (select ROW_NUMBER() OVER(ORDER BY IdProduct ASC) AS num_row, [path],IdProduct  from [Image]) ha on ha.IdProduct= p.Id and ha.num_row=1
GO


