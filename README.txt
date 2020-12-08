This website contains my personal portfolio for potential employers to view my projects and resume. The website contains 4 pages:
-index.html: This is the home page of my site that contains the about me section. It also contains my picture in an <img> element.
-resume.html: This page contains a link to my resume.
-projects.html: This page describes the different projects I have worked on in detail.
/Projects
   |
   |----signal_alignment.html: Description of signal alignment research project
                               and my findings.
   |----huff_compression.html: Description of huffman compression project and
                               implementation.
   |----twitter_api.html: Implementation of twitter API without a server. Allows
                          users to search for an account on Twitter and view
                          their timeline

This project contains the following Javascript features:
1. index.html: This page contains animations implemented with javascript when
               the page loads. The background shape changes and the text moves.
               It was challenging to decide how to implement this feature: I
               first expiramented with the CSS clip-path, but had difficulty
               getting the functionality I wanted. I then discovered that I
               needed to animate SVG shapes that I created. Finally, I realized
               I then needed to update the features (polygon and text locations)
               after the animation completed, or they would go back to their
               original shapes. (Also this will look much better when I actually
              style the elements how I would like them :D)

               There is also implements the scrollWindow() feature to scroll to the
               next section whenever the arrow is clicked. I discovered that 1vh
              is equivalent to the windows outerHeight / 100, and was then able
              to calculate the value to scroll using that formula.

2. projects.html: This page contains an image carousel. This carousel
                  automatically cycles every 2 seconds to the next slide.
                  In addition, there is functionality for users to interupt the
                  slide show and click through the slides.

3. resume.html: This page now contains relevant skills. When you hover over the
                skill, the text changes to a description of that skill and how I
                have used it in the past.

4. twitter_api.html: This page was the most challenging to implement. While I
first attempted to make requests to the Twitter API using the XMLHttpRequest
method, I realized that the browser's CORs policies would prevent requests from
localhost. Then I attempted to implement user interaction with the twitter API
with embedded timelines. However, I then realized that these features are
actually iframe widgets, so their HTML content cannot be changed using .innerHTML.
That led me to the dicovery of the Twitter Javascript API widgets. These features
allowed me to create new Twitter timeline widgets on each search, and then update
the inner content of a div.

5. load_script.js: This contains the loader script that is implemented on each
page. Because I wanted to implement this feature on each page without
duplicating code, I researched how to make this code universal. One of the
challenges with this feature was discovering how to opacity interacts with the
visibility of a an image in CSS. Specifically, it is necessary to check if the
opacitity is an empty string and then set it to 1 before decreasing the opacity
to 0.
