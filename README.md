# wdb-sp23-project Design Doc

I chose to organize the data in two different collections, one for unicorns and one for users.
When going about how to choose this schema, I utilized the different entities that are utilized within the database, unicorns and their riders.
For the unicorns, it was easy to set straight its attributes (name, fu, hornlength, isbaby, and owner) as these were the traits that every unicorn shared in common.
For the riders (users), it was a bit more complicated consdering that they were able to ride many different unicorns and, for each unicorn, we need to keep track of the distance they rode on the unicorn and over how many trips.
In order to solve this challenge, I decided to store a list of objects for each user, with each object representing a unicorn that was ridden by the rider.
With this approach, it is made much easier to see which unicorns were ridden by each rider and for how long.
Additionally, with this schema, it is easy to iterate through all users in the Mongo Collection and easily identify which user has ridden the particular unicorn for the longest time.


It was a harder for me to implement the 'ride' routes through Mongoose because it has been many years since I have worked on a project like this through a Mongoose schema.
Although it did not take long to decide on a a proper structure and approach to impelement the REST API, integration with Mongoose is a subject I have forgot a lot about, causing me to take a lot of time to get my system set up with the necessary tools.

When deciding on response codes, I utilized the help of these MDN docs (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses). 
Through the help of these docs, I was able to identify which codes are relevant for each of the respective API calls to the endpoints depending on the success of the query.
