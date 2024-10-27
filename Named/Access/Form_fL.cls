VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "Form_fL"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = True
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Compare Database
Public Function IsExists(tblName As String) As Boolean
On Error Resume Next
Dim realName As String
IsExists = False
realName = CurrentData.AllTables(tblName).name
If realName = tblName Then IsExists = True
End Function
Public Function IsExists2(fName As String) As Boolean
On Error Resume Next
Dim realName As String
IsExists2 = False
'realName = CurrentData.AllForms.Forms.Form(fName).Name
realName = CurrentProject.AllForms(fName).name
If realName = fName Then IsExists2 = True
End Function
Private Sub kD_NotInList(NewData As String, Response As Integer)
Dim RSt As DAO.Recordset, DB As DAO.Database
Dim strName As String, strWhere As String, strK As String, strF As String, strP As String, strT As String, strQT As String, strQF As String, strRP As String
Dim strReductRP1 As String, strReductRP2 As String
'strK - имя активного поля формы, strF - имя формы которому принадлежит активное поле, strT - имя таблицы источника данных активного поля формы
'strP - имя поля (столбца) таблицы (имеется ввиду форма - текущая, таблица, та куда буду внесены новые данные)
'strRP - строка предложения указывающая на источник активного поля формы
'strReductRP1 - усеченное предложение1 указывающее на источник активного поля формы (без первых 8 символов - ""SELECT ")
'strReductRP2 - усеченное предложение2 указывающее на источник активного поля формы (без последних символов - " FROM... ;" (например без симфолов в условия использованной для примера таблицы " FROM tD;")
  
  strK = Screen.ActiveControl.name
  strT = f_strT()
  strP = f_strP()
  strQT = "t" & strK
  MsgBox (IsExists(tblName:=strQT))
  strQF = "f" & strK
  MsgBox (IsExists2(fName:=strQF))
  
    ' Пользователь вводит имя несуществующего продукта
    strName = NewData
    ' Задание условий для проверки
    strWhere = "[strK] = '" & strName & "'"
        
    ' Зарос подтверждение на добавление продукта
    If vbYes = MsgBox("Внесенных данных: '' " & NewData & " '' нет  в  числе  ипользуемых  в  поле. " & _
        "  ВНЕСТИ  УКАЗАННЫЕ  ДАННЫЕ  В  ЧИСЛО  ИСПОЛЬЗУЕМЫХ  В  ПОЛЕ  ?", vbYesNo + vbQuestion + vbDefaultButton1, gstrAppTitle) Then
  
   Set DB = CurrentDb()
   Set RSt = DB.OpenRecordset(strT)
       RSt.AddNew
      RSt(strP) = strName    '   или, так    RSt![I] = strName (правильный вариант но почему-то не понимает передачу ссылки на объект через переменную P, надо указываь имя объекта на прямую без переменной в формате без кавычек, например I)
       RSt.Update
       RSt.Close
        Response = acDataErrAdded
        Me.Form.Controls(strK).Value = strName
        Me.Form.Controls(strK).Requery
        Me.Form.Controls(strK).SetFocus
        Else
        ' Don't want to add what they typed - show standard error message
        Response = acDataErrDisplay
        
        End If
        
        End Sub

Private Sub kF_DblClick(Cancel As Integer)
Dim nameCls As String
Dim MyFormObj As Form_fL, MyContrlObj As Control
nameCls = Screen.ActiveControl.name
Set MyFormObj = Me.ActiveControl.Parent

Screen.PreviousControl.SetFocus
Me.Controls(nameCls).Visible = False
MsgBox (nameCls)
Me.Controls(nameCls).Visible = True
'For Each MyContrlObj In MyFormObj
'MsgBox (MyContrlObj)
'Next







'Me.Controls(nameCls).Parent.SetFocus
'Me.Controls(nameCls).Visible = False
'MsgBox (nameCls)
'Me.Controls(nameCls).Visible = True




