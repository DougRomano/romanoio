---
path: "/fixing-terminal-history"
date: "2018-09-17T03:15:59.165Z"
title: "Improve your terminal History"
tags: ['bash', 'history', 'commandline']
excerpt: "Fixing the terminal history command"
---

#ARRRROOOOOOOOO
I rely on the history command heavly during my day to day coding tasks.  

History with closing the terminal.

Expand number of entries

Distinct dups.

Save entries without closing editor

Bash Sessions.

The history command is something I use on a daily basis as full stack developer.  At any one time I may have five to six terminals open at the same time to serve up backend microservice and web node servers setting up the frontend.  So it sufices to say that naviates the $ history can be a time saver.   

The problem with the history command is that the defaults are inadequet and need to be fixed.

Here are a few items that are worth changing

1. By default only save 500 commmand
2. Only save the history command if you gracefully exit the terminal. 
3. Rewrites bash history once the max number of commands is reached.
4. With multiple windows open, you can't see the history until you close all the windows and even then I have had history not saved.

I believe these standards go far back and may been been initially implemented for computers with limited resources, and most likely only one at a time. Aside from the history, changing the defaults are quick and easy.






