Set-Location $PsScriptRoot;
Set-Location ../buildandreleasetask
tsc
Set-Location $PsScriptRoot;
Set-Location ../

tfx extension create --manifest-globs vss-extension.json --output-path .\publish