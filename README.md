# Alnasoft unit testing course

Hello and welcome to Alnasoft unit testing course

## To get started to the following steps

1. Create a github account at [github.com](https://github.com/join)
2. Install git on your system [install](https://github.com/git-guides/install-git)
    - Open Git BASH terminal window and type in `git version`
    - you should see a new line printed with something like `git version 2.24.3` note your version may differ.
3. Make sure you have node installed on your system, you get get it here [link](https://nodejs.org/en/)
    - You can run `node --version` in your Git BASH terminal and if you see some version printed, you're ok to proceed.
    - If you're having difficulties you can search the web on how to install node for your system here's an [example](https://duckduckgo.com/?t=ffab&q=how+to+install+node+on+windows&ia=web)
4. Make sure you have some sort of code editor installed on your system, I recommend [VS Code](https://code.visualstudio.com/)
5. Ok now we have all the tools required follow these steps to download the git repository onto your system.
    - In your Git BASH terminal type `pwd` and hit enter, it should print out the current directory your terminal cursor is at.
    - Copy paste this line `git clone https://github.com/Neophen/asw_unit_testing_course.git` this will download the repository onto your system, at the current folder with the name `asw_unit_testing_course`
    - type in `cd asw_unit_testing_course` and hit enter
    - type in `pwd` and hit enter you should see that now your path ends with `/asw_unit_testing_course` meaning you're in this directory
    - type in `code .` and hit enter this should open the Vs Code editor window
    - ok now you can open a new terminal window in the editor `View->Terminal` and make sure that the terminal used is Git Bash
6. Run `npm install -g pnpm` this will install a pnpm package manager which is much faster.
7. Then run `pnpm i` to install all the project dependencies.
8. And for the last step run `pnpm test` if all went fine you should see the following in your terminal:
<img width="738" alt="success" src="https://user-images.githubusercontent.com/6092928/115994881-8b67ea80-a5e1-11eb-94ff-3c5129b5c632.png">

Ok You're done with the setup! See you in the lessons.
