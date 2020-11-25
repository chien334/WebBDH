USE [BDH]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 11/10/2020 8:44:10 PM ******/
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
/****** Object:  View [dbo].[v_Product]    Script Date: 11/10/2020 8:44:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create View [dbo].[v_Product]
as
select * from Product
GO
/****** Object:  Table [dbo].[AccountAdmin]    Script Date: 11/10/2020 8:44:11 PM ******/
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
	[Phone] [nchar](20) NULL,
	[Email] [varchar](150) NULL,
	[CreateBy] [nvarchar](50) NULL,
	[CreateTime] [datetime] NULL,
	[LastUpdateBy] [nvarchar](50) NULL,
	[LastUpdateTime] [datetime] NULL,
	[Deleted] [bit] NOT NULL,
 CONSTRAINT [PK_AccountAdmin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Brand]    Script Date: 11/10/2020 8:44:11 PM ******/
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
/****** Object:  Table [dbo].[Image]    Script Date: 11/10/2020 8:44:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[Id] [bigint] NOT NULL,
	[path] [nchar](255) NULL,
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
/****** Object:  Table [dbo].[LoaiDay]    Script Date: 11/10/2020 8:44:11 PM ******/
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
/****** Object:  Table [dbo].[MatDongHo]    Script Date: 11/10/2020 8:44:11 PM ******/
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
SET IDENTITY_INSERT [dbo].[MatDongHo] ON 

INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (1, N'Mat 1', N'mat 1', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (2, N'Mat 2', N'mat 2', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (3, N'Mat 1', N'mat 1', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (4, N'Mat 2', N'mat 2', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (5, N'Mat 1', N'mat 1', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (6, N'Mat 2', N'mat 2', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (7, N'Mat 1', N'mat 1', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (8, N'Mat 2', N'mat 2', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (9, N'Mat 1', N'mat 1', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (10, N'Mat 2', N'mat 2', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (11, N'Mat 1', N'mat 1', NULL, NULL, NULL, NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (12, N'Mat 2', N'mat 2', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[MatDongHo] OFF
GO
ALTER TABLE [dbo].[Image]  WITH CHECK ADD  CONSTRAINT [FK_Image_Product1] FOREIGN KEY([IdProduct])
REFERENCES [dbo].[Product] ([Id])
GO
ALTER TABLE [dbo].[Image] CHECK CONSTRAINT [FK_Image_Product1]
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
