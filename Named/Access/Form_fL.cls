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
'strK - ��� ��������� ���� �����, strF - ��� ����� �������� ����������� �������� ����, strT - ��� ������� ��������� ������ ��������� ���� �����
'strP - ��� ���� (�������) ������� (������� ����� ����� - �������, �������, �� ���� ���� ������� ����� ������)
'strRP - ������ ����������� ����������� �� �������� ��������� ���� �����
'strReductRP1 - ��������� �����������1 ����������� �� �������� ��������� ���� ����� (��� ������ 8 �������� - ""SELECT ")
'strReductRP2 - ��������� �����������2 ����������� �� �������� ��������� ���� ����� (��� ��������� �������� - " FROM... ;" (�������� ��� �������� � ������� �������������� ��� ������� ������� " FROM tD;")
  
  strK = Screen.ActiveControl.name
  strT = f_strT()
  strP = f_strP()
  strQT = "t" & strK
  MsgBox (IsExists(tblName:=strQT))
  strQF = "f" & strK
  MsgBox (IsExists2(fName:=strQF))
  
    ' ������������ ������ ��� ��������������� ��������
    strName = NewData
    ' ������� ������� ��� ��������
    strWhere = "[strK] = '" & strName & "'"
        
    ' ����� ������������� �� ���������� ��������
    If vbYes = MsgBox("��������� ������: '' " & NewData & " '' ���  �  �����  �����������  �  ����. " & _
        "  ������  ���������  ������  �  �����  ������������  �  ����  ?", vbYesNo + vbQuestion + vbDefaultButton1, gstrAppTitle) Then
  
   Set DB = CurrentDb()
   Set RSt = DB.OpenRecordset(strT)
       RSt.AddNew
      RSt(strP) = strName    '   ���, ���    RSt![I] = strName (���������� ������� �� ������-�� �� �������� �������� ������ �� ������ ����� ���������� P, ���� �������� ��� ������� �� ������ ��� ���������� � ������� ��� �������, �������� I)
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
'strK - ��� ���� �����, strT - ��� �������, strP - ��� ���� (�������) ������� (������� ����� ����� - �������, �������, �� ���� ���� ������� ����� ������)
  strK = "kO"
  strT = "tO"
  strP = "O"
    ' ������������ ������ ��� ��������������� ��������
    strName = NewData
    ' ������� ������� ��� ��������
    strWhere = "[strK] = '" & strName & "'"
        
    ' ����� ������������� �� ���������� ��������
    If vbYes = MsgBox("��������� ������: '' " & NewData & " '' ���  �  �����  �����������  �  ����. " & _
        "  ������  ���������  ������  �  �����  ������������  �  ����  ?", vbYesNo + vbQuestion + vbDefaultButton1, gstrAppTitle) Then
  
   Set DB = CurrentDb()
   Set RSt = DB.OpenRecordset(strT)
       RSt.AddNew
      RSt(strP) = strName    '   ���, ���    RSt![I] = strName (���������� ������� �� ������-�� �� �������� �������� ������ �� ������ ����� ���������� P, ���� �������� ��� ������� �� ������ ��� ���������� � ������� ��� �������, �������� I)
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
'strK - ��� ��������� ���� �����, strF - ��� ����� �������� ����������� �������� ����, strT - ��� ������� ��������� ������ ��������� ���� �����
'strP - ��� ���� (�������) ������� (������� ����� ����� - �������, �������, �� ���� ���� ������� ����� ������)
'strRP - ������ ����������� ����������� �� �������� ��������� ���� �����
'strReductRP1 - ��������� �����������1 ����������� �� �������� ��������� ���� ����� (��� ������ 8 �������� - ""SELECT ")
'strReductRP2 - ��������� �����������2 ����������� �� �������� ��������� ���� ����� (��� ��������� �������� - " FROM... ;" (�������� ��� �������� � ������� �������������� ��� ������� ������� " FROM tD;")
  
  strK = Screen.ActiveControl.name
  strT = f_strT()
  strP = f_strP()
    ' ������������ ������ ��� ��������������� ��������
    strName = NewData
    ' ������� ������� ��� ��������
    strWhere = "[strK] = '" & strName & "'"
        
    ' ����� ������������� �� ���������� ��������
    If vbYes = MsgBox("��������� ������: '' " & NewData & " '' ���  �  �����  �����������  �  ����. " & _
        "  ������  ���������  ������  �  �����  ������������  �  ����  ?", vbYesNo + vbQuestion + vbDefaultButton1, gstrAppTitle) Then
  
   Set DB = CurrentDb()
   Set RSt = DB.OpenRecordset(strT)
       RSt.AddNew
      RSt(strP) = strName    '   ���, ���    RSt![I] = strName (���������� ������� �� ������-�� �� �������� �������� ������ �� ������ ����� ���������� P, ���� �������� ��� ������� �� ������ ��� ���������� � ������� ��� �������, �������� I)
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



