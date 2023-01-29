---
title: "A tool to track time and take notes"
date: 2022-09-13
tags: ["notes"]
excerpt: "tl;dr I used notepad.exe (but also code)"
---
## Rationale
Other than wanting an excuse to write more code, I wanted to get better at explaining what happened after a project is completed. I have no trouble explaining my thought process *during* the project, but after it's complete, I need to rely on good notes. The git commit messages and comments throughout my code just weren't enough. I needed a tool to jot down my thoughts in a semi-organized way.

There are probably more automated and better designed apps for this, but I wanted to take notes quickly, without needing to go too far from my coding workspace: a terminal and VSCode.

## Notepad.exe 
Notepad has a feature that is surprisingly delightful to discover: it will print a timestamp every time you press <key>F5</key> or every time you open a file that has `.LOG` as its first line. 

## Basic syntax
### Aliases
I wanted my function names to actually communicate what they were doing, but not take too long to type out. For the function definition, I used actual words. Then I created shorthands like `np` for `notepad` to let me work faster in the terminal.

### Parameters
I needed two kinds: switches and strings. 'Switches' are boolean flags that don't need a value, because the fact that they're included in the command means the value of that parameter is `true`. They also don't come with a default position.

String parameters do come with a default position: it's assigned based on the order the parameters were written in the function definition. We can skip specifying the flag if we pass in the parameters in that same order. Otherwise, `-flag "string content"` for each parameter we pass in. 

## Wish list
I'd like to tag messages (e.g. bug fix, new tool, new config, new component, etc.), so that it's easy to see the usual parts of a project. That being said, here's what I'm currently using.

## The complete file
```powershell
<#
.SYNOPSIS
  Creates a new .LOG file to be opened in Notepad.exe. 
  Default filename = `work-log.txt`; optional parameter to rename file.
#>

Function Create-Log {
  if ($args[0]) {$name = $args[0] + "-log.txt"}
  else {$name = "work-log.txt"}
  echo ".LOG" >> $name
}

Set-Alias -Name nl -Value Create-Log
Set-Alias -Name np -Value notepad

<#
.SYNOPSIS
  Updates a log file created using the `nl` command.
  Default filename = `work-log.txt`. 
  Opens Notepad.exe if no flags or parameters are provided.
.PARAMETER s
  Flag to mark start of a session.
.PARAMETER e 
  Flag to mark end of a session.
.PARAMETER f 
  Filename of log to edit.
.PARAMETER m 
  Message to add to log file.
#>

Function Update-Log {
  param(
    [switch] $s,
    [switch] $e,
    [string] $f,
    [string] $m
  )

  if ($f) {$name = $f}
  else {$name = "work-log.txt"}
  
  if ($s) {echo "`n" $(Get-Date -UFormat "%I:%M %p %Y-%m-%d")"[[START]]" >> $name}
  elseif ($e) {echo "`n" $(Get-Date -UFormat "%I:%M %p %Y-%m-%d")"[[END]]" >> $name}
  elseif ($m) {echo "`n" $(Get-Date -UFormat "%I:%M %p %Y-%m-%d") $m >> $name}
  else {np $name}
}
Set-Alias -Name ul -Value Update-Log
```