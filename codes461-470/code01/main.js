/* Workflow for creating new table in SQL

1. assign table to self from sprint
2. git checkout main
3. git pull origin main (this will make my stuff current with the server)
4. git checkout -b (feature/task#-TaskName-initials) <=this will checkout a new branch with the naming convention for 
5. Load the template db page (dragon ERD) and find the feature name
6. From Visual Studio, go to the solutions explorer > Database > dbo > Tables, and right click on Tables > Add > Table
7. Choose "Table"
8. Name the Table at the bottom before clicking OK
9. Copy over the table's columns and rows from the template DB from step 5
10. Save your work

TESTING Phase
11. Build Solution/Database (order doesn't matter here)
12. In SSMS, reload the database, navigate to the table that you just built, right click and "Select Top 1000 Rows", if the query executed successfully, everything is good on this front.
13. Run Tests from the Test Explorer or find it at the top menu, "Test > Run All Tests"

Pull Requests
14. Check "git status" to make sure the files you wanted changed have been reflected here.
14 a. Maybe merge from main one more time to preemtively deal with merge conflicts? Will have to ask about this later to be sure. Yes, merge from main one more time. It's considered "Best Practice" to be safe and it wouldn't hurt in the worst case.
15. Stage, then commit your changes via git add ., git commit -m "Message"
16. Push your changes


*/