Private Sub �������������_����_�����_�����_Click()
DoCmd.OpenForm "fF"
End Sub

Private Sub kI_GotFocus()
Me.Form.Refresh
End Sub

Private Sub kI_NotInList(NewData As String, Response As Integer)
Dim RSt As DAO.Recordset, DB As DAO.Database
Dim strName As String, strWhere As String, strK As String, strT As String, strP As String
'strK - ��� ���� �����, strT - ��� �������, strP - ��� ���� (�������) ������� (������� ����� ����� - �������, �������, �� ���� ���� ������� ����� ������)
  strK = "kI"
  strT = "tI"
  strP = "I"
    ' ������������ ������ ��� ��������������� ��������
    strName = NewData
    ' ������� ������� ��� ��������
    strWhere = "[strK] = '" & strName & "'"
        
    ' ����� ������������� �� ���������� ��������
    If vbYes = MsgBox("��������� ������: '' " & NewData & " '' ���  �  �����  �����������  �  ����. " & _
        "  ������  ���������  ������  �  �����  ������������  �  ����  ?", vbYesNo + vbQuestion + vbDefaultButton1, gstrAppTitle) Then
  
   Set DB = CurrentDb()
   Set RSt = DB.OpenRecordset(strT)
       RSt.AddNew
      RSt(strP) = strName    '   ���, ���    RSt![I] = strName (���������� ������� �� ������-�� �� �������� �������� ������ �� ������ ����� ���������� P, ���� �������� ��� ������� �� ������ ��� ���������� � ������� ��� �������, �������� I)
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


Private Sub �������_kF_Click()
DoCmd.OpenForm "fF"
End Sub

Private Sub �������_kI_Click()
DoCmd.OpenForm "fI"
End Sub

Private Sub �������_kO_Click()
DoCmd.OpenForm "fO"
End Sub

Public Function f_strT()
Dim strName As String, strWhere As String, strK As String, strF As String, strP As String, strT As String, strRP As String
Dim strReductRP1 As String, strReductRP2 As String
'strK - ��� ��������� ���� �����, strF - ��� ����� �������� ����������� �������� ����, strT - ��� ������� ��������� ������ ��������� ���� �����
'strP - ��� ���� (�������) ������� (������� ����� ����� - �������, �������, �� ���� ���� ������� ����� ������)
'strRP - ������ ����������� ����������� �� �������� ��������� ���� �����
'strReductRP1 - ��������� �����������1 ����������� �� �������� ��������� ���� ����� (��� ������ 8 �������� - ""SELECT ")
'strReductRP2 - ��������� �����������2 ����������� �� �������� ��������� ���� ����� (��� ��������� �������� - " FROM... ;" (�������� ��� �������� � ������� �������������� ��� ������� ������� " FROM tD;")

Dim bytePosOfEmptySpace, bytePosOfPoint, byteAllCharacters As Byte
'   bytePosOfEmptySpace - ���������� ����� ������� (� ���� �� �����) ������� � ��������� ����������� ����������� �� �������� ��������� ���� �����

'   ���������� ��� ��������� ���� �����
   strK = Screen.ActiveControl.name
   
'   ���������� ��� ����� ������� ����������� �������� ���� �����
   strF = Screen.ActiveControl.Parent.name
   
'   ���������� ����������� ����������� �� �������� ��������� ���� �����
   strRP = Forms(strF).Controls(strK).RowSource
   
