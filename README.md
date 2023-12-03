# Web Automation Dev - Home assignment

## Comments regarding my solution: 
1. My code can be found here: https://github.com/KatBuxton/apify-task/blob/main/src/Task.ts
2. I wanted to test parts of my code hence the higher number of files in the repository
3. I decided not to include the specific price range as with the given API constraint, there wouldn't have been a significant reduction in the number of calls.
4. The code assumes that the API supports pagination using the 'offset' parameter and that it returns the total number of products. This could be overcome by a different pagination strategy, such as using other available parameters.


#### Rules & recommendations

- The goal of the exercise is to find out if you can write solid code and solve problems.
- Try to finish the exercise as soon as possible. There isn’t a hard deadline but we might prefer earlier candidates. From our experience, candidates take between 2 hours and 2 days to deliver the solution.
- Please do not fake it by asking your more experienced friend. We will find out and it will erode the trust between us.
- Take your time and think it through. Write nice and clean code. Add comments explaining complex parts. Solve it but then refactor it to a robust and readable solution.
- We will not explain the exercise in the middle, you have to send us the whole solution at once. But we are happy if you write comments about what was not clear and why you solved it the way you did.
- You can choose your favourite programming language but we prefer JavaScript/TypeScript
- Once you solve the problem, try to optimize it so it uses the least amount of requests.

#### Task specification

1. Your goal is to extract all products from an imaginary e-commerce JSON API with limited results per search. The API URL origin is `https://api.ecommerce.com/products` . This URL doesn’t exist (it is only imaginary) so don’t try to run the code 🙂
2. The API is called via a simple GET request without a need for special headers and it will return JSON data.
3. Every API call will return max 1000 products. Your goal is to overcome this limitation by creating requests for specific price ranges of products. You don’t know upfront how many products there are total but this number is returned from the API.
4. Each product on the API costs somewhere between $0 and $100,000. 
5. You can make the request more specific by adding a `minPrice` and `maxPrice` query parameters. This way we can overcome the 1000 limit of results per API call.
6. Create an algorithm that will ensure that all products are scraped and accumulate all products into a single array called `products`.
7. This is an example response of the JSON API. `total` means how many products there are on the API for this price range (it will be a different number for whole website or different price range). `count` means how many were returned on this API call (max is 1000). `products` is an array with the length of `count`. We don't care about what is inside the product objects.

```json
{
    "total": 99999,
    "count": 1000,
    "products": [{}, {}, ...]
}
```

8. Is there some expectations your code relies on? If yes, write it in the comments. Could the code be written in a way that does not depend on these expectations?
