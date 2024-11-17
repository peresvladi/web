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
 
 
 Dim dbs As Database
 Dim TextPart, NPart, Pash, Test As String
 Dim NameTable As String
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

'rngDocOne.Select
'StartValueOne = Plus
'EndValueOne = Plus
'rngDocOne.SetRange Start:=StartValueOne, End:=EndValueOne
'Set rngDocTwo = rngDocOne.GoToNext(What:=wdGoToLine)
'EndValueOne = rngDocTwo.End

Dim PlusNewOne As Long
Dim PlusNewTwo As Long
PlusNewOne = 0
PlusNewTwo = 0

Set rngDocOne = oDoc.Range(Start:=PlusNewOne, End:=PlusNewTwo)
Set rngDocTwo = oDoc.Range(Start:=PlusNewOne, End:=PlusNewTwo)
Set rngDocGeneral = oDoc.Range(Start:=PlusNewOne, End:=PlusNewTwo)

For iCounter = 1 To 22
rngDocGeneral.SetRange Start:=PlusNewOne, End:=PlusNewTwo
rngDocGeneral.Select
MsgBox (rngDocGeneral.Text)
PlusNewOne = PlusNewTwo
Set rngDocTwo = rngDocTwo.GoToNext(wdGoToLine)
PlusNewTwo = rngDocTwo.End

Next
''MsgBox (oDoc.Characters.Count)
''oWord.Documents.Add(Pash).Activate
''oDoc.Activate

''oWord.Documents(Pash).Activate
''oWord.ActiveWindow.WindowState = wdWindowStateMaximize

'''oDoc.Close SaveChanges:=wdDoNotSaveChanges

'''Set oWord = Nothing

End If
 
 ' Modify this line to include the path to Northwind
        ' on your computer.
Set dbs = OpenDatabase("DatabasePolice.accdb")
''Set dbs = OpenDatabase(CarrentDB)

NameTable = "Exspsww"
TextPart = CodeCreateTable(NameTable, 3)
'MsgBox (TextPart)
dbs.Execute (TextPart)
 
Screen.Application.RefreshDatabaseWindow
'        Access.Application.RefreshDatabaseWindow
                     
dbs.Close
        
''DoCmd.Save acTable, NameTable
 
End Sub

Function CodeCreateTable(NameTable As String, CountLine As Integer)
Const NameFilde As String = "P"
Dim CenterTextBody As String

For iCounter = 1 To CountLine
CenterTextBody = CenterTextBody + (NameFilde & CStr(iCounter)) & " TEXT(120), "

'MsgBox (CenterTextBody)

Next

Dim TextBody As String
Const —ommand“ÂıÚ As String = "CREATE TABLE "
TextBody = —ommand“ÂıÚ & NameTable & "(" & Left(CenterTextBody, (Len(CenterTextBody) - 2)) & ");"
CodeCreateTable = TextBody
End Function