'Dim MyControlName As String
'Dim MYkO As Control
'MyControlName = ActiveControl.name
'DoCmd.FindNext
'Me.Controls(MyControlName).Visible = False
'MsgBox (MeCtontrolName)
'Me.Controls(MyControlName).Visible = True

End Sub


Private Sub kO_NotInList(NewData As String, Response As Integer)
Dim RSt As DAO.Recordset, DB As DAO.Database
Dim strName As String, strWhere As String, strK As String, strT As String, strP As String
'strK - имя поля формы, strT - имя таблицы, strP - имя поля (столбца) таблицы (имеется ввиду форма - текущая, таблица, та куда буду внесены новые данные)
  strK = "kO"
  strT = "tO"
  strP = "O"
    ' Пользователь вводит имя несуществующего продукта
    strName = NewData
    ' Задание условий для проверки
    strWhere = "[strK] = '" & strName & "'"
        
    ' Зарос подтверждение на добавление продукта
    If vbYes = MsgBox("Внесенных данных: '' " & NewData & " '' нет  в  числе  ипользуемых  в  поле. " & _
        "  ВНЕСТИ  УКАЗАННЫЕ  ДАННЫЕ  В  ЧИСЛО  ИСПОЛЬЗУЕМЫХ  В  ПОЛЕ  ?", vbYesNo + vbQuestion + vbDefaultButton1, gstrAppTitle) Then
  
   Set DB = CurrentDb()
   Set RSt = DB.OpenRecordset(strT)
       RSt.AddNew
      RSt(strP) = strName    '   или, так    RSt![I] = strName (правильный вариант но почему-то не понимает передачу ссылки на объект через переменную P, надо указываь имя объекта на прямую без переменной в формате без кавычек, например I)
       RSt.Update
       RSt.Close
        Response = acDataErrAdded
        Me.Form.Controls(strK).Value = strName
        Me.Form.Controls(strK).Requery
        Me.Form.Controls(strK).SetFocus
        Else
        ' Don't want to add what they typed - show standard error message
        Response = acDataErrDisplay
        
        End If
        End Sub
        
Private Sub kF_GotFocus()
Me.Form.Refresh
End Sub

Private Sub kF_NotInList(NewData As String, Response As Integer)
Dim RSt As DAO.Recordset, DB As DAO.Database
Dim strName As String, strWhere As String, strK As String, strF As String, strP As String, strT As String, strRP As String
Dim strReductRP1 As String, strReductRP2 As String
'strK - имя активного поля формы, strF - имя формы которому принадлежит активное поле, strT - имя таблицы источника данных активного поля формы
'strP - имя поля (столбца) таблицы (имеется ввиду форма - текущая, таблица, та куда буду внесены новые данные)
'strRP - строка предложения указывающая на источник активного поля формы
'strReductRP1 - усеченное предложение1 указывающее на источник активного поля формы (без первых 8 символов - ""SELECT ")
'strReductRP2 - усеченное предложение2 указывающее на источник активного поля формы (без последних символов - " FROM... ;" (например без симфолов в условия использованной для примера таблицы " FROM tD;")
  
  strK = Screen.ActiveControl.name
  strT = f_strT()
  strP = f_strP()
    ' Пользователь вводит имя несуществующего продукта
    strName = NewData
    ' Задание условий для проверки
    strWhere = "[strK] = '" & strName & "'"
        
    ' Зарос подтверждение на добавление продукта
    If vbYes = MsgBox("Внесенных данных: '' " & NewData & " '' нет  в  числе  ипользуемых  в  поле. " & _
        "  ВНЕСТИ  УКАЗАННЫЕ  ДАННЫЕ  В  ЧИСЛО  ИСПОЛЬЗУЕМЫХ  В  ПОЛЕ  ?", vbYesNo + vbQuestion + vbDefaultButton1, gstrAppTitle) Then
  
   Set DB = CurrentDb()
   Set RSt = DB.OpenRecordset(strT)
       RSt.AddNew
      RSt(strP) = strName    '   или, так    RSt![I] = strName (правильный вариант но почему-то не понимает передачу ссылки на объект через переменную P, надо указываь имя объекта на прямую без переменной в формате без кавычек, например I)
       RSt.Update
       RSt.Close
        Response = acDataErrAdded
        Me.Form.Controls(strK).Value = strName
        Me.Form.Controls(strK).Requery
        Me.Form.Controls(strK).SetFocus
        Else
        ' Don't want to add what they typed - show standard error message
        Response = acDataErrDisplay
        
        End If
