$stageFolder = "stage"

# Create a working tree to modify the gh-pages branch
git worktree add $stageFolder gh-pages

# Empty the gh-pages branch from it's previous build
#rm -rf $stageFolder/*
Remove-Item -Recurse -Force -Exclude .* $stageFolder/*

# Create a new build, move it into the stage folder for gh-pages, 
# and set the current context to that folder
grunt build 
Move-Item docs/build/* $stageFolder 
Set-Location $stageFolder

# Prepend the basepath to all absolute links for gh-pages
$files = Get-ChildItem $path -Recurse -Filter ".html"
foreach($file in $files){
  $filetext = Get-Content $file.FullName -Raw
  $filetextNew = $filetext     -replace '(href=\"?\/|src=\"?\/)([^\/])', '$1design/$2'
  $filetextNew = $filetextNew  -replace "register[(]'\/sw","register('\/design\/sw"
  Set-Content $file.FullName $filetextNew
}

# Add all of the changes to the commit, commit the changes, 
# and push them up to github
git add --all .
git commit -m "Deploying to gh-pages"
git push origin gh-pages --quiet

# Exit the worktree folder and remove the worktree
Set-Location ..
git worktree remove $stageFolder