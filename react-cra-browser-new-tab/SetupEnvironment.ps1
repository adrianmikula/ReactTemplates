# DEV ENVIRONMENT SETUP SCRIPT
# By Adrian Mikula
#
# Before running this script, you need to grant permission to run it in PowerShell:
#   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass



echo "Welcome to the Developer Environment Setup Script"


# check if NVM and Node.JS are already installed
try
{
    if (nvm -version)
    {
        Write-Warning "NVM is already installed"
    }
}
catch 
{
    echo "NVM is not installed"

    try
    {
        if (node -v)
        {
            Write-Warning  "Node is already installed.  Please uninstall your current Node version before continuing."
            exit(1)
        }
    }
    catch 
    {
        echo "Node is not installed"
        
        # open the NVM download in a web browser
        $Confirm = Read-host "Press ENTER to download Node Version Manager"
        start-process "https://github.com/coreybutler/nvm-windows/releases/download/1.1.10/nvm-setup.exe"
        $Confirm = Read-host "Press ENTER once Node Version Manager is installed"

        try
        {
            if (nvm -version)
            {
                echo "NVM installation succeeded"
            }
        }
        catch 
        {
            Write-Warning "NVM installation failed"
            exit(1)
        }
    }
}


# install the required Node.JS version
nvm install 16.16.0
nvm use 16.16.0
nvm list

# install required node packages
$Confirm = Read-host "Press ENTER to download Visual Studio Code"
npm install

# open VSCode download in a web browser
$Confirm = Read-host "Press ENTER to download Visual Studio Code"
start-process "https://code.visualstudio.com/Download"
$Confirm = Read-host "Press ENTER once Visual Studio Code is installed"

if ($Confirm -ne "YES" )
{

    echo "User did not confirm VS Code installation"
    exit(1)
}
