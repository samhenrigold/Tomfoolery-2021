# Tomfoolery-2021
## Navigating my first year of web development

Up until last year, I was #NoCode gang for life; we’re ride or die over here. WebFlow, Zapier, the works. I could almost stomach HTML and CSS but you could only go so far before needing to type the dreaded `<script>` tag. That stubborness was also very expensive. I think I paid Squarespace $110/year for several years? Then I switched to WebFlow and paid them $192 a year. Wild. In 2021, however, I went all in with web development. And honestly? It's been great. Well, great is a bit strong. It's been extremely alright. 

I chose the web because, of the two platforms I was interested in (Apple followed by the web), the web has caused me less psychological damage.

Being in the Apple bubble, the natural progression was to start developing for Apple platforms like tvOS and the others. I must've given developing for Apple and Swift a dozen separate tries before concluding that I suck at it and do not enjoy it. I feel like you're lured in with the shininess of Swift but one wrong turn and whoops now you're learning Objective C. I'm a designer by trade, the C language is absolutely terrifying. Include headers? `void`?! [Larry, I draw rectangles for money.](https://www.youtube.com/watch?v=76HijAoXi6k)

I suck at web development but at least I enjoy it. You don't have to compile anything and it runs on, like, every device made in the past decade. The closest parallel to "whoops Objective C time" with webdev is finding a StackOverflow answer that looks promising and "whoops it's jQuery".

Since I started diving deeper into webdev last year, I've catalogued my various experiments and projects in a folder labeled "Tomfoolery". I don't know why, it was probably just the word stuck in my head at the time. It just as easily could've been titled "Chifferobe" or "Parabola". I've opened up those projects alongside this blog post so you can poke around how I personally learned about developing for the web.

### March 12, 2021 - CSS Test

I only barely remember the context for this one. I think I was trying to accomplish three things: figure out how to make a frosted glass effect, learn how gradients and those `::before` and `::after` things worked in CSS, and how CSS can do some basic interactivity. 

Resources used:

- [The “Checkbox Hack” (and things you can do with it)](https://css-tricks.com/the-checkbox-hack/)
- [Backdrop Filter effect with CSS](https://css-tricks.com/backdrop-filter-effect-with-css/) 
- [linear-gradient() | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient())

### March 14, 2021 - Pitfall

My first actual attempt at JavaScript! I haven't looked at this code in months and I wanna throw up. I mean it's readable, I understand what's going on, but violates every one of my senses. It's also pretty broken.

Resource used:

- [Javascript Falling Ball Game Tutorial](https://www.youtube.com/watch?v=gX3gSJ43f7I)

### March 14, 2021 - JS Mouse Interaction

Looks like I'm still using that clump of variables. Jeez. This looks like it was me trying to figure out how mouse events worked in JS and how JS interacts with CSS animations. In fairness, I still have no idea. "Witchcraft" is my working theory.

### March 14, 2021 - Fetch Data

Did I not have class on the 14th? What the hell was going on?! I recall this was a big project for me, I learned a bunch of new things here. Of course the titular topic, grabbing data from an API, but it looks like I also learned about using third party libraries, asynchronous functions, and the canvas element. It was also around this time I learned about The Coding Train on YouTube, one of my favorite resources over the past year.

Resource used:

- [Graphing with Chart.js - Working With Data & APIs in JavaScript](https://www.youtube.com/watch?v=5-ptp9tRApM)

### March 15, 2021 - canvas-game

I was fairly confused when I opened the HTML file, expecting a game, and finding a whiteboard drawing app instead. Then I saw one of the files was titled `gamecode-stopped_bc_trig_was_involved.js` and I straight up cackled. I learned a bit more about the Canvas element here, this time working with it without the use of libraries. I also started exploring the Mozilla Developer Network (MDN) documentation for HTML and learned about an input element that would be useful for this drawing app: `<input type="color">`.

Resources used:

- [HTML5 Canvas and JavaScript Game Tutorial](https://www.youtube.com/watch?v=eI9idPTT0c4)
- [&lt;input type="color"&gt; | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)

### March 16, 2021 - Spelling Bee

I was a religious player of The New York Times’ Spelling Bee at this point and I tried to replicate it. I think I attempted just writing the script before thinking about the HTML, there's nothing in the HTML. It also looks like this was my first attempt at learning Node judging by the use of `require` and the various requests to read a local file. I *imagine* this is because of a Tom Scott video I watched where he used Node to do something similar. 

Resource used: 

- [FizzBuzz: One Simple Interview Question](https://www.youtube.com/watch?v=QPZ0pIK_wsc)

### March 20, 2021 - Grab and Send

This looks fairly involved?? I was watching an old WWDC State of the Union session from 2011 and Cabel from Panic demoed a neat Safari extention they built. I tried to replicate that. Some things to note here:

1. I did not understand why programatically grabbing a screenshot of the browser is a ginormous pain in the ass. Security is why it is a giant pain in the ass.
2. I'm using a ton of libraries here. No idea why I even needed anime.js, this easily could've been done in CSS.
3. It looks like this was my first time using CSS grid. Just like CSS animations, it is also a confusing mess powered by witchcraft.
4. The best solution I could think of to inject a generated image into the document was to encode it with base64 and then set it as the background image style. That's objectivly insane. 
5. I borrowed the linen pattern from an old version of Mac OS X.

### March 28, 2021 - Excl

This one will not work in your browser. So back in 2012, Microsoft was trying to pass a [CSS Exclusions](http://dev.w3.org/csswg/css3-exclusions/) property through the standards body. This, in theory, would've been awesome. Lay out your websites in funky ways! The web as a publishing platform! Gangnam Style!!

Tragically, the W3C was not Gangnam Style. Not even remotely Gangnam Style. The `wrap-flow` property was never adopted by any other browser vendor and is [all but dead](https://caniuse.com/css-exclusions). I still built this little sandbox to see how it worked, I made a draggable rectangle that could grow and expand with a spring animation. To my delight, it worked on Internet Explorer 11 and worked exactly as I had hoped.

https://twitter.com/samhenrigold/status/1376325602324713473

### April 3, 2021 - Fussing with Canvas

Dots are drawn in random sizes and positions when you refresh the page. I don't have anything else to add. There was an extra JS file that doesn't seem to be used for anything, I imagine this was a first attempt that I deemed so cursed that I had to just make a separate file. 

### April 23, 2021 - Spriteimation

Discovered Frank’s Laboratory, another great coding YouTuber. Idk why but I'm proud of myself for using the canvas this much early on, it's not a particularly easy thing to work with.

Resource used:

- [Sprite Animation in JavaScript](https://www.youtube.com/watch?v=CY0HE277IBM)

### April 25, 2021 - WordCrush

This has several layers of failure. So first, I wanted to learn how to make a word game and figured the best way to do so is by **learning a fucking game engine**. Then I decided that a full game is rather ballsy for a first attempt, so I massivlely scaled back to just replicating a DVD screensaver where the logo would bounce off the screen edges. Then I didn't even do that. 

### May 3, 2021 - CSSZenGarden

Another time I "borrowed" a texture from OS X, haha. So CSSZenGarden was a whole movement in the mid 2000s to try and get web designers to separate their CSS from their HTML. The idea being you're given a plain HTML document that links to a blank style.css file and you (the designer) have to style it in some wild way using CSS without ever touching the HTML. Some people took this in a neat direction, I went with a 90s theme. 1790s, to be exact. 

Resources used: 

- http://www.csszengarden.com
- Not so much a resource but to learn more about the project itself, check out the comments [here](https://news.ycombinator.com/item?id=22627018), [here](https://news.ycombinator.com/item?id=29668910), and [here](https://news.ycombinator.com/item?id=6076163). It's fun to go back and see people talking about how this inspired them to get into web development years ago. You also stumble upon [some true relics of web design patterns](http://www.csszengarden.com/211/) like locking down the document’s width to 630px and using background-image EVERYWHERE. Visually impared be damned.

### May 30, 2021 - sandbox

Awful name. Give your folders better names, past me. I was working on a personal website redesign now that I've got [the power of God and anime on my side](https://www.youtube.com/watch?v=Tlwda9S58Lg) and I tried to emulate the scroll-zoom transition Apple uses for the A13 chip section of the [iPhone SE product page](https://www.apple.com/iphone-se/).

### July 4, 2021 - owo

Nothing interesting happened in June. Just a bunch of dead-in-the-water projects. But on July 4, the nation's birthday, I did my patriotic duty by building the dumbest possible bookmarklet that owo-ifies whatever webpage you're on. 

This is loosely-based on the [Node package](https://github.com/mohan-cao/owoify-js/) powering the [@BBCBweaking](https://twitter.com/BBCBweaking) account on Twitter. I wanted this to run as a bookmarklet, so I cloned the package, stripped it down to the bare minimum, and then spent a while researching how to jam this into as small as possible of a bookmarklet. You can twy it out [hewe uwu](https://samhenri.gold/blog/owo/).

### July 6, 2021 - grid

A continuation of the "sandbox" project from May 30. This was, surprise, a grid. Honestly it still looks pretty dope. No JS here, just HTML and CSS.

Resource used:

- [html - CSS animation similar to Mac OS X 10.8 invalid password "shake"? - Stack Overflow](https://stackoverflow.com/questions/15726000/css-animation-similar-to-mac-os-x-10-8-invalid-password-shake)

### July 30, 2021 - AnnotationsRestored

This was my first actual attempt at contributing to an open source project. Before YouTube got rid of annotations back in 2019, a bunch of archivists scraped the site for every video using the feature and saved those annotations to a database. AnnotationsRestored is a Chrome extention that checks if you're on a YouTube video, checks if they've got annotations for it, and if so, loads them. My contributions (two of ’em) were mostly UX. I added the ability to [toggle them through the native YouTube player controls menu](https://github.com/afrmtbl/AnnotationsRestored/pull/46) and I made some [visual/copy edits](visual/copy edits) to the extention window. Both were accepted by the maintainer and the changes are live in the Chrome store!

### August 3, 2021 - Jams '08

Aw, the first time I used a JS framework. They grow up so fast. I used Svelte here, I just had more fun with it than React. I wanted a way to share my current Spotify playlist with my Apple Music friends, so I built the most unhinged and over-the-top way of doing so. A circa-2008 iTunes Store-themed list of songs complete with previews from Apple's iTunes API. I remember very little of this other than 1. being super proud of getting it to work and 2. getting so tired of dealing with it that I ended up making the play/pause icon a bitmap image instead of making it show the progress like the original app does.

### November 24, 2021 - Mandala Doodle Pad

A fairly involved project math-wise. I was mostly curious if I could use the pressure reading from an Apple Pencil on a web app. Turns out, yes. Back in 2015 when the first Apple Pencil came out, someone made a super helpful [writeup](https://github.com/shuding/apple-pencil-safari-api-test) and [demo](https://shuding.github.io/apple-pencil-safari-api-test/) about it. I don't remember how the Mandala idea came about, but I ended up fusing the Apple Pencil pressure demo with [Mandala-JS](https://github.com/Icesofty/Mandala-JS). I'll give you one guess as to what that library does. 

There were a few bugs I couldn't figure out and I was about ready to give up for the night so I filed issues on my site's GitHub repo, commited what I had so far, and went to bed. Finding out a few days later that someone had submitted a pull request that fixed a bug I was struggling to find was a lovely surprise (thanks [jayeclark](https://github.com/samhenrigold/sh.g/issues?q=is%3Apr+author%3Ajayeclark)!).



## Wrapping up

If it's not already painfully obvious, I've got the Big Time ADHD. It's easy to think "man I suck at this" after reading Twitter and seeing people announce their shiny new React app. But they have sucked at one point, too.  They currently suck at many things. Like I bet they can't sing the rap verses in Magic by B.o.B. while I fuckin’ crushing it at karaoke night. 

This is all to say learning to code is not a linear journey if you don't want it to. Sure, learning vanilla JS before learning Svelte is a good idea for most people, but if you really just want to build something in Svelte, do it.
