const PROMPTS_RAW = {
  "Look for a hack.": "Can you short-circuit a complex algorithm? Can you short-circuit a complex requirement? Probably you could build a hacky PageRank without knowing anything at all about linear algebra. What kind of shortcuts did you look for when you were first learning to program? If you've forgotten that feeling, set for yourself an impossible task some weekend. Get as much of it done as you can solely by cutting corners.<br><br>Hacks often become excellent long-term solutions. You can't build on top of a hacked area, but the assumption is you may never have to. A hack is an inexpensive attempt to keep momentum.",
  "Look for a good enough approximation.": "Relax the problem wherever possible. Remove any inessential requirements you can find. Seemingly inconsequential or unrelated relaxations have a way of giving you exactly the leverage you need to solve the problem at hand. The practice of 'eventual consistency' in database design is a good illustration of this technique. The technique has a long reach. Sometimes you can make restrictions elsewhere that filter back to your problem.<br><br>Don't shy away from informal solutions like hacks and approximations if the formal solution is heavy work. It is better to save yourself the effort than to appease your sense of order. The world resists elegant solutions, in places.",
  "Have faith in sound-looking abstractions.": "Novel combinations of known high-level strategies almost always work. Trust that you'll be able to work out the details after fitting the parts together. If the parts do fit, there'll be fewer details to handle than if you solved the problem with primitive techniques. An example of this would be using regexes to lex tokens. There's no guarantee to the newcomer that using regexes won't lead to an inescapable problem, and yet, with a little mortar, regexes work great.",
  "Forget about optimizing your code.": "Most of the time unoptimized code is fine. It's also a lot easier to write.<br><br>Say you have to create New File.txt in a directory without overwriting any existing New Files. Don't spend a lot of time figuring out the—fairly complicated—first available name algorithm. Simply append a number to the end of New File to get New File (1). Then check and increment until the name is available. This method will work for a long time, and it degrades gracefully. If it ever becomes a problem you can go back and fix it. One caveat: for a company with enough users, optimizations may be necessary from the start. Check usage data to make a determination.<br><br>If you can't break the habit of chasing optimizations, then do what I do. Leave a comment like POTENTIAL_OPTIMIZATION_POINT with a description of how to go about your optimization. This cures my urge to optimize. Having done this for a while, I find I go back and act on maybe 1 in 20.",
  "Solve the problem directly.": "Pierce right to the center. If the problem reduces to a simple combination of known mathematical objects, then a direct mathematical approach may be the best way to solve it.<br><br>Reddit needs to rank stories based on votes and time. Various mathematical expressions will solve this: complicated expressions involving exponential decay, and so on. They use a relatively 'simple' one involving a logarithm. (In fact almost any formula will work. See the above remark on PageRank.) I don't show the formula here but it is clear and easy to follow with some investment.<br><br>You can envision that, instead of arriving at such a closed formula, your team produces a substantially longer and more convoluted algorithm, which creates maintenance headaches of its own. A direct math solution can be much less accessible and yet still solve its problem as efficiently. In these cases fight for the direct solution...if it's really the true way. In the long run the math way is the right choice even if not everybody feels comfortable about it. It cuts the knot.<br><br>Direct solutions are not always the right way to go about things. One misuse in particular we might call 'the lazy man's load':<blockquote>LAZY MAN'S LOAD. Lazy people frequently take up more than they can safely carry, to save the trouble of coming a second time.<footer>— from Francis Grose's Dictionary of the Vulgar Tongue, 1811</footer></blockquote>In this context we take it to mean that the problem is solved directly in order to avoid theory building. This is not the only misapplication.",
  "Feats are fragile.": "How complicated is the solution you have? Is it mercilessly detailed, though correct, and you can prove the problem admits nothing less complicated? Chances are what you have, while correct, is too fragile to use, and you must resolve to accept a more limited formulation of the problem. (It is easier to identify these situations when they have happened to you several times.) The trickier a solution is, the smaller the pool of people able to maintain it. And for the people who could maintain it, who would want to? Even Google, with its many brilliant programmers, admits defeat on such problems from time to time.",
  "Board up rabbit holes.": "Boarding over a rabbit hole always involves some sacrifice of functionality. So start by figuring out what you can sacrifice and how much of it. Board up rabbit holes even if you plan to go back in later. It's cheap.",
  "Build the theory of the problem.": "The opposite of solving the problem directly. This is exactly the same as what schools of mathematicians do. Most companies take this approach already without knowing the parallel. Simplify the problem in layers like an onion.<blockquote>Results will ripen on the tree that he is patiently gardening, and fall off at the right time of their own juicy weight.<footer>— Leila Schneps, said of Alexander Grothendieck</footer></blockquote>Radix sort uses a series of filters of lesser and lesser coarseness. Sorting piles of stones into big and small piles, then recursing, is similar. These methods can be like lengthening a lever, you go a longer distance but do less work at any given point. That's the way you want to think about solving your problem. <br><br>Taken too far, the theory building approach creates cruft. It can also be a form of procrastination. Its twin is the direct solution.",
  "Shear off a layer.": "Many problems have separable layers. Parsing can be reduced to a series of passes. This a subsection of theory building but worthy of its own mention.",
  "Get red and green right before mixing yellow.": "If you have to combine two separates pieces into some bigger conglomeration, it can be tempting to build the entire thing in one go. The reasoning, and it is naive reasoning, is that building everything together saves time—the hope is to avoid rebuilding pieces that don't fit. Two important facts make this reasoning wrong. The first is that the added complexity of building everything at once slows down the completion of every part. This drags down the overall completion rate. The second is that solving the same problem twice doesn't take twice as long. Solving the same problem again is so much faster that it is essentially free. (Try it with a book of puzzles.) The 'now it's easy' phenomenon is why mathematicians call everything they already know trivial.",
  "A blink lasts 300 milliseconds.": "For most computing applications this is an eternity. If your application depends on interaction, then take full advantage of any anticipated delays. A command-line interpreter returns output to a human only a line at a time, so it doesn't matter how slow the parser is. Even the worst strategies will produce execution times orders of magnitude below the measurable perception limit.<br><br>Bad parsing takes less than a millisecond and cannot be perceived. What this means is that all time spent on optimizing the compiler for this case is absolutely wasted.<br><br>Delays are often based on different thresholds of human perception. For websites this is maybe 50ms, for video games maybe 1ms. Mobile apps are somewhere in the middle.",
  "Zoom in.": "If a tricky piece is causing issues, focus on it exclusively—come back to it the next day if necessary. Let it take up the whole frame.",
  "Add constraints.": "Artificial limits turn exhausting problems into simple ones. A user may need five shipping addresses. They don't need one million.",
  "Mark it WONTFIX.": "The best solution to any problem is to avoid having to solve it in the first place. This is one of your most important tools. All the work you cut is energy saved. Pure gain. If you can't immediately think of a reason not to do something, postpone work on it as long as you can while you try to find a reason. Is it possible to just drop the task? Will your world explode? If not, you probably can. A lot of work is wasted.",
  "Verify your fears, explicitly.": "Are you stuck because you're worried something will run too slow, and you don't know how to get around it? Verify that the case actually runs slow. It might not. The problem may not exist at all. Don't allow yourself to create a ridge of inflatable mountains.",
  "Keep calm.": "If your fears are real, don't panic. Terrible problems often have simple solutions. What looms large one moment may be only a few lines of code the next.<blockquote>If you see ten troubles coming down the road, you can be sure that nine will run into the ditch before they reach you.<footer>— Calvin Coolidge</footer></blockquote>",
  "Take a closer look.": "When was the last time you looked concretely at the abstract thing you're working with? Add more debugging output. Gather more data.",
  "Is it the bug you think it is?": "'Something else' that's broken can make something that works look broken. Or make something broken more broken.",
  "Is it a typo?": "The wrong variable name in otherwise working code can trigger a hunt far from where the problem is.",
  "Stop and think.": "Many problems need to be solved on paper first.",
  "If you lack motivation, find the most interesting thing in the project, start on that, and branch from there.": "",
  "Work append-only.": "Don't worry about mistakes. Don't worry about revising. Later on is when you can go back and edit.<br><br>Revisions keep you covering the same ground, but working append-only keeps you focused on your destination. Re-review causes you to internalize work. You don't want to internalize prematurely because the work might be wrong. You want to look at the work with fresh eyes later, and you can't do that if it's memorized.",
  "Run through the thornbushes.": "If many small, nagging, potentially interlocked, hard-to-resolve details are preventing forward progress, put those thoughts aside and just start. Get which details you can. Then go back and untangle everything.",
  "Change your mind.": "If something seems wrong, maybe it is. Chuck it and start over.",
  "Power through.": "This should always be your last choice. Building a staircase out of sugarcubes is draining.",
  "Look for ways to chain tools.": "Can I reuse any of my tools that I built? Can I combine them in novel ways to solve the problem?<br><br>It doesn't matter how 'heavy duty' the tool is or how hard to build it was. The performance penalty is usually negligible while the savings in effort can be substantial.<br><br>Sometimes a series of hacks can bootstrap a superior solution.",
  "Backtrack.": "If an avenue appears exhausted, instead of continually retracing your steps, backtrack. Your assumption must be wrong. Change your assumption, or go up a level of abstraction and try a different approach. Know good and bad resistance.",
  "Flip the problem around.": "Look at it from a different perspective.<blockquote>You cannot dig a hole in a different place by digging the same hole deeper.<footer>— Edward de Bono, who coined the term 'lateral thinking'</footer></blockquote>",
  "Work forward from where the unfinished part of the code suggests you should.": "",
  "List dependencies to determine order of completion.": "Order work (in the absence of other order) by most likely to inform later work.",
  "Escape the usage vacuum.": "Development should inform other development, up to a point. Actual usage considerations trump. Don't go too long without witnessing an example of the feature you're implementing. Examine the real-world use case and build to it. User test.",
  "Try the naive method first.": "In general, it is faster to try all the easy methods in order of easiness than it is to start with a hard but working method that isn't the easiest such. Sometimes attempts on a problem push back for a reason. They aren't all a challenge to your ability.",
  "Do it both ways.": "Very often doing it both ways is faster than analyzing which is best. Now you also have experimental data instead of just theoretical. Add a toggle if possible. This will let you choose later. Some mistakes are cheaper to make than to avoid. I heard this one from John Carmack; it also appears in a cartoon.",
  "Verify that your assumptions about the outside world are correct.": "Problems in tests harnesses, errors in display statements, and so on, are some of the worst. Hallucinations aren't the problem, whatever is causing the hallucinations is. See if you can trust what you're being told.",
  "Get water flowing through the pipe.": "Connect the system end-to-end, using dummy sections where necessary. The pieces that are finished yield testable output. Replace the dummy parts with real parts as you progress.",
  "Every bug hunt is at worst a log time search through the code base.": "Google the error message, tweak, google the new error...",
  "Write down everything you know about the problem.": "The terminal points of this process are questions to be answered.",
  "This process usually converges: If you're stuck, finish some remaining piece. Then go back and check to see what new possibilities opened up. Repeat.": "",
  "Form hypothesis, test hypothesis, repeat.": "This is the process you use when you're seemingly out of possibilities.",
  "Have opinions.": "It is generally better to guess wrong and check than to sit pondering what might be correct. If it bothers you to have potentially faulty opinions, mentally assign them confidence 0. At any frontier intuition beats proof. Opinion heralds fact.",
  "Have goals and subdivide them.": "Test-driven development is one implementation of this strategy.",
  "Do it the wrong way.": "If you have an idea, but know that it's wrong, build it the wrong way anyway. Then throw it out. This can give you a better grip for your next attempt.<blockquote>...truth will sooner come out of error than from confusion.<footer>— Francis Bacon, 1620</footer></blockquote>",
  "Do something.": " Work on the wrong thing. Make something up. Start even if you don't have all the information. Inaction won't solve the problem.",
  "Put the problem aside and work on something else.": "Thrashing won't solve the problem."
};

