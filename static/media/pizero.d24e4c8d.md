# Pi Zero in an Original Super Famicom Controller
## This article is **BAD**. It was written a long time ago on my old website. I like to think my writing has improved since. I am keeping this up here because it is interesting enough (imo) to save.
When I got my first Raspberry Pi (a 2 model B if I'm remembering correctly) I had some fun playing with it for about a week before the novelty sort of wore off a bit. Instead I found it to be a really handy dedicated plug and play emulator. This was also pretty fun for a while until I realised just using my PC was much less hastle. Thats when I considered putting the novelty (and convenience) factor back into my Pi by embedding it directly in the controller.

This is also the first time I have played with electronics in any meaningful way, so my ulterior motive here was to teach myself souldering and basic electronics concepts. 

After starting, I found similar projects by [Anthony Caccese](https://www.youtube.com/watch?v=j5dXx0NhLxg) and [Casperdroid5](https://sudomod.com/forum/viewtopic.php?t=5400) which gave me some more ideas about placement of things and wiring.
## Idea
The whole point of doing this is to make a way to play old games wherever a display (and USB port) are available while also giving an old controller new life. I almost immediatley thought of the SNES controller, and realized it was ideal for this project. The Pi Zero W fits inside snugly and struggles with much past the 16 bit era regardless. Plus, I have the most nostaliga for SNES games.
## What I used
### Raspberry Pi Zero W
The heart of the system is, of course, the Pi itself. I decided not to cheap out and get the earlier Pi Zero (sans-W) so that I could easily update metadata, SSH into it and add a keyboard without having to open the whole thing each time.
### Super Famicom Controller (SHVC-005)
And of course to make it look nice on my desk I decided to use an original Super Famicom Controller I found somwhere on eBay. These go for pretty cheap (depending on how beat up they are) but be aware we will be doing some back alley surgery on it.
### Micro USB Breakout Board
Adding a micro USB port seperate to the one already on the Pi means that I can have it near the edge of the case. This means that I can easily plug and unplug a USB power cable from the system while also not having any cables coming out from the bottom (eww).
### Tactile button
I added a long tactile button that protrudes from inside the case. Using a small Python script, this powers off the Pi safely.
### How I did It
Before following this blindly, understand that I am a complete amature with electronics - im much more comfy with the software side of thigs. Keeping this in mind, please read the "What I Should Have Done Different" first.
### Wiring
Luckily for us, RetroPie includes a whole bunch of drivers that allow old controllers to be used with it meaning we just have to wire everything up properly. Firstly, the original cable has to be removed from the SNES board.

Desouldering the cable looks messy but as long as youre careful it will work just fine. After this, we need to connect the USB breakout to the test pads on the Pi. Make sure youre smart and use enough wire for it to reach where you want it to sit (I had to resoulder what I have here, oops).

Keep in mind that connecting the breakout to the test pads does not necessarily "add" another USB port. Instead it means if you plug a cable into the brekout it would be the same as plugging it into the original port. Youll then want to connect where the original SNES cable used to be to the correct GPIO ports on the Pi (see the wiring diagram).

The final piece I included was the power button. I also wired this to the GPIO ports on the Pi and wrote a very basic Python script that checks if the pin recieves a signal and shuts down when it does.
### Case Modifications
To make sure all the stuff we need fits in the controller, a few modifications are needed. Firstly, some pegs and supports in the controller need to be cut out to fit the Pi inside - its best to fit the system in as best you can and only remove what you need. Holes also need to be drilled/cut for the button and ports. I used dremel for this, although my cuts are pretty messy.
### Software
The Pi is running RetroPie, a handy Debian-based distro with drivers for controllers and a load of emulators built in. Other than loading the games (instructions for all this are on the [RetroPie](https://retropie.org.uk/) so I won't go into detail) I had to make sure it recognised the inputs from the controller. To do this I followed a handy guide by [Blugoo](https://blug00.blogspot.com/2016/03/how-i-got-the-gamecon-driver-to-work-on-retropie.html). Just make sure that you choose "2 snes controllers" instead of an n64 controller.

And thats pretty much it! Im fairly happy with how it ended up, although there are a few things I would change for next time to make it nicer.
## What I Should Have Done Differently
While I'm happy with what I ended up with there are a few things I could change or do differently to make it a little better.
### Neater Holes
This is the first time I've ever used Dremel to cut holes and to be honest its very rough. I'd like to practice some more before attempting this again to make sure the holes are even and fit the wires snugly.
### Button Placement
Putting the button on the side of the controller was really dumb in retrospect. Its easy to accidentally press when playing and would make much more sense on the bottom of the controller.
### HDMI Breakout
I thought I could cheap out and center the HDMI port of the Pi in the controller to use it directly. In actuality this made it difficult to plug and unplug the HDMI and meant I had to cut more stuff out of the case than I could have using a HDMI breakout.
## Considerations
### Battery
I could have used a rechargable battery. This would make it easier to move around however the device will be wired via HDMI anyway. Its more costly than it's worth in my opinion.
### LED
I was close to including an LED indicator somewhere on the system for power status and I still don't know if I should have or not. It might be handy but you can tell if the Pi is on or not without it.