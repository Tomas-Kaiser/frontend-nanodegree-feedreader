/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();         //if array allFeeds is defined
            expect(allFeeds.length).not.toBe(0);    //to ensure, that array allFeeds is not empty
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have a URL & not empty', () => {
            //loop forEach
            allFeeds.forEach( (fd) => {              //fd is object of the array allFeeds & iterates via forEach method
                expect(fd.url).toBeDefined();           //if url in the array is defined
                expect(fd.url.length).not.toBe(0);      //to ensure, that the array allFeeds of url is not empty
            })
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a name & not empty', () => {
            //loop forEach
            allFeeds.forEach( (fd) => {             //fd is object of the array allFeeds & iterates via forEach method
                expect(fd.name).toBeDefined();          //if name in the array is defined
                expect(fd.name.length).not.toBe(0);     //to ensure, that the array allFeeds of name is not empty
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', () => {
 
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', () => {                                 //If the hamburger is hidden by default
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('changes visibility when the menu icon is clicked', () => {
            let menu = $('.menu-icon-link');

            menu.click();   //when the menu is clicked
            expect($(document.body).hasClass('menu-hidden')).toBe(false);
            menu.click();   //when the menu is clicked again
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        })
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach( (done) => {
            loadFeed(0, done);
        });

        it('has at least a single .entry element within the .feed container', (done) => {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe ("New Feed Selection", () => {
        /* Τest that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
            //These hold the values for two feeds
            let feedOne, feedTwo;
            
    
            beforeEach( (done) => {
                loadFeed(0, () => {                     //This is first feed
                    feedOne = $('.feed').html(); 
                    
                    loadFeed(1, () => {                 //This is second feed
                        feedTwo = $('.feed').html();
                        done();
                    });
                });
            });
    
            it('when a new feed is loaded, the content actually changes', (done) => {
                expect(feedOne).not.toEqual(feedTwo);
                done();
            });
        })
}());