End Sub



Private Sub редактировать_меню_через_форму_Click()
DoCmd.OpenForm "fF"
End Sub

Private Sub kI_GotFocus()
Me.Form.Refresh
End Sub

Private Sub kI_NotInList(NewData As String, Response As Integer)
Dim RSt As DAO.Recordset, DB As DAO.Database
Dim strName As String, strWhere As String, strK As String, strT As String, strP As String
'strK - имя поля формы, strT - имя таблицы, strP - имя поля (столбца) таблицы (имеется ввиду форма - текущая, таблица, та куда буду внесены новые данные)
  strK = "kI"
  strT = "tI"
  strP = "I"
    ' Пользователь вводит имя несуществующего продукта
    strName = NewData
    ' Задание условий для проверки
    strWhere = "[strK] = '" & strName & "'"
        
    ' Зарос подтверждение на добавление продукта
    If vbYes = MsgBox("Внесенных данных: '' " & NewData & " '' нет  в  числе  ипользуемых  в  поле. " & _
        "  ВНЕСТИ  УКАЗАННЫЕ  ДАННЫЕ  В  ЧИСЛО  ИСПОЛЬЗУЕМЫХ  В  ПОЛЕ  ?", vbYesNo + vbQuestion + vbDefaultButton1, gstrAppTitle) Then
  
   Set DB = CurrentDb()
   Set RSt = DB.OpenRecordset(strT)
       RSt.AddNew
      RSt(strP) = strName    '   или, так    RSt![I] = strName (правильный вариант но почему-то не понимает передачу ссылки на объект через переменную P, надо указываь имя объекта на прямую без переменной в формате без кавычек, например I)
       RSt.Update
       RSt.Close
        Response = acDataErrAdded
        Me.Form.Controls(strK).Value = strName
        Me.Form.Controls(strK).Requery
        Me.Form.Controls(strK).SetFocus
        Else
        ' Don't want to add what they typed - show standard error message
        Response = acDataErrDisplay
        
        End If
      
End Sub

Private Sub kO_GotFocus()
Me.Form.Refresh
End Sub


Private Sub РедМеню_kF_Click()
DoCmd.OpenForm "fF"
End Sub

Private Sub РедМеню_kI_Click()
DoCmd.OpenForm "fI"
End Sub

Private Sub РедМеню_kO_Click()
DoCmd.OpenForm "fO"
End Sub

Public Function f_strT()
Dim strName As String, strWhere As String, strK As String, strF As String, strP As String, strT As String, strRP As String
Dim strReductRP1 As String, strReductRP2 As String
'strK - имя активного поля формы, strF - имя формы которому принадлежит активное поле, strT - имя таблицы источника данных активного поля формы
'strP - имя поля (столбца) таблицы (имеется ввиду форма - текущая, таблица, та куда буду внесены новые данные)
'strRP - строка предложения указывающая на источник активного поля формы
'strReductRP1 - усеченное предложение1 указывающее на источник активного поля формы (без первых 8 символов - ""SELECT ")
'strReductRP2 - усеченное предложение2 указывающее на источник активного поля формы (без последних символов - " FROM... ;" (например без симфолов в условия использованной для примера таблицы " FROM tD;")

Dim bytePosOfEmptySpace, bytePosOfPoint, byteAllCharacters As Byte
'   bytePosOfEmptySpace - порядковое место первого (с лева на право) пробела в усеченном предложении указыающего на источник актвиного поля формы

'   возвращает имя активного поля формы
   strK = Screen.ActiveControl.name
   
