VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "Form_fManagement"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = True
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Compare Database

Private Sub  ÌÓÔÍ‡2_DblClick(Cancel As Integer)
 
 Dim TextPart, NPart, Pash, Test As String
 Dim NameTable As String
 Dim Count As Integer
 NameTable = "Exspswys"
 Count = 10
 Dim oWord As New Word.Application
 Dim oDoc As Word.Document
 Dim rngDocOne As Range
 Dim rngDocTwo As Range
 Dim rngDocGeneral As Range
 
Set oDlg = oWord.Dialogs(wdDialogFileOpen)

If oDlg.Display = -1 Then

Pash = oWord.Options.DefaultFilePath(wdCurrentFolderPath) & "\" & oDlg.Name
'MsgBox "Ã˚ ‚˚·‡ÎË Ù‡ÈÎ:" & Pash
oWord.Visible = True

Set oDoc = oWord.Documents.Open(Pash)

''Dim oCustomDocumentProperti As CustomProperty
'oDoc.CustomDocumentProperties
''Set oCustomDocumentProperties = oDoc.DocumentProperties

'MsgBox (oCustomDocumentProperties.Name)
'MsgBox (oCustomDocumentProperti.Name)
''For Each oCustomDocumentProperti In oCustomDocumentProperties


MsgBox (oDoc.Application.Width)

'''For Each prop In oDoc.CustomDocumentProperties
'''    MsgBox (prop.Name)
'''Next

''Next

Dim PlusNewOne As Long
Dim PlusNewTwo As Long
PlusNewOne = 0
PlusNewTwo = 0

Set rngDocOne = oDoc.Range(Start:=PlusNewOne, End:=PlusNewTwo)
Set rngDocTwo = oDoc.Range(Start:=PlusNewOne, End:=PlusNewTwo)
Set rngDocGeneral = oDoc.Range(Start:=PlusNewOne, End:=PlusNewTwo)

For iCounter = 1 To 10
Dim MyArray(11) As String
rngDocGeneral.SetRange Start:=PlusNewOne, End:=PlusNewTwo
rngDocGeneral.Select
'MsgBox (rngDocGeneral.Text)
MyArray(iCounter) = rngDocGeneral.Text
PlusNewOne = PlusNewTwo
Set rngDocTwo = rngDocTwo.GoToNext(wdGoToLine)
PlusNewTwo = rngDocTwo.End
Next

oDoc.Close SaveChanges:=wdDoNotSaveChanges
Set oDoc = Nothing
oWord.Quit
End If
 
 ' Modify this line to include the path to Northwind
        ' on your computer.
Dim dbs As Database
Set dbs = OpenDatabase("DatabasePolice.accdb")
'Set dbs = OpenDatabase(CarrentDB)


TextPart = CodeCreateTable(NameTable, Count)
'MsgBox (TextPart)
dbs.Execute (TextPart)
Screen.Application.RefreshDatabaseWindow
dbs.Close

 Call Assignment(MyArray, NameTable, Count)
  
  
        
''DoCmd.Save acTable, NameTable
 
End Sub

Function CodeCreateTable(NameTable As String, CountRow As Integer)
Const NameFilde As String = "P"
Dim CenterTextBody As String

For iCounter = 1 To CountRow
CenterTextBody = CenterTextBody + (NameFilde & CStr(iCounter)) & " TEXT(250), "

'MsgBox (CenterTextBody)

Next

Dim TextBody As String
Const —ommand“ÂıÚ As String = "CREATE TABLE "
TextBody = —ommand“ÂıÚ & NameTable & "(" & Left(CenterTextBody, (Len(CenterTextBody) - 2)) & ");"
CodeCreateTable = TextBody
End Function

Public Sub Assignment(ByRef Ar() As String, TblName As String, repetitions As Integer)
Dim DB As DAO.Database
  Dim MyRst As DAO.Recordset
  Set DB = CurrentDb
  Set MyRst = DB.OpenRecordset(TblName, dbOpenDynaset)
  Dim NameP As String
   NameP = "P"
   MyRst.AddNew
   For iCounter = 1 To repetitions
   
   MyRst(NameP & iCounter) = Ar(iCounter)
   Next
   MyRst.Update
   Screen.Application.RefreshDatabaseWindow
   MyRst.Close
End Sub

Private Sub  ÌÓÔÍ‡3_Click()
Dim oForm As Access.Form

Dim oDefaultControl As Control
Dim oNewControl As Control
Dim strControlSource As String
strControlSource = "SELECT P2 FROM Exspswys WHERE id = 1"
Set oForm = CreateForm

Forms(oForm.Name).Width = 15000
Forms(oForm.Name).RecordSource = "Exspswys"

'MsgBox (oForm.Name)
Set oDefaultControl = oForm.DefaultControl(acTextBox)
'oDefaultControl.FontSize = 12
With oDefaultControl
     .FontSize = 14
'    .AutoSize = True
'    .Locked = True
'    .MultLine = True
'    .WordWrap = True
'    .ControlSource = Exspswys.P2
End With
    

Set oNewControl = CreateControl(oForm.Name, acTextBox, , , "P2", 500, 500, 1200, 300)
DoCmd.Restore


End Sub
