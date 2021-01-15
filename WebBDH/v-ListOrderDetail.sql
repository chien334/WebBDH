USE [BDH]
GO

/****** Object:  View [dbo].[v_ListItemOrder]    Script Date: 1/15/2021 11:27:20 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

Create view [dbo].[v_ListItemOrder]
as
select 
a.id as Id, 
a.orderId as OrderId,
c.[Name],
a.price as Price,
a. quantity as Quantity ,
b.firstName  as FirstName 
from OrderItem a 
join UserOrder b on a.orderId= b.id
join Product c on a.productId= c.Id
GO