'   возвращает имя формы которой принадлежит активное поле формы
   strF = Screen.ActiveControl.Parent.name
   
'   возвращает предложение указывающее на источник активного поля формы
   strRP = Forms(strF).Controls(strK).RowSource
   
'   возвращает (увирает символы команды - ""SELECT ",) сокращенное предложение указывающее на источник активного поля формы
   strReductRP1 = Mid(strRP, 8)
   
'   возвращает порядковый номер (с лева на право) пробела в сокращенном предложении указыающем на источник активного поля формы
   bytePosOfEmptySpace = InStr(strReductRP1, " ")
   
'   возвращает символы сокращенного предложения указывающего на источник активного поля формы оставляя из него только символы имен таблицы и его поля разделенные точкой (например "tD.kD" )
   strReductRP2 = Left(strReductRP1, bytePosOfEmptySpace - 1)
      
'   возвращает порядковый номер точки между набором симсоволов составляющих имя таблицы и имя поля таблицы источника данных активного поля формы
   bytePosOfPoint = InStrRev(strReductRP2, ".")
   
'   возвращает имя таблицы источника активного поля формы
   strT = Left(strReductRP2, bytePosOfPoint - 1)
   byteAllCharacters = Len(strReductRP2)
'   возвращает имя поля таблицы источника активного поля формы
   strP = Right(strReductRP2, byteAllCharacters - bytePosOfPoint)
   f_strT = strT

End Function


Public Function f_strP()
Dim strName As String, strWhere As String, strK As String, strF As String, strP As String, strT As String, strRP As String
Dim strReductRP1 As String, strReductRP2 As String
'strK - имя активного поля формы, strF - имя формы которому принадлежит активное поле, strT - имя таблицы источника данных активного поля формы
'strP - имя поля (столбца) таблицы (имеется ввиду форма - текущая, таблица, та куда буду внесены новые данные)
'strRP - строка предложения указывающая на источник активного поля формы
'strReductRP1 - усеченное предложение1 указывающее на источник активного поля формы (без первых 8 символов - ""SELECT ")
'strReductRP2 - усеченное предложение2 указывающее на источник активного поля формы (без последних символов - " FROM... ;" (например без симфолов в условия использованной для примера таблицы " FROM tD;")

Dim bytePosOfEmptySpace, bytePosOfPoint, byteAllCharacters As Byte
'   bytePosOfEmptySpace - порядковое место первого (с лева на право) пробела в усеченном предложении указыающего на источник актвиного поля формы

'   возвращает имя активного поля формы
   strK = Screen.ActiveControl.name
   
'   возвращает имя формы которой принадлежит активное поле формы
   strF = Screen.ActiveControl.Parent.name
   
'   возвращает предложение указывающее на источник активного поля формы
   strRP = Forms(strF).Controls(strK).RowSource
   
'   возвращает (увирает символы команды - ""SELECT ",) сокращенное предложение указывающее на источник активного поля формы
   strReductRP1 = Mid(strRP, 8)
   
'   возвращает порядковый номер (с лева на право) пробела в сокращенном предложении указыающем на источник активного поля формы
   bytePosOfEmptySpace = InStr(strReductRP1, " ")
   
'   возвращает символы сокращенного предложения указывающего на источник активного поля формы оставляя из него только символы имен таблицы и его поля разделенные точкой (например "tD.kD" )
   strReductRP2 = Left(strReductRP1, bytePosOfEmptySpace - 1)
      
'   возвращает порядковый номер точки между набором симсоволов составляющих имя таблицы и имя поля таблицы источника данных активного поля формы
   bytePosOfPoint = InStrRev(strReductRP2, ".")
   
'   возвращает имя таблицы источника активного поля формы
   strT = Left(strReductRP2, bytePosOfPoint - 1)
   byteAllCharacters = Len(strReductRP2)
'   возвращает имя поля таблицы источника активного поля формы
   strP = Right(strReductRP2, byteAllCharacters - bytePosOfPoint)
   f_strP = strP
End Function

