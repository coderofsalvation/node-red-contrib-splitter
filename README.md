node-red-node-splitter
====================

This node iterates over an array.

# The idea

In enterprise integration patterns there are many names for this: a splitter, sequencer, iterator or chunkifier.

<img alt="" src="Sequencer.gif"/>

In the end 'splitter' is the best name imho.
More info [here](http://www.enterpriseintegrationpatterns.com/Sequencer.html)

# Why a node?

Well..look at this image, and then imagine using 10 loops in a similar way:

<img alt="" src="nodeloop.jpg"/>

Got the point?
With visual progarmming the [Deutsch Limit](http://en.wikipedia.org/wiki/Deutsch_limit) seems to lure around every corner. Better to make a node for that.

# Installation

Run: 

    npm install node-red-contrib-splitter

# Author

Leon van Kammen, http://coderofsalvation.github.io / http://github.com/coderofsalvation

# License 

BSD
