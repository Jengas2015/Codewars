/* 
Executing a SQL command will "consume" the query, so it's unlike setting up code normally, where you'd normally just keep the code as is and not delete it and revise it upon each running (execution) of the code depending on its current state.

Reiterating question: If we have any values that cannot be nullable, then do we have to assume it will contain a default value? If it doesn't containe a default value, will I get an error? I noticed a couple times when setting ValidFrom and ValidTo (I think when first initializing the temporal table), it would specify NOT NULL to both settings, but not provide an explicit default value (at least none I could tell)

I ran into an issue where I typo'd the name of a column as 'EmpoyeeId'. I was able to get it resolved with AI help, but it also warned me to check for dependencies that might be affected by the change. How would I go about renaming a column in the most careful way possible?


*/