'   ���������� (������� ������� ������� - ""SELECT ",) ����������� ����������� ����������� �� �������� ��������� ���� �����
   strReductRP1 = Mid(strRP, 8)
   
'   ���������� ���������� ����� (� ���� �� �����) ������� � ����������� ����������� ���������� �� �������� ��������� ���� �����
   bytePosOfEmptySpace = InStr(strReductRP1, " ")
   
'   ���������� ������� ������������ ����������� ������������ �� �������� ��������� ���� ����� �������� �� ���� ������ ������� ���� ������� � ��� ���� ����������� ������ (�������� "tD.kD" )
   strReductRP2 = Left(strReductRP1, bytePosOfEmptySpace - 1)
      
'   ���������� ���������� ����� ����� ����� ������� ���������� ������������ ��� ������� � ��� ���� ������� ��������� ������ ��������� ���� �����
   bytePosOfPoint = InStrRev(strReductRP2, ".")
   
'   ���������� ��� ������� ��������� ��������� ���� �����
   strT = Left(strReductRP2, bytePosOfPoint - 1)
   byteAllCharacters = Len(strReductRP2)
'   ���������� ��� ���� ������� ��������� ��������� ���� �����
   strP = Right(strReductRP2, byteAllCharacters - bytePosOfPoint)
   f_strT = strT

End Function


Public Function f_strP()
Dim strName As String, strWhere As String, strK As String, strF As String, strP As String, strT As String, strRP As String
Dim strReductRP1 As String, strReductRP2 As String
'strK - ��� ��������� ���� �����, strF - ��� ����� �������� ����������� �������� ����, strT - ��� ������� ��������� ������ ��������� ���� �����
'strP - ��� ���� (�������) ������� (������� ����� ����� - �������, �������, �� ���� ���� ������� ����� ������)
'strRP - ������ ����������� ����������� �� �������� ��������� ���� �����
'strReductRP1 - ��������� �����������1 ����������� �� �������� ��������� ���� ����� (��� ������ 8 �������� - ""SELECT ")
'strReductRP2 - ��������� �����������2 ����������� �� �������� ��������� ���� ����� (��� ��������� �������� - " FROM... ;" (�������� ��� �������� � ������� �������������� ��� ������� ������� " FROM tD;")

Dim bytePosOfEmptySpace, bytePosOfPoint, byteAllCharacters As Byte
'   bytePosOfEmptySpace - ���������� ����� ������� (� ���� �� �����) ������� � ��������� ����������� ����������� �� �������� ��������� ���� �����

'   ���������� ��� ��������� ���� �����
   strK = Screen.ActiveControl.name
   
'   ���������� ��� ����� ������� ����������� �������� ���� �����
   strF = Screen.ActiveControl.Parent.name
   
'   ���������� ����������� ����������� �� �������� ��������� ���� �����
   strRP = Forms(strF).Controls(strK).RowSource
   
'   ���������� (������� ������� ������� - ""SELECT ",) ����������� ����������� ����������� �� �������� ��������� ���� �����
   strReductRP1 = Mid(strRP, 8)
   
'   ���������� ���������� ����� (� ���� �� �����) ������� � ����������� ����������� ���������� �� �������� ��������� ���� �����
   bytePosOfEmptySpace = InStr(strReductRP1, " ")
   
'   ���������� ������� ������������ ����������� ������������ �� �������� ��������� ���� ����� �������� �� ���� ������ ������� ���� ������� � ��� ���� ����������� ������ (�������� "tD.kD" )
   strReductRP2 = Left(strReductRP1, bytePosOfEmptySpace - 1)
      
'   ���������� ���������� ����� ����� ����� ������� ���������� ������������ ��� ������� � ��� ���� ������� ��������� ������ ��������� ���� �����
   bytePosOfPoint = InStrRev(strReductRP2, ".")
   
'   ���������� ��� ������� ��������� ��������� ���� �����
   strT = Left(strReductRP2, bytePosOfPoint - 1)
   byteAllCharacters = Len(strReductRP2)
'   ���������� ��� ���� ������� ��������� ��������� ���� �����
   strP = Right(strReductRP2, byteAllCharacters - bytePosOfPoint)
   f_strP = strP
End Function
