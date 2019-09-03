'This will only work for single letter at the end of the number
'If more letters are added, the ChangeNumbers Function will need updated

Sub ReNumber()
  Dim NewNumber As Long
  Dim NewNumberInput As String
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
  Dim NextCellLocaiton As String
  Dim CellLocationVal As String
  Dim NextCellVal As String
  Dim RowCounter As Long
  Dim SelectedCol As String
  Dim LetterAtEnd As String

  'Input Box Title and text with default
  NumberPrompt = "Input Starting Number"
  NumberTitle = "Re-Number"
  DefaultNum = 1
  CellValueCheck = True

  'Collect information from user
  NewNumberInput = Application.InputBox(NumberPrompt, NumberTilte, DefaultNum)
  If NewNumberInput = "False" Then 
    Exit Sub
  End If
  On Error GoTo Canceled
  Set StartRng = Application.InputBox("Select Where To Start", "Obtain Range", Type:=8)

  'Checking for good input
  If IsNumeric(NewNumberInput) Then
    NewNumber = CInt(NewNumberInput)
    If NewNumber < 1 Then
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
  SelectedCol = Left(StartRngAddress, 1)
  Do While CellValueCheck      

    CellLocationVal = SelectedCol & RowCounter
    CheckNextCell = SelectedCol & RowCounter+1 
    CurrentCellValue = Range(CellLocationVal)
    NextCellVal = Range(CheckNextCell)
    CellValueCheck = CellHasValue(CurrentCellValue)

    If IsNumeric(NextCellVal) Then 
      Cells(RowIndex:=RowCounter+1, ColumnIndex:=SelectedCol).Value = NextCellVal & "A"
      NextCellVal = Range(CheckNextCell)
    End If 

    'Update the cell to new string
    If CellValueCheck Then
      ChangedNumber = ChangeNumbers(NewNumber, CurrentCellValue)
      Cells(RowIndex:=RowCounter, ColumnIndex:=SelectedCol).Value = ChangedNumber  

      'Don't incrament next cell starts with anything other than A
      LetterAtEnd = Right(NextCellVal, 1)
        Debug.Print LetterAtEnd & " Letter Check at end of next Cell"
      If LetterAtEnd = "A" OR LetterAtEnd = "a" Then
      NewNumber = NewNumber + 1   
      End If

    End If
    RowCounter = RowCounter + 1
  Loop

  Canceled:
End Sub

Function ChangeNumbers(CurrentNumber, CellNumberInfo)
  Dim LetterAtEnd As String

  'If its a number with no letters, just return the number and exit
  If IsNumeric(CellNumberInfo) Then
    ChangeNumbers = CurrentNumber & "A"
    Exit Function
  End If

  'If there is a letter, replace old number with new number
  LetterAtEnd = Right(CellNumberInfo, 1)
  LetterAtEnd = UCase(LetterAtEnd)
  ChangeNumbers = CurrentNumber & LetterAtEnd

End Function

Function CellHasValue(CellValue)

  If CellValue = "" Then
    CellHasValue = False
    Exit Function
  Else
    CellHasValue = True
    Exit Function
  End If

End Function
