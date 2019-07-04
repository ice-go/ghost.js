

# GHost.js

<br />
<br />

## :game_die: Overview
<br/>

Ghost++ — is a Warcraft III game hosting bot.
It can host Warcraft III games on LAN, on battle.net, on PVPGN, and on any combination of these networks at the same time.

 As the original project [ghostplusplus](https://github.com/w3gh/ghostplusplus) based on [ghost](https://github.com/w3gh/ghost),

This one is a try to port ghost++ to js.
Here is the original repo location [ghost.js](https://github.com/w3gh/ghost.js) started and maintained by JiLiZART (Nikolay Kostyurin)

<br />
<br />
<br />


## :bookmark_tabs: Navigation
<br/>

1. [Demo](#tv-demo)
2. [Prerequisites](#construction-prerequisites)
3. [Installation](#hammer-installation)
4. [Launch](#electric_plug-launch)
5. [Platform Specific](#wrench-platform-specific)
6. [Create issue](#loudspeaker-create-issue)

<br />
<br />
<br />

## :tv: Demo
Click on it below :

[![asciicast](https://asciinema.org/a/75HoG34I0UEk9lNvDqeO430Cp.svg)](https://asciinema.org/a/75HoG34I0UEk9lNvDqeO430Cp)

<br />
<br />
<br />

## :construction: Prerequisites
<br/>

#### You must have :
- Node.js
- Npm

<br />

#### or install :

1. Install Node Version Manager with these commands:
     ```
    sudo apt update
    sudo apt install build-essential ; sudo apt install libssl-dev
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    source ~/.bashrc
    ```

<br/>

2. Install latest Node.js :
    ```
    nvm install node
    nvm use node
    ```
<br/>

3. Install Npm :
    ```
    nvm install --latest-npm
    ```
<br/>

<br />
<br />
<br />


## :hammer: Installation
<br/>


   1. Install required packages :
    ```sudo apt install git cmake libclang-6.0-dev libgmp10 libgmp-dev libgmp3-dev```
   2. Go to the directory where you want to store your bot :
    ```cd ~```
   3. Clone this repo to your computer
    ```git clone https://github.com/ice-go/ghost.js```
   4. Go to cloned repo :
    ```ghost.js```
   5. Install Node modules :
    ```npm i```
    <br/><br/>
    
     
        #####  Bncsutil compilation

        ```
        cd bncsutil
        cmake -G "Unix Makefiles" -B./build -H./
        cd build && make
        sudo make install
        cd .. && cp -r src/bncsutil/ ../src/libbncsutil/src/
        cd .. && rm -rf bncsutil
        sudo ln -s /usr/local/lib/libbncsutil.so libbncsutil.so
        ```
        <br/>

        ##### StormLib compilation

        ```
        git clone https://github.com/ladislav-zezula/StormLib.git
        cd StormLib
        mv Makefile.linux Makefile && make
        sudo make install
        cp -r src/ ../src/libStorm/src/
        cd .. && rm -rf Stormlib
        sudo ln -s /usr/local/lib/libStorm.so /usr/lib/libstorm.so
        ```

<br />
<br />
<br />

## :electric_plug: Launch

<br/>

###### Npm Commands

| name          | Description         |
| ------------- | ------------------- |
| `npm start`   | Regular execution   |
| `npm run dev` | Start in debug mode |


<br />
<br />
<br />


## :wrench: Platform Specific
If you get sort of bncsutil/stormlib errors then you can get rid of it by generating wrappers regarding to your platform:
<br />
##### Bncsutil wrapper

    cd src/libbncsutil
    ./ffi-generate.sh > libbncsutil.js
    cd -
<br />

##### Stormlib wrapper

    cd src/libStorm
    ./ffi-generate.sh > libStorm.js
    cd -

 Next, you must comment out undefined properties related to libbncsutil or libstorm.

<br />
<br />
<br />

## :loudspeaker: Create issue

If you have any questions feel free to ask them [here](https://github.com/ice-go/ghost.js/issues).
