/* For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1 */

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length;
    }
    pageCount() {
        // returns the number of pages
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }
        //first find the index of the first item on the page by multiplying pageIndex by the number of items per page
        let start = pageIndex * this.itemsPerPage;
        //next find the index of the last item on the page by adding the maximum number of items per page to the first item's index. This could potentially result in an index that exceeds the number of total available items, so to prepare for that case, we also include the itemCount and take whichever value is smaller. For example, if there are 12 items that can take 10 items per page, "end" might give a value of 20 by adding start (10) to itemsPerPage (also 10). To remedy this, we simply take the itemCount instead.
        let end = Math.min(start + this.itemsPerPage, this.itemCount());
        //finally we get the number of items on the current page by subtracting the starting index from the last index.
        return end - start;
    }

    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1;
        }
        //by dividing the item's current index by the number of items allowable per page, we can derive which page an item is located. For example, for item 11 with 10 items per page, we can determine that it's located on page index 1 (the second page based on a zero index) We take the floor because taking the ceiling would give us page index 2 for item 11, effectively skipping page index 1 and placing item 11 in page index 2 instead.
        return Math.floor(itemIndex / this.itemsPerPage);


    }
}