const DEBUG = false;
const PROMPTS = Object.keys(PROMPTS_RAW)
  .map(title => ({ title, message: PROMPTS_RAW[title]}));

const sample = array => {
  const nextInt = (min, max) => Math.floor(min + Math.random() * (max - min));
  return array[nextInt(0, array.length)];
};

class ObliquePrompts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.getPrompt() };
  }

  getPrompt() {
    let next = sample(PROMPTS);
    if (this.state && this.state.item) {
      while (this.state.item.title === next.title) {
        next = sample(PROMPTS);
      }
    }
    return next;
  }

  render() {
    if (DEBUG) {
      return PROMPTS.map((item, index) =>
        React.createElement(PromptWidget, { key: index, item }));
    }
    return React.createElement('div', null,
      React.createElement('button', {
        onClick: () => this.setState({ item: this.getPrompt() })
      }, 'Next Prompt'),
      React.createElement(PromptWidget, { item: this.state.item })
    );
  }
}

class PromptWidget extends React.Component {
  render() {
    if (!this.props.item) {
      return null;
    }
    const { title, message } = this.props.item;
    return (
      React.createElement('div', { className: 'prompt' },
        React.createElement('h2', { className: 'title' }, title),
        React.createElement('div', {
          className: 'message',
          dangerouslySetInnerHTML: { __html: message }
        })
      )
    );
  }
}

ReactDOM.render(
  React.createElement(ObliquePrompts, null),
  document.getElementById('root')
);
