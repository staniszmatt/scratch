'This will only work for single letter at the end of the number
'If more letters are added, the ChangeNumbers Function will need updated

Sub ReNumber()
  Dim NewNumber As String
  Dim NumberPrompt As String
  Dim NumberTitle As String
  Dim StartingNumber As Long
  Dim DefaultNum As Long
  Dim userNum As Long
  Dim StartRng As Range
  Dim StartRngAddress As String
  Dim ChangedNumber As String
  Dim CellValueCheck As Boolean
  Dim CurrentCellValue As String
  Dim CellLocationVal As String
  Dim RowCounter As String
  Dim SelectedCol As String

  'Input Box Title and text with default
  NumberPrompt = "Input Starting Number"
  NumberTitle = "Re-Number"
  DefaultNum = 1
  CellValueCheck = True

  'Collect information from user
  NewNumber = Application.InputBox(NumberPrompt, NumberTilte, DefaultNum)
  Set StartRng = Application.InputBox("Select Where To Start", "Obtain Range", Type:=8)

  'Checking for good input
  If IsNumeric(NewNumber) Then
    If NewNumber > 0 Then
        'Enter code here
    Else
      MsgBox "Invalid Number"
      Call ReNumber
    End If
  Else
    MsgBox "Numbers Only!"
    Call ReNumber
  End If

  'Get start Location for changes
  StartRngAddress = StartRng.Address(0, 0)
  RowCounter = Right(StartRngAddress, 1)
    Debug.Print RowCounter & " Start Row"
  SelectedCol = Left(StartRngAddress, 1)
    Debug.Print SelectedCol & " Start Col"
  Do While CellValueCheck      
    Debug.Print StartRng & " Start Range"
    Debug.Print StartRngAddress & " Cell Location"
    CellLocationVal = SelectedCol & RowCounter
      Debug.Print CellLocationVal & " Current Cell Location"
    CurrentCellValue = Range(CellLocationVal)
      Debug.Print CurrentCellValue & " Current Cell Value Check"
    CellValueCheck = CellHasValue(CurrentCellValue)
      Debug.Print CellValueCheck & " Cell Value Boolean"
    If CellValueCheck Then
      ChangedNumber = ChangeNumbers(NewNumber, CurrentCellValue)
        Debug.Print ChangedNumber & " Returned Value"
      Cells(RowIndex:=RowCounter, ColumnIndex:=SelectedCol).Value = ChangedNumber          
      'Fix non repeat increament if there are letters already unless restarting at A
      NewNumber = NewNumber + 1          
    End If
    RowCounter = RowCounter + 1
  Loop
End Sub

Function ChangeNumbers(CurrentNumber, CellNumberInfo)
  Dim LetterAtEnd As String
  Debug.Print CurrentNumber & " Current Number"
  Debug.Print CellNumberInfo & " Cell Information"
  'If its a number with no letters, just return the number and exit
  If IsNumeric(CellNumberInfo) Then
    ChangeNumbers = CurrentNumber
    Exit Function
  End If
  'If there is a letter, replace old number with new number
  LetterAtEnd = Right(CellNumberInfo, 1)
  Debug.Print LetterAtEnd & " Letter Pulled"
  ChangeNumbers = CurrentNumber & LetterAtEnd
End Function

Function CellHasValue(CellValue)
  Debug.Print CellValue & " Cell Value Checked!"
  If CellValue = "" Then
    CellHasValue = False
    Exit Function
  Else
    CellHasValue = True
    Exit Function
  End If
End Function
