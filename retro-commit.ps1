# ===============================
# 1. Identity & File Discovery
# ===============================
$gitName  = (git config user.name).Trim()
$gitEmail = (git config user.email).Trim()

# Get untracked files only (same logic you trust)
$untracked = git ls-files --others --exclude-standard
$files = Get-ChildItem -File -Recurse | Where-Object {
    $untracked -contains $_.FullName.Replace((Get-Location).Path + "\", "").Replace("\", "/")
} 

if (-not $files -or $files.Count -eq 0) {
    Write-Host "No files found to commit." -ForegroundColor Yellow
    exit
}

$totalFiles = $files.Count
$fileIndex  = 0

# ===============================
# 2. Timeline Setup (FORWARD)
# ===============================
$startDate = Get-Date "2025-11-18"
$today     = Get-Date "2026-02-07"
$currentDay = $startDate

Write-Host "Day-driven commits from $($startDate.ToShortDateString()) → today" -ForegroundColor Cyan
Write-Host "Files to commit: $totalFiles`n" -ForegroundColor Cyan

# ===============================
# 3. Day-Driven Commit Loop
# ===============================
while ($currentDay -le $today -or $fileIndex -lt $totalFiles) {

    $commitsToday = 0
    $dow = $currentDay.DayOfWeek
    $isWorkDay = $true

    # --- Skip Rules ---
    if ($dow -eq 'Sunday') {
        $isWorkDay = $false
    }
    elseif ($dow -eq 'Saturday' -and (Get-Random -Minimum 1 -Maximum 101) -le 50) {
        $isWorkDay = $false
    }
    elseif ((Get-Random -Minimum 1 -Maximum 101) -le 20) {
        $isWorkDay = $false   # life happens
    }

    # --- Commit on workdays if files exist ---
    if ($isWorkDay -and $fileIndex -lt $totalFiles) {

        # At least 1 commit, sometimes more
        $maxToday = Get-Random -Minimum 1 -Maximum 4

        while ($commitsToday -lt $maxToday -and $fileIndex -lt $totalFiles) {

            $fileObj = $files[$fileIndex]
            $relPath = $fileObj.FullName.Replace((Get-Location).Path + "\", "").Replace("\", "/")

            # Random realistic work time
            $commitTime = Get-Date -Year  $currentDay.Year `
                                    -Month $currentDay.Month `
                                    -Day   $currentDay.Day `
                                    -Hour  (Get-Random -Minimum 9 -Maximum 18) `
                                    -Minute(Get-Random -Minimum 0 -Maximum 60) `
                                    -Second(Get-Random -Minimum 0 -Maximum 60)

            $gitDate = $commitTime.ToString("yyyy-MM-ddTHH:mm:ss")

            # Git environment
            $env:GIT_AUTHOR_DATE    = $gitDate
            $env:GIT_COMMITTER_DATE = $gitDate
            $env:GIT_AUTHOR_NAME    = $gitName
            $env:GIT_COMMITTER_NAME = $gitName
            $env:GIT_AUTHOR_EMAIL   = $gitEmail
            $env:GIT_COMMITTER_EMAIL= $gitEmail

            git add "$relPath"
            git commit -m "Add $relPath" --quiet

            $fileIndex++
            $commitsToday++
        }
    }

    # --- Output ---
    if ($commitsToday -eq 0) {
        Write-Host "$($currentDay.ToShortDateString()): no commits" -ForegroundColor DarkGray
    } else {
        Write-Host "$($currentDay.ToShortDateString()): $commitsToday commit(s)" -ForegroundColor Green
    }

    # Advance day
    $currentDay = $currentDay.AddDays(1)

    # Stop once today passed AND no files left
    if ($currentDay -gt $today -and $fileIndex -ge $totalFiles) {
        break
    }
}

# ===============================
# 4. Cleanup
# ===============================
Remove-Item Env:GIT_AUTHOR_NAME,
            Env:GIT_AUTHOR_EMAIL,
            Env:GIT_COMMITTER_NAME,
            Env:GIT_COMMITTER_EMAIL,
            Env:GIT_AUTHOR_DATE,
            Env:GIT_COMMITTER_DATE -ErrorAction SilentlyContinue

Write-Host "`nFinished! Forward, chronological, realistic history created." -ForegroundColor Cyan
