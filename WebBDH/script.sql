Create database [BDH]
go
USE [BDH]
GO
/****** Object:  Table [dbo].[AccountAdmin]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountAdmin](
	[Id] [bigint] NOT NULL,
	[UserName] [varchar](80) NULL,
	[Password] [char](128) NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Sex] [bit] NULL,
	[Phone] [nvarchar](50) NULL,
	[Email] [varchar](150) NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
	[Role] [nvarchar](50) NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_AccountAdmin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Brand]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Brand](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Description] [nvarchar](500) NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
 CONSTRAINT [PK_Brand] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cart]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cart](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[userId] [bigint] NULL,
	[sessionId] [varchar](256) NULL,
	[token] [varchar](256) NULL,
	[status] [smallint] NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CartItem]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CartItem](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[productId] [bigint] NULL,
	[cartId] [bigint] NULL,
	[sku] [varchar](100) NULL,
	[price] [float] NULL,
	[discount] [float] NULL,
	[quantity] [smallint] NULL,
	[content] [nvarchar](max) NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Image]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[Id] [bigint] NOT NULL,
	[path] [nvarchar](255) NULL,
	[stt] [int] NULL,
	[IdProduct] [bigint] NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
 CONSTRAINT [PK_Image] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoaiDay]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LoaiDay](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Description] [nvarchar](500) NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
 CONSTRAINT [PK_LoaiDay] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MatDongHo]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MatDongHo](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Description] [nvarchar](500) NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
 CONSTRAINT [PK_MatDongHo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderItem]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderItem](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[productId] [bigint] NULL,
	[orderId] [bigint] NULL,
	[sku] [varchar](100) NULL,
	[price] [float] NULL,
	[discount] [float] NULL,
	[quantity] [smallint] NULL,
	[content] [nvarchar](max) NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[IdLoaiDay] [bigint] NULL,
	[IdMatDH] [bigint] NULL,
	[Description] [nvarchar](max) NULL,
	[Price] [float] NULL,
	[Color] [nvarchar](50) NULL,
	[Weight] [float] NULL,
	[Sex] [bit] NULL,
	[IdBrand] [bigint] NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserAccount]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserAccount](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[userName] [varchar](80) NOT NULL,
	[userPassword] [char](128) NULL,
	[firstName] [nvarchar](50) NULL,
	[lastName] [nvarchar](50) NULL,
	[sex] [bit] NULL,
	[phone] [nchar](20) NULL,
	[email] [varchar](150) NULL,
	[registedAt] [datetime] NULL,
	[lastLogin] [datetime] NULL,
	[deleted] [bit] NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserOrder]    Script Date: 11/30/2020 11:22:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserOrder](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[userId] [bigint] NULL,
	[sessionId] [varchar](100) NULL,
	[token] [varchar](100) NULL,
	[status] [smallint] NULL,
	[itemDiscount] [float] NULL,
	[tax] [float] NULL,
	[shipping] [float] NULL,
	[total] [float] NULL,
	[discount] [float] NULL,
	[grandTotal] [float] NULL,
	[firstName] [nvarchar](50) NULL,
	[lastName] [nvarchar](50) NULL,
	[phone] [nchar](20) NULL,
	[city] [nvarchar](100) NULL,
	[province] [nvarchar](100) NULL,
	[content] [nvarchar](max) NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Cart]  WITH CHECK ADD  CONSTRAINT [FK_Cart_UserAccount] FOREIGN KEY([userId])
REFERENCES [dbo].[UserAccount] ([id])
GO
ALTER TABLE [dbo].[Cart] CHECK CONSTRAINT [FK_Cart_UserAccount]
GO
ALTER TABLE [dbo].[CartItem]  WITH CHECK ADD  CONSTRAINT [FK_CartItem_Cart] FOREIGN KEY([cartId])
REFERENCES [dbo].[Cart] ([id])
GO
ALTER TABLE [dbo].[CartItem] CHECK CONSTRAINT [FK_CartItem_Cart]
GO
ALTER TABLE [dbo].[CartItem]  WITH CHECK ADD  CONSTRAINT [FK_CartItem_Product] FOREIGN KEY([productId])
REFERENCES [dbo].[Product] ([Id])
GO
ALTER TABLE [dbo].[CartItem] CHECK CONSTRAINT [FK_CartItem_Product]
GO
ALTER TABLE [dbo].[Image]  WITH CHECK ADD  CONSTRAINT [FK_Image_Product1] FOREIGN KEY([IdProduct])
REFERENCES [dbo].[Product] ([Id])
GO
ALTER TABLE [dbo].[Image] CHECK CONSTRAINT [FK_Image_Product1]
GO
ALTER TABLE [dbo].[OrderItem]  WITH CHECK ADD  CONSTRAINT [FK_OrderItem_Product] FOREIGN KEY([productId])
REFERENCES [dbo].[Product] ([Id])
GO
ALTER TABLE [dbo].[OrderItem] CHECK CONSTRAINT [FK_OrderItem_Product]
GO
ALTER TABLE [dbo].[OrderItem]  WITH CHECK ADD  CONSTRAINT [FK_OrderItem_UserOrder] FOREIGN KEY([orderId])
REFERENCES [dbo].[UserOrder] ([id])
GO
ALTER TABLE [dbo].[OrderItem] CHECK CONSTRAINT [FK_OrderItem_UserOrder]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_Brand] FOREIGN KEY([IdBrand])
REFERENCES [dbo].[Brand] ([Id])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_Brand]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_LoaiDay] FOREIGN KEY([IdLoaiDay])
REFERENCES [dbo].[LoaiDay] ([Id])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_LoaiDay]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_MatDongHo] FOREIGN KEY([IdMatDH])
REFERENCES [dbo].[MatDongHo] ([Id])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_MatDongHo]
GO
ALTER TABLE [dbo].[UserOrder]  WITH CHECK ADD  CONSTRAINT [FK_UserOrder_UserAccount] FOREIGN KEY([userId])
REFERENCES [dbo].[UserAccount] ([id])
ON UPDATE SET NULL
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[UserOrder] CHECK CONSTRAINT [FK_UserOrder_UserAccount]
GO
