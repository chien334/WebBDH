USE [BDH]
GO
SET IDENTITY_INSERT [dbo].[Brand] ON 

INSERT [dbo].[Brand] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (1, N'nha phat hanh 1', N'nha phat hanh 1', N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Brand] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (2, N'nha phat hanh 2', N'nha phat hanh 2', N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Brand] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (3, N'nha phat hanh 1', N'nha phat hanh 1', N'admin', CAST(N'2020-11-28T11:37:07.357' AS DateTime), N'admin', CAST(N'2020-11-28T11:37:07.357' AS DateTime))
INSERT [dbo].[Brand] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (4, N'nhà phát hành 3', N'nhà phát hành 3', N'admin', CAST(N'2020-11-28T11:38:08.603' AS DateTime), N'admin', CAST(N'2020-11-28T11:38:08.600' AS DateTime))
INSERT [dbo].[Brand] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (5, N'nha phat hanh 4', N'nha phat hanh 4', N'admin', CAST(N'2020-11-29T16:43:22.150' AS DateTime), N'admin', CAST(N'2020-11-29T16:43:22.150' AS DateTime))
SET IDENTITY_INSERT [dbo].[Brand] OFF
GO
SET IDENTITY_INSERT [dbo].[LoaiDay] ON 

INSERT [dbo].[LoaiDay] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (1, N'loai day 1', N'loai day 1', N'admin', NULL, N'admin', NULL)
INSERT [dbo].[LoaiDay] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (2, N'loai day 2', N'loai day 2', N'admin', NULL, N'admin', NULL)
INSERT [dbo].[LoaiDay] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (3, N'loai day 3', N'loai day 3', N'admin', NULL, N'admin', NULL)
INSERT [dbo].[LoaiDay] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (4, N'loai day 4', N'loai day 4', N'admin', NULL, N'admin', NULL)
SET IDENTITY_INSERT [dbo].[LoaiDay] OFF
GO
SET IDENTITY_INSERT [dbo].[MatDongHo] ON 

INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (1, N'mat dong ho 1', N'mat dong ho 1', N'admin', NULL, N'admin', NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (2, N'mat dong ho 2', N'mat dong ho 2', N'admin', NULL, N'admin', NULL)
INSERT [dbo].[MatDongHo] ([Id], [Name], [Description], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (3, N'mat dong ho 3', N'mat dong ho 3', N'admin', NULL, N'admin', NULL)
SET IDENTITY_INSERT [dbo].[MatDongHo] OFF
GO
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (1, N'dong ho 1', 2, 1, N'ngon bo re', 2000000, N'red', 0.35, 1, 1, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (2, N'dong ho 2', 1, 1, N'ngon bo re', 2000000, N'red', 0.35, 0, 2, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (3, N'dong ho 3', 2, 3, N'ngon bo re', 2000000, N'red', 0.35, 1, 3, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (4, N'dong ho 4', 3, 2, N'ngon bo re', 2000000, N'red', 0.35, 0, 3, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (5, N'dong ho 5', 4, 1, N'ngon bo re', 2000000, N'red', 0.35, 0, 2, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (6, N'dong ho 6', 1, 2, N'ngon bo re', 2000000, N'red', 0.35, 0, 1, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (7, N'dong ho 7', 2, 3, N'ngon bo re', 2000000, N'red', 0.35, 1, 1, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (8, N'dong ho 8', 3, 2, N'ngon bo re', 2000000, N'red', 0.35, 1, 2, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (9, N'dong ho 9', 3, 3, N'ngon bo re', 2000000, N'red', 0.35, 1, 3, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (10, N'dong ho 10', 1, 3, N'ngon bo re', 2000000, N'red', 0.35, 0, 2, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (11, N'dong ho 11', 2, 2, N'ngon bo re', 2000000, N'red', 0.35, 0, 1, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Product] ([Id], [Name], [IdLoaiDay], [IdMatDH], [Description], [Price], [Color], [Weight], [Sex], [IdBrand], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (12, N'dong ho 12', 3, 2, N'ngon bo re', 2000000, N'red', 0.35, 0, 1, N'admin', NULL, N'admin', NULL)
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
SET IDENTITY_INSERT [dbo].[UserAccount] ON 

INSERT [dbo].[UserAccount] ([id], [userName], [userPassword], [firstName], [lastName], [sex], [phone], [email], [registedAt], [lastLogin], [deleted], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (1, N'chien123', N'chien123                                                                                                                        ', N'chien', N'le', 1, N'0979290076          ', N'chiencool334@gmail.com', NULL, NULL, 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[UserAccount] ([id], [userName], [userPassword], [firstName], [lastName], [sex], [phone], [email], [registedAt], [lastLogin], [deleted], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (3, N'chien1234', N'chien123                                                                                                                        ', N'chien', N'le quyet', 0, N'0979290073          ', N'chiencool334@gmail.com', NULL, NULL, NULL, N'admin', CAST(N'2020-11-29T11:47:44.153' AS DateTime), N'admin', CAST(N'2020-11-29T11:47:44.153' AS DateTime))
INSERT [dbo].[UserAccount] ([id], [userName], [userPassword], [firstName], [lastName], [sex], [phone], [email], [registedAt], [lastLogin], [deleted], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (4, N'chien12345', N'chien1234                                                                                                                       ', N'chien', N'le quyet', 0, N'0979290073          ', N'chiencool334@gmail.com', NULL, NULL, NULL, N'admin', CAST(N'2020-11-29T11:48:46.717' AS DateTime), N'admin', CAST(N'2020-11-29T11:48:46.717' AS DateTime))
INSERT [dbo].[UserAccount] ([id], [userName], [userPassword], [firstName], [lastName], [sex], [phone], [email], [registedAt], [lastLogin], [deleted], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (5, N'chien1234565', N'chien12345                                                                                                                      ', N'chien', N'le quyet', 0, N'0979290073          ', N'chiencool334@gmail.com', NULL, NULL, NULL, N'admin', CAST(N'2020-11-29T11:51:04.743' AS DateTime), N'admin', CAST(N'2020-11-29T11:51:04.743' AS DateTime))
SET IDENTITY_INSERT [dbo].[UserAccount] OFF
GO
INSERT [dbo].[Image] ([Id], [path], [stt], [IdProduct], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (1, N'hinhanh1.jpg                                                                                                                                                                                                                                                   ', 1, 2, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Image] ([Id], [path], [stt], [IdProduct], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (2, N'hinhanh1.jpg                                                                                                                                                                                                                                                   ', 2, 2, N'admin', NULL, N'admin', NULL)
INSERT [dbo].[Image] ([Id], [path], [stt], [IdProduct], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime]) VALUES (3, N'hinhanh1.jpg                                                                                                                                                                                                                                                   ', 3, 2, N'admin', NULL, N'admin', NULL)
GO
INSERT [dbo].[AccountAdmin] ([Id], [UserName], [Password], [FirstName], [LastName], [Sex], [Phone], [Email], [CreateBy], [CreateTime], [LastUpdateBy], [LastUpdateTime], [Role], [Deleted]) VALUES (1, N'chien123', N'chien123                                                                                                                        ', N'le quyet ', N'chien', 1, N'0979290073          ', N'chiencool', NULL, NULL, NULL, NULL, N'admin     ', 0)
GO
