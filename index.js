function hello(name) {
  console.log("Hello " + name);
}

hello("sarxel");
hello("AKAM")




// Define the maximum number of requests per second
const MAX_REQUESTS_PER_SECOND = 1;

// Define an array to store timestamps of each request
const requestTimes = [];

// Create a function to check if the number of requests exceeds the maximum allowed
function isRequestAllowed() {
  // Remove any request timestamps that are older than 1 second
  requestTimes.filter((time) => time > Date.now() - 1000);
  
  // Check if the number of requests in the last second exceeds the maximum allowed
  if (requestTimes.length > MAX_REQUESTS_PER_SECOND) {
    return false;
  }
  
  // Add the current request timestamp to the array
  requestTimes.push(Date.now());
  
  // If the number of requests is below the maximum allowed, return true
  return true;
}

// Example usage
if (isRequestAllowed()) {
  // Handle the request
} else {
  // Return an error message or redirect to a different page
}
