'This will only work for single letter at the end of the number
'If more letters are added, the ChangeNumbers Function will need updated
'@ in cell will be ignored when changing numbers
'Blanks will be filled in with the next number
'Still need to figure out if to fix error if next number started with a letter other than "A"

Sub ReNumber()
  Dim NewNumber As Long
  Dim NewNumberInput As String
  Dim NumberPrompt As String
  Dim NumberTitle As String
  Dim DefaultNum As Long
  Dim StartRng As Range
  Dim StartRngAddress As String
  Dim CellRange() As String
  Dim ChangedNumber As String
  Dim LetterAtEnd As String
  
  Dim CellRng As Range
  Dim CellValues() As String

  'Input Box Title and text with default
  NumberPrompt = "Input Starting Number"
  NumberTitle = "Re-Number"
  DefaultNum = 1

  'Collect information from user
  NewNumberInput = Application.InputBox(NumberPrompt, NumberTilte, DefaultNum)
  If NewNumberInput = "False" Then
    Exit Sub
  End If
  On Error GoTo Canceled
  Set StartRng = Application.InputBox("Select The Range of the Row", "Obtain Range", Type:=8)

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
  CellRange() = Split(StartRngAddress, ":")
  Set CellRng = Range(StartRngAddress)
    
  'Loop through each cell within the selected cells
  For Each CellValue In CellRng
  
    'Getting Current and Next Cell Values
    CellValues() = GetCellValues(CellValue.Address(0, 0))
    
    'Skip numbering if @ in cell
    If CellValues(0) = "@" Then

      LetterAtEnd = Right(CellValues(1), 1)
      'Don't increment to next number update unless next cell starts with anything other than A
      If LetterAtEnd = "A" Or LetterAtEnd = "a" Then
        NewNumber = NewNumber + 1
      End If
      GoTo Skip

    End If
    
    'Set Number Change
    ChangedNumber = ChangeNumbers(NewNumber, CellValues(0))
    Range(CellValue.Address(0, 0)).Value = ChangedNumber

    'Don't increment to next number update unless next cell starts with anything other than A
    LetterAtEnd = Right(CellValues(1), 1)
      
    If LetterAtEnd = "A" Or LetterAtEnd = "a" Then
      NewNumber = NewNumber + 1
    End If
    
    'Remove A fix if ending past an empty cell
    If CellRange(1) = CellValue.Address(0, 0) Then
        If CellValues(1) = "A" Then

          Range(CellValue.Address(0, 0)).Offset(1, 0).Value = ""
            
        End If
    End If
    
    
    'Skipping any cells with @
Skip:
  Next CellValue
  
Canceled:
End Sub

Function GetCellValues(CurrentCellLocation)

    Dim NextCellLocation As String
    Dim ReturnValues() As String
    Dim NextValue As String
    'Alocate only 2 spots for the array
    ReDim Preserve ReturnValues(0)
    ReDim Preserve ReturnValues(1)
    
    'Checks to makes sure there is a letter "A" for numbers with no letters
    AddMissingALetterToNumber (CurrentCellLocation)
    'Storing first cell value
    ReturnValues(0) = Range(CurrentCellLocation).Value
    NextCellLocation = Range(CurrentCellLocation).Offset(1, 0).Address(0, 0)
    AddMissingALetterToNumber (NextCellLocation)
    'Store second cell value
    ReturnValues(1) = Range(CurrentCellLocation).Offset(1, 0).Value
    GetCellValues = ReturnValues()

End Function
'Check for blank cells or numbers with no letters and add "A" if True
Function AddMissingALetterToNumber(CellLocation)
    
    Dim CellValue As String
    CellValue = Range(CellLocation).Value
    
    If CellValue = "" Then
      Range(CellLocation).Value = "A"
    End If
    
    If IsNumeric(CellValue) Then
      Range(CellLocation).Value = CellValue & "A"
    End If

End Function

Function ChangeNumbers(CurrentNumber, CellNumberInfo)

  Dim LetterAtEnd As String

  'If there is a letter, replace old number with new number
  LetterAtEnd = Right(CellNumberInfo, 1)
  LetterAtEnd = UCase(LetterAtEnd)
  ChangeNumbers = CurrentNumber & LetterAtEnd

End Function
